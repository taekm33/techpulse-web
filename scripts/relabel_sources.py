#!/usr/bin/env python3
"""Relabel TechPulse source boxes by source role.
Only touches <div class="article-callout info"> boxes whose <strong> header claims
'공식 출처' / 'Official Sources|References'. Each link gets a role tag
([보도]/[Press] for news media, [공식·1차]/[Primary] otherwise) and the header is
rewritten to a neutral label that no longer claims every link is official.
Idempotent: skips boxes already tagged."""
import re, sys, glob
PRESS = set("""techcrunch.com cnbc.com thenextweb.com fortune.com the-decoder.com thehackernews.com axios.com
pymnts.com siliconangle.com engadget.com forbes.com aljazeera.com 9to5google.com bleepingcomputer.com unite.ai
bloomberg.com macrumors.com cnn.com theregister.com tomshardware.com finance.yahoo.com scmp.com neowin.net qz.com
cryptobriefing.com techtimes.com npr.org marktechpost.com techstartups.com venturebeat.com securityweek.com
technode.com ppc.land helpnetsecurity.com cybersecuritynews.com techrepublic.com computerworld.com thenewstack.io
tech.yahoo.com datacenterdynamics.com theverge.com techwireasia.com electrek.co hackread.com discoveryloop.com
abcnews.com coindesk.com news.cgtn.com en.people.cn globaltimes.cn yicaiglobal.com benzinga.com newcomer.co
wccftech.com csoonline.com variety.com itpro.com entrepreneur.com globalbankingandfinance.com theaiinsider.tech
statnews.com tech.eu nbcnews.com finance.biggo.com news.bgov.com jpost.com businesstoday.in washingtontimes.com
euronews.com detroitnews.com infoworld.com stripes.com theaviationist.com cbsnews.com ghacks.net techradar.com
newsbytesapp.com glitchwire.com startupfortune.com dawn.com forklog.com cbc.ca econotimes.com 9to5mac.com
manilatimes.net hpcwire.com techzine.eu tomsguide.com notebookcheck.net mobilesyrup.com whec.com thewrap.com
theintercept.com pressnewsagency.org lawfaremedia.org infoq.com constellationr.com pharmexec.com securityaffairs.com
forkast.news theglobeandmail.com searchenginejournal.com seekingalpha.com techi.com calcalistech.com reuters.com
wsj.com nytimes.com ft.com theinformation.com wired.com arstechnica.com zdnet.com businessinsider.com
washingtonpost.com bbc.com bbc.co.uk theguardian.com zdnet.co.kr etnews.com yna.co.kr hankyung.com mk.co.kr
chosun.com joongang.co.kr donga.com zdnet.co.kr bloter.net aitimes.com aitimes.kr digitaltoday.co.kr
news.hada.io mashable.com gizmodo.com semafor.com politico.com fastcompany.com time.com cnet.com pcmag.com
digitaltrends.com androidauthority.com windowscentral.com xda-developers.com arabnews.com koreaherald.com
koreatimes.co.kr koreajoongangdaily.joins.com nikkei.com asia.nikkei.com
en.wikipedia.org simonwillison.net crunchbase.com cbinsights.com roadmap.sh pacingthefrontier.com cooley.com macquarie.com
mckinsey.com csis.org weforum.org ycombinator.com""".split())
def dom(u):
    m = re.match(r'https?://([^/"]+)', u); d = m.group(1).lower() if m else ''
    return d[4:] if d.startswith('www.') else d
def is_press(d):
    return any(d == p or d.endswith('.' + p) for p in PRESS)
HDR = re.compile(r'(<strong>|^##+\s*)([^<\n]*(?:공식\s*출처|Official\s+(?:Sources|References))[^<\n]*?)(</strong>|$)', re.I | re.M)
A = re.compile(r'<a\s[^>]*href="(https?://[^"]+)"[^>]*>.*?</a>', re.S)
MD = re.compile(r'(?<!!)\[[^\]\n]+\]\((https?://[^)\s]+)\)')
TAGGED = re.compile(r'\[(보도·해설|보도|공식·1차|Press/Analysis|Press|Primary)\]')
def label_for(roles, lang):
    if all(roles): return '관련 보도·해설' if lang == 'kr' else 'Press & Analysis'
    if not any(roles): return '공식·1차 출처' if lang == 'kr' else 'Primary Sources'
    return '출처 (공식·1차 자료 / 보도·해설 구분)' if lang == 'kr' else 'Sources (primary vs. press/analysis)'
def suffix_of(old):
    m = re.search(r'(?:공식\s*출처|Official\s+(?:Sources|References))\s*(?:·|&amp;|&middot;|&|-)\s*(.+)$', old)
    if m and not re.search(r'전 링크|verified', m.group(1), re.I): return ' · ' + m.group(1).strip()
    return ''
def process(path):
    lang = 'kr' if '/kr/' in path.replace('\\', '/') else 'en'
    t = open(path, encoding='utf-8').read(); n = 0; pos = 0; out = []
    while True:
        h = HDR.search(t, pos)
        if not h: out.append(t[pos:]); break
        seg_start = h.end()
        ends = [i for i in (t.find('</div>', seg_start), t.find('\n## ', seg_start)) if i != -1]
        seg_end = min(ends) if ends else len(t)
        seg = t[seg_start:seg_end]
        urls = [m.group(1) for m in A.finditer(seg)] + [m.group(1) for m in MD.finditer(seg)]
        if not urls or TAGGED.search(seg):
            out.append(t[pos:seg_end]); pos = seg_end; continue
        roles = [is_press(dom(u)) for u in urls]
        def tg(m):
            pr = is_press(dom(m.group(1)))
            t_ = ('[보도·해설]' if pr else '[공식·1차]') if lang == 'kr' else ('[Press/Analysis]' if pr else '[Primary]')
            return f'<span class="src-role">{t_}</span> ' + m.group(0)
        seg2 = MD.sub(tg, A.sub(tg, seg))
        hdr = h.group(1) + label_for(roles, lang) + suffix_of(h.group(2)) + h.group(3)
        out.append(t[pos:h.start()] + hdr + seg2); pos = seg_end; n += 1
    t2 = ''.join(out)
    if t2 != t: open(path, 'w', encoding='utf-8', newline='').write(t2)
    return n
if __name__ == '__main__':
    files = sys.argv[1:] or glob.glob('content/*/*.md')
    tot = 0; fc = 0
    for f in files:
        k = process(f); tot += k; fc += bool(k)
    print(f'boxes relabeled={tot} files={fc}')
