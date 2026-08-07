#!/usr/bin/env python3
"""Validate exact static export route, sitemap, canonical, and indexability invariants."""
from __future__ import annotations
import argparse, re, sys
from pathlib import Path
from urllib.parse import urlparse

DOMAINS={'kr':'https://techpulse.co.kr','en':'https://technologypulse.app'}
STATIC=['/','/about/','/contact/','/privacy-policy/','/terms/','/category/ai-news/','/category/it-news/','/category/tool-review/','/category/dev-trend/','/category/startup/','/category/hot-issue/']

def frontmatter(raw:str)->str:
 m=re.match(r'^---\s*\n(.*?)\n---',raw,re.S);return m.group(1) if m else ''
def draft(raw:str)->bool:return bool(re.search(r'^draft:\s*true\s*$',frontmatter(raw),re.I|re.M))
def html_path(root:Path,route:str)->Path:return root/'index.html' if route=='/' else root/route.strip('/')/'index.html'
def main()->int:
 ap=argparse.ArgumentParser();ap.add_argument('--locale',choices=('kr','en'),required=True);ap.add_argument('--out',default='out');a=ap.parse_args()
 base=DOMAINS[a.locale];root=Path(a.out);content=Path('content')/a.locale;errors=[]
 public=[];drafted=[]
 for p in sorted(content.glob('*.md')):
  raw=p.read_text(encoding='utf-8-sig');(drafted if draft(raw) else public).append('/'+p.stem+'/')
 expected=set(STATIC+public)
 sitemap=(root/'sitemap.xml').read_text(encoding='utf-8') if (root/'sitemap.xml').is_file() else ''
 actual=set(re.findall(r'<loc>(.*?)</loc>',sitemap))
 expected_urls={base+r for r in expected}
 if actual!=expected_urls:
  errors.append(f'sitemap mismatch missing={sorted(expected_urls-actual)[:10]} extra={sorted(actual-expected_urls)[:10]}')
 for route in sorted(expected):
  p=html_path(root,route)
  if not p.is_file():errors.append(f'missing export {route}');continue
  text=p.read_text(encoding='utf-8')
  canon=re.findall(r'<link[^>]+rel=["\']canonical["\'][^>]+href=["\']([^"\']+)',text,re.I)
  want=base+route
  if canon!=[want]:errors.append(f'{route}: canonical={canon!r} expected={[want]!r}')
  if re.search(r'<meta[^>]+name=["\']robots["\'][^>]+content=["\'][^"\']*noindex',text,re.I):errors.append(f'{route}: unexpected noindex')
 for route in drafted:
  if base+route in actual:errors.append(f'{route}: drafted URL in sitemap')
  if html_path(root,route).is_file():errors.append(f'{route}: drafted URL exported')
 robots=(root/'robots.txt').read_text(encoding='utf-8') if (root/'robots.txt').is_file() else ''
 if f'Sitemap: {base}/sitemap.xml' not in robots:errors.append('robots sitemap mismatch')
 print(f'STATIC QA locale={a.locale} public_articles={len(public)} drafted_articles={len(drafted)} expected_urls={len(expected)} sitemap_urls={len(actual)}')
 if errors:
  print(f'BLOCKED: {len(errors)} violation(s)')
  for e in errors:print(' - '+e)
  return 1
 print('PASS: export routes, canonical URLs, sitemap membership, robots, drafts, and indexability are exact');return 0
if __name__=='__main__':sys.exit(main())
