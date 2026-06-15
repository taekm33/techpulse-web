#!/usr/bin/env node
// Pre-deploy embed/link validator for TechPulse.
//  - YouTube embeds: oEmbed-verify each; invalid (hallucinated) ids -> the whole
//    <div class="article-video"> block is removed, so a broken embed never ships.
//  - Resource links: HEAD/GET-checked; broken ones are LOGGED only (not auto-removed,
//    since many valid official sites bot-block HEAD with 403 — auto-de-linking would
//    create false positives). Surfaces them for manual review.
// Safety: aborts embed auto-removal if >30% of embeds look invalid (transient outage).
// Always exits 0 (never blocks the daily deploy).

import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const LOCALES = ['kr', 'en']
const files = []
for (const loc of LOCALES) {
  try { for (const f of readdirSync(join('content', loc))) if (f.endsWith('.md')) files.push(join('content', loc, f)) } catch {}
}

const VID_RE = /youtube(?:-nocookie)?\.com\/embed\/([A-Za-z0-9_-]{11})/g
const LINK_RE = /href="(https?:\/\/[^"]+)"/g
const vidSet = new Set(), linkSet = new Set()
for (const p of files) {
  const t = readFileSync(p, 'utf8')
  for (const m of t.matchAll(VID_RE)) vidSet.add(m[1])
  for (const m of t.matchAll(LINK_RE)) linkSet.add(m[1])
}
console.log(`[validate-embeds] ${files.length} articles, ${vidSet.size} embeds, ${linkSet.size} links`)

// returns true=ok, false=definitively broken, null=indeterminate (network) -> treat as ok
async function oembedState(v) {
  try {
    const r = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${v}&format=json`,
      { signal: AbortSignal.timeout(15000) })
    return r.status === 200
  } catch { return null }
}
async function linkState(u) {
  try {
    let r = await fetch(u, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(15000), headers: { 'User-Agent': 'Mozilla/5.0' } })
    if (r.status === 405 || r.status === 0) r = await fetch(u, { method: 'GET', redirect: 'follow', signal: AbortSignal.timeout(15000), headers: { 'User-Agent': 'Mozilla/5.0' } })
    return r.status
  } catch { return null }
}
async function mapLimit(items, n, fn) {
  const out = []
  for (let i = 0; i < items.length; i += n) out.push(...await Promise.all(items.slice(i, i + n).map(fn)))
  return out
}

// ---- embeds ----
const vids = [...vidSet]
const vres = await mapLimit(vids, 10, async v => [v, await oembedState(v)])
const invalid = vres.filter(([, s]) => s === false).map(([v]) => v)
const ratio = invalid.length / Math.max(1, vids.length)
let removedBlocks = 0, touched = new Set()
if (invalid.length && ratio > 0.30) {
  console.log(`[validate-embeds] ⚠️ ${invalid.length}/${vids.length} embeds look invalid (${(ratio*100).toFixed(0)}%) — likely transient. Skipping removal.`)
} else if (invalid.length) {
  console.log(`[validate-embeds] invalid embeds: ${invalid.join(', ')} — removing their blocks`)
  // remove balanced <div class="article-video"> ... </div> blocks containing an invalid id
  const endOfDiv = (s, start) => {
    const re = /<div\b|<\/div>/g; re.lastIndex = start; let depth = 0, m
    while ((m = re.exec(s))) { if (m[0] === '</div>') { if (--depth === 0) return re.lastIndex } else depth++ }
    return -1
  }
  for (const p of files) {
    let t = readFileSync(p, 'utf8'), changed = false, search = 0
    while (true) {
      const idx = t.indexOf('<div class="article-video"', search)
      if (idx === -1) break
      const end = endOfDiv(t, idx); if (end === -1) break
      const block = t.slice(idx, end)
      if (invalid.some(id => block.includes('/embed/' + id))) {
        t = t.slice(0, idx) + t.slice(end).replace(/^\s*\n/, '\n'); changed = true; removedBlocks++; search = idx
      } else search = end
    }
    if (changed) { writeFileSync(p, t); touched.add(p) }
  }
  console.log(`[validate-embeds] removed ${removedBlocks} invalid embed block(s) across ${touched.size} file(s)`)
} else {
  console.log('[validate-embeds] ✅ all embeds valid')
}

// ---- links (log-only) ----
const links = [...linkSet]
const lres = await mapLimit(links, 20, async u => [u, await linkState(u)])
const brokenLinks = lres.filter(([, s]) => s !== null && (s < 200 || s >= 400) && s !== 403 && s !== 429)
if (brokenLinks.length) {
  console.log(`[validate-embeds] ⚠️ ${brokenLinks.length} resource link(s) returned a hard error (review manually):`)
  for (const [u, s] of brokenLinks.slice(0, 30)) console.log(`   [${s}] ${u}`)
} else {
  console.log('[validate-embeds] ✅ resource links OK (403/429 ignored as bot-block noise)')
}
process.exit(0)
