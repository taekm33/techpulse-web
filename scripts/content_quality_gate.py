#!/usr/bin/env python3
"""Changed-article hard gate for bilingual news publishers."""
from __future__ import annotations
import argparse, datetime as dt, re, subprocess, sys
from difflib import SequenceMatcher
from pathlib import Path

URL_RE = re.compile(r"https?://[^\s)\]>'\"]+")
WORD_RE = re.compile(r"[A-Za-z0-9가-힣]+(?:[-'][A-Za-z0-9가-힣]+)*")
BANNED = re.compile(r"adsense\s*(?:readiness|approval)|seo\s*filler|publishing\s*(?:run|workflow)|generated[- ]image\s*qa|content\s*batch|final\s*gate", re.I)
ARTICLE_PATTERNS = (
    re.compile(r"^website/gamepeak/content/(kr|en)/articles/.+\.mdx$"),
    re.compile(r"^content/(kr|en)/.+\.md$"),
)

def run(*args: str) -> str:
    return subprocess.check_output(args, text=True, stderr=subprocess.DEVNULL).strip()

def resolve_base(base: str | None) -> str | None:
    if base and set(base) != {'0'}:
        return base
    try:
        return run('git', 'rev-parse', 'HEAD~1')
    except Exception:
        return None

def changed(base: str | None) -> list[Path]:
    cmd=['git','diff','--name-only','--diff-filter=AM']
    if base: cmd += [base,'HEAD']
    output=run(*cmd)
    names=output.splitlines() if output else []
    return [Path(n) for n in names if any(p.match(n) for p in ARTICLE_PATTERNS)]

def newly_added(base: str | None) -> set[Path]:
    if not base:
        return set()
    output=run('git','diff','--name-only','--diff-filter=A',base,'HEAD')
    return {Path(n) for n in output.splitlines() if any(p.match(n) for p in ARTICLE_PATTERNS)}

def lang_of(p: Path) -> str:
    s=p.as_posix()
    return 'kr' if '/kr/' in '/'+s else 'en'

def split_frontmatter(text: str) -> tuple[str,str]:
    m=re.match(r"^---\s*\n(.*?)\n---\s*\n?",text,re.S)
    return (m.group(1),text[m.end():]) if m else ('',text)

def visible(body: str) -> str:
    body=re.sub(r"```.*?```"," ",body,flags=re.S)
    body=re.sub(r":::youtube.*?:::"," ",body,flags=re.S)
    body=re.sub(r"<[^>]+>"," ",body)
    body=re.sub(r"!\[[^]]*\]\([^)]+\)"," ",body)
    body=re.sub(r"\[([^]]+)\]\([^)]+\)",r"\1",body)
    body=re.sub(r"https?://\S+"," ",body)
    return re.sub(r"[`*_#>|{}]"," ",body)

def normalize(text: str) -> str:
    text=visible(text).lower()
    return ' '.join(WORD_RE.findall(text))

def main() -> int:
    ap=argparse.ArgumentParser(); ap.add_argument('--base'); ap.add_argument('--files',nargs='*'); a=ap.parse_args()
    base=resolve_base(a.base)
    files=[Path(x) for x in a.files] if a.files else changed(base)
    new_files=newly_added(base) if not a.files else set()
    errors=[]; rows=[]; changed_count={'kr':0,'en':0}; new_count={'kr':0,'en':0}; bodies={}
    for p in files:
        if not p.is_file(): continue
        lang=lang_of(p); changed_count[lang]+=1
        if p in new_files: new_count[lang]+=1
        raw=p.read_text(encoding='utf-8'); fm,body=split_frontmatter(raw)
        words=len(WORD_RE.findall(visible(body)))
        urls=sorted(set(URL_RE.findall(body)))
        date_m=re.search(r'^date:\s*["\']?(\d{4}-\d{2}-\d{2})',fm,re.M)
        if words < 350: errors.append(f'{p}: reader-visible depth {words} < 350 words/tokens')
        if len(urls) < 2: errors.append(f'{p}: source URLs {len(urls)} < 2 (require primary + corroborating/context source)')
        hit=BANNED.search(raw)
        if hit: errors.append(f'{p}: production-process phrase {hit.group(0)!r}')
        if date_m:
            try:
                d=dt.date.fromisoformat(date_m.group(1))
                if d > dt.date.today()+dt.timedelta(days=1): errors.append(f'{p}: publication date {d} is in the future')
            except ValueError: errors.append(f'{p}: invalid publication date')
        if not re.search(r'^title:\s*.+',fm,re.M): errors.append(f'{p}: missing title')
        if not re.search(r'^(summary|description):\s*.+',fm,re.M): errors.append(f'{p}: missing summary/description')
        key=p.stem; bodies[(lang,key)]=normalize(body); rows.append((str(p),lang,words,len(urls)))
    for lang,n in new_count.items():
        if n>2: errors.append(f'{lang}: {n} newly published articles in one deploy; maximum is 2')
    for key in {k for lang,k in bodies}:
        if ('kr',key) in bodies and ('en',key) in bodies:
            ratio=SequenceMatcher(None,bodies[('kr',key)],bodies[('en',key)]).ratio()
            if ratio>0.82: errors.append(f'{key}: KR/EN normalized similarity {ratio:.2f} > 0.82; create audience-specific editions')
    print(f'QUALITY GATE files={len(rows)} changed_kr={changed_count["kr"]} changed_en={changed_count["en"]} new_kr={new_count["kr"]} new_en={new_count["en"]}')
    for p,l,w,u in rows: print(f'CHECK {p}: lang={l} depth={w} source_urls={u}')
    if errors:
        print(f'BLOCKED: {len(errors)} violation(s)')
        for e in errors: print(' - '+e)
        return 1
    print('PASS: all content changed since the last production tag satisfies depth, sources, process-language, date, new-publication batch-size, and bilingual-independence gates')
    return 0
if __name__=='__main__': sys.exit(main())
