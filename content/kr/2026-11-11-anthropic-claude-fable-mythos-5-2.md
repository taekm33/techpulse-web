---
title: "앤트로픽 '클로드 페이블 5.2'·'미토스 5.2' 출시 — API 20% 인하, 국내 Pro 이용자는 11월 17일 오후 5시 전까지 무료 체험"
summary: "앤트로픽이 11월 9일(미국 시간) 최상위 모델 Claude Fable 5.2와 Claude Mythos 5.2를 공개했다. 두 모델은 같은 기반 모델이며, 사이버·생물학 안전장치를 건 Fable 5.2는 유료 요금제와 API·AWS·구글 클라우드·애저에 바로 풀렸고 Mythos 5.2는 검증 프로그램 승인 기관에만 제공된다. API 가격은 100만 토큰당 입력 8달러·출력 40달러로 5.1보다 20% 낮다. 한국 이용자 기준 출시 프로모션 마감 시각, 30일 데이터 보관 조건, 미확인 사항을 공개 자료 분석으로 정리했다."
category: "ai-news"
date: "2026-11-11"
readingTime: 7
tags: ["앤트로픽", "Anthropic", "Claude Fable 5.2", "Claude Mythos 5.2", "클로드", "AI 모델", "API 가격"]
---

<div class="article-tldr">
앤트로픽이 <strong>2026년 11월 9일(미국 시간)</strong> <a href="https://www.anthropic.com/claude-fable-and-mythos-5-2" target="_blank" rel="noopener">Claude Fable 5.2와 Claude Mythos 5.2</a>를 공개했다. 9월에 나온 5.1 이후 약 두 달 만이다. 두 이름은 <strong>같은 기반 모델</strong>이고, 사이버보안·생물학 안전장치를 건 Fable 5.2는 모든 유료 요금제와 API에, 안전장치 일부를 뺀 Mythos 5.2는 검증 프로그램 승인 기관에만 제공된다. API 가격은 100만 토큰당 <strong>입력 8달러·출력 40달러</strong>로 5.1(10달러·50달러)보다 20% 내렸다.
</div>

이 글은 앤트로픽 공식 발표, 개발자 문서·가격표, 고객센터 안내, AWS 공지와 국내외 보도를 바탕으로 한 공개 자료 분석이다. 모델을 실행해 성능을 재현하지 않았으며, 아래 벤치마크와 사례는 모두 앤트로픽 발표 또는 보도 내용이다.

## 누구에게 중요한가

- **Claude Pro·Team 표준 좌석 이용자**: 평소 Fable은 사용량 크레딧(종량제)으로만 쓸 수 있지만, 출시 기념으로 한국 시간 <strong>11월 17일(화) 오후 4시 59분</strong>까지 주간 한도의 최대 50%를 추가 비용 없이 Fable 모델에 쓸 수 있다.
- **API로 서비스를 운영하는 국내 개발사**: 같은 Fable 계열을 쓰고 있다면 모델 ID만 바꿔도 단가가 20% 낮아진다. 다만 30일 데이터 보관 조건을 먼저 확인해야 한다.
- **기업 보안팀·바이오 연구 조직**: 취약점 탐지 성능을 앞세운 Mythos 5.2는 별도 검증 프로그램 승인이 필요하다. 일반 구독만으로는 쓸 수 없다.
- **Enterprise 관리자**: Enterprise 요금제에서는 관리자가 켜기 전까지 Fable 5.2가 꺼져 있고, 출시 7일 뒤 Fable 모델이 허용된 역할에 자동 추가된다. 원치 않으면 그 전에 설정을 바꿔야 한다.

## 확인된 사실 — 앤트로픽 공식 자료 기준

<div class="article-stats">
<strong>공개일</strong> 2026년 11월 9일(미국 시간), 국내 보도는 11월 10일<br/>
<strong>API 모델 ID</strong> claude-fable-5-2 / claude-mythos-5-2(승인 기관 한정)<br/>
<strong>가격(100만 토큰당)</strong> 입력 8달러 · 출력 40달러 · 캐시 적중 0.20달러 (5.1은 10달러·50달러·0.25달러)<br/>
<strong>빠른 모드</strong> 생성 속도 최대 2.5배, 입력 16달러 · 출력 80달러<br/>
<strong>컨텍스트</strong> 100만 토큰, 최대 출력 12만 8,000토큰, 지식 기준 2026년 6월<br/>
<strong>속도</strong> 5.1 대비 출력 생성 최대 30% 빠름(회사 발표)<br/>
<strong>제공처</strong> Claude 앱(유료 요금제), Claude API, Amazon Bedrock·Claude Platform on AWS, 구글 클라우드, Microsoft Foundry<br/>
<strong>데이터 조건</strong> 30일 보관 필수 '커버드 모델', 별도 승인 없이는 무보관(ZDR) 불가
</div>

가격과 사양은 <a href="https://platform.claude.com/docs/en/about-claude/pricing" target="_blank" rel="noopener">공식 가격표</a>와 <a href="https://platform.claude.com/docs/en/about-claude/models/overview" target="_blank" rel="noopener">모델 개요 문서</a>에서 확인했다. 가격표에는 Fable 5.1·Mythos 5.1이 여전히 입력 10달러·출력 50달러로 남아 있어, 5.2로 옮기는 것만으로 단가가 내려간다. 앤트로픽은 일반 코딩·지식 업무에는 <strong>Claude Opus 5.5(입력 4달러·출력 20달러)</strong>를 먼저 쓰고, 범위가 크고 열린 과제일 때 Fable로 올리라고 권한다. Fable이 무조건 기본값이 되어야 한다는 뜻은 아니다.

### 회사가 제시한 성능·사례

- **코딩**: 오픈소스 유지관리자가 실제로 병합할 만한 코드인지 보는 FrontierCode 2.0에서 Fable 5.2는 49.1%(최고 추론 설정)로, Fable 5.1(32.4%)과 Opus 5.5(45.5%)보다 높았다고 앤트로픽은 밝혔다. High 설정에서는 Opus 5.5 최고점과 비슷한 점수를 과제당 비용 절반 수준으로 냈다고 한다.
- **장기 에이전트 작업**: 엔지니어 한 명이 빈 폴더에서 시작해 Fable 5.2에 운영체제 시제품을 맡겼고, 모델이 1,000개 넘는 하위 에이전트를 8일간 조율해 노트북에서 부팅되는 시스템을 만들었다는 사례를 공개했다. 1,000개 에이전트로 페르마의 마지막 정리를 30시간 만에 Lean으로 형식화했다는 사례도 있다.
- **보안(Mythos 5.2)**: 공개 CVE 1,829건을 대상으로 한 내부 평가 'CVE Rediscovery'에서 89.6%를 재발견해 Mythos 5.1(78.3%)보다 높았다. 같은 평가에서 Opus 5.5보다 취약점을 10.2% 더 찾았다고 밝혔다.
- **안전장치 오차단 감소**: Fable 5.2의 사이버·생물학 안전장치는 5.1만큼 강하면서 불필요한 차단은 줄었다고 설명했다. 국내 보도(아주경제)는 정상 요청 차단이 약 55% 줄었다고 전했다.

## 미확인·전망 (사실과 구분)

- **독립 검증**: 위 벤치마크와 운영체제·물리학·수학 사례는 앤트로픽 발표다. 국내 보도(아이티데일리·디지털타임스)는 외부 평가기관 아티피셜 애널리시스 지수에서 Fable 5.2가 65점으로 1위였다고 전했지만, 이 글에서는 해당 기관 원문을 따로 확인하지 못했다.
- **한국어 성능**: 공식 문서는 모든 현행 모델의 다국어 지원을 명시하지만, <strong>Fable 5.2의 한국어 전용 평가 수치는 공개되지 않았다</strong>(미확인).
- **원화 가격**: API 가격은 달러로만 공개됐다. 전자신문은 입력 8달러를 약 1만 800원으로 환산했지만, 실제 원화 청구액은 환율·부가세·결제 수단에 따라 달라진다(<strong>공식 원화 가격 미확인</strong>).
- **국내 기관의 Mythos 접근**: 아주경제는 앤트로픽의 보안 협력 프로그램 '프로젝트 글래스윙'에 삼성전자·SK하이닉스·SK텔레콤·KISA가 참여한 것으로 알려졌다고 보도하면서도, 이들이 Mythos 5.2 접근 권한을 확보했는지는 확인되지 않았다고 적었다. 미국 외 기업으로 Mythos 이용 대상을 넓힐 계획이라는 내용도 보도 기준이며, 구체적 일정은 없다.
- **수출통제 재발 가능성**: 지난 6월 미국 상무부 지시로 Fable 5·Mythos 5가 19일간 전 세계에서 중단됐다가 6월 30일 <a href="https://www.anthropic.com/news/redeploying-fable-5" target="_blank" rel="noopener">해제·재배포</a>된 전례가 있다. 5.2에 대해 새 통제가 걸렸다는 공식 발표는 없지만, 핵심 업무를 단일 모델에만 묶어 두는 위험은 여전하다.

## 국내 이용자에게 미치는 영향

한국은 앤트로픽 <a href="https://www.anthropic.com/legal/supported-regions" target="_blank" rel="noopener">지원 국가 목록</a>에 올라 있어 Claude 앱·API 모두 정식으로 쓸 수 있다. 개인 이용자에게 가장 실질적인 변화는 <strong>출시 프로모션</strong>이다. <a href="https://support.claude.com/en/articles/17506494-claude-fable-5-2-launch-offers" target="_blank" rel="noopener">고객센터 안내</a>에 따르면 Pro와 Team 표준 좌석은 11월 16일 오후 11시 59분(태평양 시간)까지 Fable 5.2·5.1·5 모델을 주간 한도의 50%까지 요금제 안에서 쓸 수 있고, 리셋 1회도 받는다. 한국 시간으로는 <strong>11월 17일 오후 4시 59분</strong>이 마감이다. 리셋은 11월 9일 오전 10시(태평양 시간), 즉 <strong>한국 시간 11월 10일 오전 3시</strong> 이전에 유료 결제가 잡혀 있던 계정만 받는다.

Max·Ultra와 Team 프리미엄 좌석은 구독 기간에 따라 리셋 1~3회를 받고, 만료는 2027년 3월 8일 오후 11시 59분(태평양 시간), 한국 시간 <strong>3월 9일 오후 4시 59분</strong>이다. 무료 요금제와 일부 Enterprise 요금제는 대상이 아니다. 기본 모델은 바뀌지 않으므로 모델 선택 메뉴에서 Fable 5.2를 직접 골라야 하고, Claude Code는 2.1.321 이상이어야 목록에 보인다.

기업 쪽에서는 데이터 조건이 더 중요하다. <a href="https://platform.claude.com/docs/en/models/fable-5-2/whats-new-fable-5-2" target="_blank" rel="noopener">개발자 문서</a>는 Fable 5.2와 Mythos 5.2를 30일 데이터 보관이 필요한 '커버드 모델'로 지정했고, 앤트로픽이 따로 승인하지 않으면 무보관(ZDR) 계약으로 쓸 수 없다고 명시한다. 개인정보나 고객 소스코드를 다루는 국내 기업이라면 개인정보 처리방침과 사내 보안 규정에 맞는지 먼저 따져야 한다. <a href="https://aws.amazon.com/blogs/machine-learning/introducing-claude-fable-5-2-on-aws/" target="_blank" rel="noopener">AWS 공지</a>는 Bedrock에서 쓰려면 호출 전에 계정·프로젝트에 데이터 보관 모드를 설정해야 하며, 자격을 갖춘 고객은 당분간 ZDR로 쓸 수 있다고 안내했다.

<div class="article-callout tip">
<strong>지금 할 수 있는 일</strong><br/>
1. <strong>Pro 이용자</strong>: 한국 시간 11월 17일 오후 4시 59분 전까지 실제 업무 과제 몇 개를 Fable 5.2와 Opus 5.5에 같이 맡겨 보고, 결과 차이가 크레딧 비용을 낼 만한지 판단한다. Fable은 한도를 다른 모델보다 빨리 소모하므로 설정 &gt; 사용량에서 잔여량을 확인한다.<br/>
2. <strong>리셋 보유자</strong>: 리셋은 쓴 사용량을 돌려줄 뿐 한도를 늘리지 않는다. 한도에 가까워졌을 때 설정 &gt; 사용량 &gt; '무료로 재설정'을 누르는 것이 유리하다.<br/>
3. <strong>API 운영사</strong>: Fable 5.1을 쓰고 있다면 claude-fable-5-2로 교체해 품질·비용을 비교 측정한다. 대부분 작업은 Opus 5.5(단가 절반)로 충분한지도 함께 본다.<br/>
4. <strong>Enterprise 관리자</strong>: 출시 7일 뒤 자동 활성화 전에, Fable 5.2를 허용할 역할과 30일 보관 조건이 사내 규정에 맞는지 정리한다.<br/>
5. <strong>보안·바이오 조직</strong>: Mythos 5.2가 필요하면 앤트로픽 사이버 검증 프로그램 또는 생명과학 검증 프로그램에 신청한다. Claude Enterprise 고객은 검증 프로그램 없이도 Mythos 5.2가 포함된 Claude Security 코드 스캔을 쓸 수 있다고 회사는 밝혔다.
</div>

## 한계

이 글은 11월 11일 확인한 앤트로픽 공식 발표·개발자 문서·가격표·고객센터 안내·지원 국가 정책, AWS 공지, 그리고 로이터(The Star 게재)·야후 파이낸스·아주경제·전자신문·디지털타임스·아이티데일리 보도에 근거했다. 모델을 실행해 어떤 수치도 재현하지 않았다. 가격·프로모션·제공 범위는 바뀔 수 있으며, 시스템 카드의 세부 안전성 평가는 이 글에서 다루지 않았다.

<p><em>최종 확인일 2026-11-11.</em></p>

<div class="article-callout info">
<strong>출처 (공식·1차 자료 / 보도·해설 구분)</strong><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://www.anthropic.com/claude-fable-and-mythos-5-2" target="_blank" rel="noopener">Anthropic — Introducing Claude Fable 5.2 and Claude Mythos 5.2 (2026-11-09)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://platform.claude.com/docs/en/models/fable-5-2/whats-new-fable-5-2" target="_blank" rel="noopener">Claude 개발자 문서 — What's new in Claude Fable 5.2 (제공처·데이터 보관 조건)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://platform.claude.com/docs/en/about-claude/pricing" target="_blank" rel="noopener">Claude 개발자 문서 — Pricing (5.2·5.1 가격 비교)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://platform.claude.com/docs/en/about-claude/models/overview" target="_blank" rel="noopener">Claude 개발자 문서 — Models overview (컨텍스트·출력 한도)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://support.claude.com/en/articles/17506494-claude-fable-5-2-launch-offers" target="_blank" rel="noopener">Claude 고객센터 — Claude Fable 5.2 launch offers</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://support.claude.com/en/articles/15424964-claude-fable-models-on-your-plan" target="_blank" rel="noopener">Claude 고객센터 — Claude Fable models on your plan</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://www.anthropic.com/legal/supported-regions" target="_blank" rel="noopener">Anthropic — Supported Regions Policy</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://www.anthropic.com/news/redeploying-fable-5" target="_blank" rel="noopener">Anthropic — Redeploying Claude Fable 5 (2026-06-30)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://aws.amazon.com/blogs/machine-learning/introducing-claude-fable-5-2-on-aws/" target="_blank" rel="noopener">AWS 머신러닝 블로그 — Introducing Claude Fable 5.2 on AWS</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.thestar.com.my/tech/tech-news/2026/11/10/anthropic-unveils-new-fable-mythos-models-as-competition-heats-up-ahead-of-ipo" target="_blank" rel="noopener">The Star(로이터) — Anthropic unveils new Fable, Mythos models as competition heats up ahead of IPO</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://finance.yahoo.com/technology/article/anthropic-debuts-claude-fable-52-and-mythos-52-models-as-ipo-nears-190405087.html" target="_blank" rel="noopener">Yahoo Finance — Anthropic debuts Claude Fable 5.2 and Mythos 5.2 models as IPO nears</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.ajunews.com/view/20261110085942101" target="_blank" rel="noopener">아주경제 — 앤트로픽, 최신 버전 AI '페이블·미토스 5.2' 출시…성능 개선·가격 20% 인하</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.etnews.com/20261110000009" target="_blank" rel="noopener">전자신문 — 앤트로픽, 로봇 제어와 에이전트 강화한 AI '페이블·미토스 5.2' 공개</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.dt.co.kr/article/12094133" target="_blank" rel="noopener">디지털타임스 — 상장 앞둔 앤트로픽, 프런티어 AI 모델 '페이블·미토스 5.2' 출시</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.itdaily.kr/news/articleView.html?idxno=242820" target="_blank" rel="noopener">아이티데일리 — 앤트로픽, IPO 앞두고 '클로드 페이블·미토스 5.2' 출시</a>
</div>

<div class="article-keypoints">
<ul>
<li>앤트로픽, 11월 9일 Claude Fable 5.2·Mythos 5.2 공개 — 같은 기반 모델, 안전장치와 접근 조건만 다름</li>
<li>API 100만 토큰당 입력 8달러·출력 40달러로 5.1 대비 20% 인하, 빠른 모드는 16달러·80달러</li>
<li>Fable 5.2는 유료 요금제·API·AWS·구글 클라우드·애저에 즉시 제공, Mythos 5.2는 검증 프로그램 승인 기관 한정</li>
<li>Pro·Team 표준 좌석은 한국 시간 11월 17일 오후 4시 59분까지 Fable 무료 이용(주간 한도 50%)</li>
<li>30일 데이터 보관 필수 모델 — 국내 기업은 도입 전 보관 조건 점검 필요, 한국어 성능·원화 가격은 미확인</li>
</ul>
</div>
