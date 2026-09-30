---
title: "AI 에이전트 스킬 속 '예시 도메인'이 함정으로…third-party.com, ClickFix 악성코드 유포"
summary: "문서 예시용으로 수년간 쓰여 온 미등록 '자리표시자(placeholder) 도메인'들이 공격자 손에 넘어갔다. 보안업체 Manifold Security는 AI 에이전트 스킬 349개를 포함해 GitHub 전반이 인용해 온 third-party.com이 ClickFix 악성코드를, yoursite.com·your-domain.com이 macOS 사용자 대상 사기·스케어웨어를 유포한다고 밝혔다."
category: "hot-issue"
date: "2026-09-28"
readingTime: 6
tags: ["AI에이전트", "보안", "ClickFix", "공급망보안", "스킬"]
---

<div class="article-tldr">
문서에서 예시로만 쓰던 미등록 '자리표시자 도메인'이 실제로 등록돼 악성 콘텐츠를 뿌리고 있다. 보안 스타트업 Manifold Security는 AI 에이전트 스킬 약 349개를 포함해 GitHub 전반이 인용해 온 third-party.com이 ClickFix 악성코드를, yoursite.com·your-domain.com이 macOS 대상 사기·스케어웨어를 유포한다고 공개했다. AI 에이전트가 스킬 문서에 박힌 URL을 그대로 신뢰해 호출한다는 점에서, '오늘 믿는 도메인이 내일 주인이 바뀌는' 공급망 위험이 그대로 드러났다.
</div>

보안 스타트업 Manifold Security가 9월 23~24일(현지시간) 공개한 조사에 따르면, 수년간 개발 문서에서 '예시'로만 쓰여 온 미등록 자리표시자 도메인들이 공격자에게 등록돼 실제 악성 페이지로 연결되고 있다. 문제의 도메인 참조는 GitHub의 수십만 개 파일과 AI 에이전트 스킬 약 349개에 그대로 박혀 있어, 이를 읽고 URL을 호출하는 자동화 에이전트까지 위험에 노출된다.

## 무슨 일이 일어났나 — 예시 도메인이 무기가 되다

핵심은 '예약 여부'다. example.com·example.org·example.net처럼 IANA가 문서용으로 영구 예약(RFC 2606)해 둔 도메인은 누구도 등록할 수 없다. 반면 third-party.com, yoursite.com, your-domain.com 같은 도메인은 오랫동안 '예시'처럼 쓰였을 뿐 예약된 적이 없어, 원하면 누구나 등록할 수 있다. 공격자들이 바로 이 빈틈을 파고들었다. Manifold의 조사(리서치 총괄 액스 샤르마·연구원 코디 내시)는 이 도메인들이 GitHub 코드·문서는 물론 AI 에이전트 스킬에까지 하드코딩돼 있음을 확인했다.

<div class="article-stats">
<strong>인용 AI 에이전트 스킬</strong> 약 349개<br/>
<strong>yoursite.com 참조 GitHub 파일</strong> 18만 5,000개+<br/>
<strong>your-domain.com 참조</strong> 17만 4,000개+<br/>
<strong>third-party.com 참조 저장소</strong> 1,700개+
</div>

## 도메인별로 무엇을 유포하나

같은 '예시 도메인'이라도 넘어간 주인에 따라 유포 콘텐츠가 다르다. Manifold가 확인한 세 도메인의 실태는 다음과 같다.

| 도메인 | 유포되는 악성 콘텐츠 | 주 표적 |
|---|---|---|
| third-party.com | ClickFix 악성코드(가짜 Cloudflare 인증 → 클립보드 오염 → PowerShell 실행) | Windows |
| yoursite.com | 가짜 뉴스 기사로 위장한 투자 사기 | macOS |
| your-domain.com | 스케어웨어(가짜 macOS 보안 경고)·투자 사기 | macOS |

특히 yoursite.com·your-domain.com은 가짜 'macOS 보안 센터'로 위장해 사칭 McAfee 갱신을 유도하거나, BBC News·ZDFheute를 사칭한 가짜 기사로 투자 사기 페이지로 유인하는 사례가 포착됐다.

## ClickFix는 어떻게 감염시키나

third-party.com이 뿌리는 ClickFix는 사회공학 기법이다. Cloudflare나 reCAPTCHA 인증 화면처럼 위장한 페이지가 뜨고, 그 뒤에서 자바스크립트가 악성 명령을 사용자의 클립보드에 몰래 복사한다. 이어 페이지는 "인증을 완료하려면 Windows 키+R을 누르고 Ctrl+V로 붙여넣은 뒤 실행하라"고 안내한다. 사용자가 그대로 따르면, 원격 서버(elxxvvx[.]xyz)에서 코드를 내려받아 실행하는 PowerShell 명령이 돌아간다.

Manifold는 이 방식의 위험을 "피해자가 스스로 자신의 권한으로 공격자의 명령을 실행하며, 다운로드되는 파일이 없어 백신이 잡을 것도 없다"고 요약했다. 보안업체 ESET에 따르면 ClickFix 캠페인은 2024년 말부터 2025년 중반 사이 517% 급증했다.

<div class="article-callout tip">
낯선 사이트가 '인증을 위해 Windows 키+R을 누르고 붙여넣어 실행하라'고 안내하면 사실상 100% 사기다. 정상적인 캡차·인증 절차는 결코 사용자에게 명령어를 실행하라고 요구하지 않는다.
</div>

## 왜 스캐너가 놓쳤나 — '클로킹'의 함정

이 캠페인이 오래 살아남은 이유는 방문자를 가려 받는 '클로킹' 때문이다. Windows 사용자에게는 ClickFix 전체 미끼를, macOS 사용자에게는 스케어웨어를 보여주지만, Linux·데이터센터 IP로 접속하면 평범한 주차(parking) 페이지만 내보낸다. 게다가 악성 리다이렉트는 페이지의 자바스크립트가 실행된 뒤에야 작동하기 때문에, 텍스트만 가져오는 정적 점검이나 평판 스캐너는 미끼를 보지 못한다. Manifold는 "리다이렉트가 JS 실행 후에 발생하므로, 어떤 User-Agent를 보내든 단순 텍스트 요청으로는 절대 잡히지 않는다"고 설명했다.

## AI 에이전트에 특히 위험한 이유

문제의 심각성은 자동화에서 온다. AI 에이전트는 스킬·도구 문서에 적힌 URL을 그대로 신뢰해 호출하는 경향이 있어, 문서 작성자가 결코 악성으로 의도하지 않았던 도메인의 위험을 그대로 물려받는다. Manifold는 이를 "curl | bash 문제가 옷만 바꿔 입은 것"이라며, "오늘 신뢰하는 도메인이 내일 주인이 바뀌면, 믿었던 엔드포인트가 갑자기 다른 것을 반환한다"고 지적했다. 실제로 문제의 자리표시자를 인용한 공개 스킬로는 shopify-expert(스타 약 1만 1,000개의 jeffallan/claude-skills 소속), alova-server-usage, dynamic-dashboard-builder 등이 확인됐고, 크로미엄 개발자 문서와 Sanity의 Playwright 테스트 스킬, Vercel Turborepo 유닛 테스트에서도 흔적이 나왔다.

<div class="article-callout info">
정적 파일 스캔은 '웹사이트가 무엇을 돌려줄지'를 보지 못한다. 위험의 실체는 실제 요청이 일어나는 순간, 그 요청을 보내는 호출자(에이전트)에게서만 드러난다. 그래서 AI 에이전트 시대의 공급망 점검은 '코드에 무엇이 적혔나'를 넘어 '그 URL이 지금 무엇을 반환하나'까지 봐야 한다.
</div>

## 대응 방법

Manifold의 권고는 명확하다. 문서와 스킬에는 RFC 2606로 예약된 도메인(example.com·example.org·example.net, 또는 .example)만 예시로 쓰고, 통제하지 않는 실제 라이브 도메인은 문서에 인용하거나 허용목록에 넣지 말아야 한다. 이미 공개한 스킬·테스트·문서는 third-party.com, yoursite.com, your-domain.com, yourcompany.com 같은 미등록 자리표시자가 남아 있는지 점검(스윕)하고 교체하는 것이 좋다.

## 의미와 전망

이번 사건은 AI 에이전트 생태계가 '신뢰의 공급망'을 어떻게 관리할지에 대한 경고다. 에이전트가 문서 속 URL을 자율적으로 호출하는 구조가 확산될수록, 스킬에 박힌 정적 URL 하나하나가 '언제든 깨질 수 있는 약속'이 된다. 예시 도메인이라는 사소해 보이던 관행이 대규모 공격면으로 바뀐 만큼, 스킬 배포자와 프레임워크 제공자 모두 예약 도메인 사용을 기본값으로 삼는 위생 수칙이 필요해졌다.

<div class="article-callout info">
<strong>출처 (공식·1차 자료 / 보도·해설 구분)</strong><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://www.manifold.security/blog/placeholder-domains-ads-serve-scams" target="_blank" rel="noopener">Manifold Security — 자리표시자 도메인들이 유포하는 사기 (원 조사)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://www.manifold.security/blog/third-party-com-placeholder-clickfix" target="_blank" rel="noopener">Manifold Security — third-party.com이 유포하는 ClickFix 분석</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://thehackernews.com/2026/09/placeholder-third-partycom-referenced.html" target="_blank" rel="noopener">The Hacker News — 1,700+ 저장소가 참조한 third-party.com의 악성화</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://hackread.com/placeholder-domains-ai-agent-skills-redirect-scams/" target="_blank" rel="noopener">HackRead — AI 에이전트 스킬 349개가 인용한 자리표시자 도메인의 사기 연결</a>
</div>

<div class="article-keypoints">
<ul>
<li>문서 '예시'로 쓰이던 미등록 자리표시자 도메인(third-party.com·yoursite.com·your-domain.com)이 등록돼 악성 콘텐츠를 유포</li>
<li>AI 에이전트 스킬 약 349개와 GitHub 수십만 개 파일이 이들 도메인을 인용</li>
<li>third-party.com은 Windows 대상 ClickFix, 나머지는 macOS 대상 사기·스케어웨어를 클로킹으로 배포</li>
<li>에이전트가 스킬 URL을 그대로 호출하는 구조라 공급망 위험이 자동 전파</li>
<li>대응: RFC 2606 예약 도메인만 예시로 사용하고, 기존 스킬·문서를 점검·교체</li>
</ul>
</div>
