#!/usr/bin/env python3
"""Production-baseline content hard gate for bilingual news publishers."""
from __future__ import annotations
import argparse, datetime as dt, re, subprocess, sys
from difflib import SequenceMatcher
from pathlib import Path
URL_RE=re.compile(r"https?://[^\s)\]>'\"]+")
WORD_RE=re.compile(r"[A-Za-z0-9가-힣]+(?:[-'][A-Za-z0-9가-힣]+)*")
BANNED=re.compile(r"adsense\s*(?:readiness|approval)|seo\s*filler|publishing\s*(?:run|workflow)|generated[- ]image\s*qa|content\s*batch|final\s*gate|애드센스\s*(?:준비|승인)|발행\s*(?:작업|워크플로)|콘텐츠\s*배치|최종\s*게이트",re.I)
HANDS_ON=re.compile(r"\b(?:hands?[- ]on|we (?:tested|reviewed|verified)|exclusive)\b|직접\s*(?:테스트|검증|사용|플레이)|단독\s*(?:보도|입수)",re.I)
ARTICLE_PATTERNS=(re.compile(r"^website/gamepeak/content/(kr|en)/articles/.+\.mdx$"),re.compile(r"^content/(kr|en)/.+\.md$"))
def run(*args:str)->str:return subprocess.check_output(args,text=True,stderr=subprocess.DEVNULL).strip()
def resolve_base(base):
 if base and set(base)!={'0'}:return base
 try:return run('git','rev-parse','HEAD~1')
 except Exception:return None
def changed(base):
 cmd=['git','diff','--name-only','--diff-filter=AM']+([base,'HEAD'] if base else [])
 out=run(*cmd);return [Path(n) for n in out.splitlines() if any(p.match(n) for p in ARTICLE_PATTERNS)]
def lang_of(p):return 'kr' if '/kr/' in '/'+p.as_posix() else 'en'
def split_frontmatter(text):
 m=re.match(r"^---\s*\n(.*?)\n---\s*\n?",text,re.S);return (m.group(1),text[m.end():]) if m else ('',text)
def is_draft(fm):return bool(re.search(r'^draft:\s*true\s*$',fm,re.I|re.M))
def baseline_public(base,p):
 if not base:return False
 try:raw=run('git','show',f'{base}:{p.as_posix()}')
 except Exception:return False
 fm,_=split_frontmatter(raw);return not is_draft(fm)
def visible(body):
 body=re.sub(r"```.*?```"," ",body,flags=re.S);body=re.sub(r":::youtube.*?:::"," ",body,flags=re.S);body=re.sub(r"<[^>]+>"," ",body);body=re.sub(r"!\[[^]]*\]\([^)]+\)"," ",body);body=re.sub(r"\[([^]]+)\]\([^)]+\)",r"\1",body);body=re.sub(r"https?://\S+"," ",body);return re.sub(r"[`*_#>|{}]"," ",body)
def normalize(text):return ' '.join(WORD_RE.findall(visible(text).lower()))
def main():
 ap=argparse.ArgumentParser();ap.add_argument('--base');ap.add_argument('--files',nargs='*');a=ap.parse_args();base=resolve_base(a.base);files=[Path(x) for x in a.files] if a.files else changed(base)
 errors=[];rows=[];public_changed={'kr':0,'en':0};newly_public={'kr':0,'en':0};drafted={'kr':0,'en':0};bodies={}
 for p in files:
  if not p.is_file():continue
  raw=p.read_text(encoding='utf-8-sig');fm,body=split_frontmatter(raw);lang=lang_of(p)
  if is_draft(fm):drafted[lang]+=1;continue
  public_changed[lang]+=1
  if not a.files and not baseline_public(base,p):newly_public[lang]+=1
  words=len(WORD_RE.findall(visible(body)));urls=sorted(set(URL_RE.findall(body)));date_m=re.search(r'^date:\s*["\']?(\d{4}-\d{2}-\d{2})',fm,re.M)
  if words<350:errors.append(f'{p}: reader-visible depth {words} < 350 words/tokens')
  if len(urls)<2:errors.append(f'{p}: source URLs {len(urls)} < 2 (require primary + corroborating/context source)')
  hit=BANNED.search(raw)
  if hit:errors.append(f'{p}: production-process phrase {hit.group(0)!r}')
  claim=HANDS_ON.search(body)
  if claim:
   evidence=re.search(r'^hands_on_evidence:\s*["\']?([^"\'\n]+)',fm,re.M);ep=Path(evidence.group(1).strip()) if evidence else None
   if not ep or ep.is_absolute() or not ep.is_file():errors.append(f'{p}: unsupported first-party claim {claim.group(0)!r}; add a repository-relative hands_on_evidence artifact or remove the claim')
  if date_m:
   try:
    date=dt.date.fromisoformat(date_m.group(1))
    if date>dt.date.today()+dt.timedelta(days=1):errors.append(f'{p}: publication date {date} is in the future')
   except ValueError:errors.append(f'{p}: invalid publication date')
  else:errors.append(f'{p}: missing publication date')
  if not re.search(r'^title:\s*.+',fm,re.M):errors.append(f'{p}: missing title')
  if not re.search(r'^(summary|description):\s*.+',fm,re.M):errors.append(f'{p}: missing summary/description')
  bodies[(lang,p.stem)]=normalize(body);rows.append((str(p),lang,words,len(urls)))
 for lang,count in newly_public.items():
  if count>2:errors.append(f'{lang}: {count} newly public articles since production; maximum is 2')
 for key in {k for _,k in bodies}:
  if ('kr',key) in bodies and ('en',key) in bodies:
   ratio=SequenceMatcher(None,bodies[('kr',key)],bodies[('en',key)]).ratio()
   if ratio>0.82:errors.append(f'{key}: KR/EN normalized similarity {ratio:.2f} > 0.82; create audience-specific editions')
 print(f'QUALITY GATE baseline={base or "none"} public_files={len(rows)} changed_kr={public_changed["kr"]} changed_en={public_changed["en"]} new_kr={newly_public["kr"]} new_en={newly_public["en"]} drafted_kr={drafted["kr"]} drafted_en={drafted["en"]}')
 for p,l,w,u in rows:print(f'CHECK {p}: lang={l} depth={w} source_urls={u}')
 if errors:
  print(f'BLOCKED: {len(errors)} violation(s)')
  for e in errors:print(' - '+e)
  return 1
 print('PASS: all public content changed since production satisfies depth, sources, claim, process-language, date, publication-volume, and bilingual-independence gates');return 0
if __name__=='__main__':sys.exit(main())
