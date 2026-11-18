---
title: "MS 이그나이트 2026, 자체 AI 모델 7종 공개 — 'MAI 코드 2'는 오늘부터 깃허브 코파일럿에서 선택 가능"
summary: "마이크로소프트가 11월 17일(미국 시간, 한국 시간 18일 새벽) 이그나이트 2026에서 코딩·보안·이미지·음성·의료 전사·판단용 자체 모델 7종을 발표했다. 핵심인 MAI 코드 2와 코드 2 플래시는 깃허브 코파일럿 모델 선택기에 바로 들어왔고, 플래시는 무료·학생 요금제에서도 쓸 수 있다. 회사가 내세운 'GPT-6.1 솔 성능의 98%를 40% 비용으로'라는 비교의 조건, 국내 개발자가 확인할 요금제·관리자 설정, 미확인 사항을 공개 자료 분석으로 정리했다."
category: "ai-news"
date: "2026-11-18"
readingTime: 7
tags: ["마이크로소프트", "Microsoft", "이그나이트 2026", "MAI Code 2", "깃허브 코파일럿", "GitHub Copilot", "AI 모델", "MAI Image 2.7"]
---

<div class="article-tldr">
마이크로소프트(MS)가 <strong>2026년 11월 17일(미국 시간), 한국 시간 18일 새벽</strong> 샌프란시스코 이그나이트 2026에서 <a href="https://microsoft.ai/news/microsoft-ignite-2026/" target="_blank" rel="noopener">자체 AI 모델 7종</a>을 공개했다. 국내 개발자에게 당장 의미 있는 것은 코딩 모델 <strong>MAI 코드 2</strong>와 <strong>코드 2 플래시</strong>다. 두 모델은 발표 당일부터 깃허브 코파일럿 모델 선택기에 들어왔고, 플래시는 <strong>무료·학생 요금제</strong>에서도 고를 수 있다. 다만 "경쟁 모델의 98% 성능, 40% 비용" 같은 수치는 MS 자체 평가이며, 비용 비교에는 50% 프로모션 가격이 적용됐다.
</div>

이 글은 MS AI(microsoft.ai) 발표문, MS 공식 블로그, 깃허브 체인지로그, 국내외 보도를 바탕으로 한 공개 자료 분석이다. 모델을 실행해 성능이나 비용을 재현하지 않았으며, 아래 수치는 모두 MS 발표 또는 보도 내용이다.

## 누구에게 중요한가

- **깃허브 코파일럿을 쓰는 개발자**: 모델 선택기에 새 선택지가 생겼다. 무료 요금제 이용자도 코드 2 플래시를 고를 수 있다.
- **코파일럿 비즈니스·엔터프라이즈 관리자**: 기본 설정이면 새 모델이 <strong>자동으로 켜진다</strong>. 사내 정책상 승인 전 차단이 필요하면 지금 모델 정책을 확인해야 한다.
- **MAI-Code-1.1-Flash를 쓰는 팀**: 12월 18일 모든 코파일럿 환경에서 지원이 종료된다.
- **애저(Azure) 파운드리로 서비스를 만드는 기업**: 이미지·음성 모델이 프리뷰로 열렸다. 콜센터 음성봇, 상품 이미지 편집 같은 업무의 단가 비교 대상이 늘었다.
- **보안 조직**: MAI 사이버 2 플래시는 API로 팔지 않고 MS 보안 제품 안에서만 쓰인다.

## 확인된 사실 — MS·깃허브 공식 자료 기준

<div class="article-stats">
<strong>발표</strong> 2026년 11월 17일(미국 시간) 이그나이트 2026 기조연설, 한국 시간 18일 새벽<br/>
<strong>코딩</strong> MAI 코드 2(코파일럿 프로·프로+·맥스·비즈니스·엔터프라이즈), 코드 2 플래시(위 요금제 + 무료·학생)<br/>
<strong>회사 제시 코딩 성능</strong> 4개 벤치마크 평균 GPT-6.1 솔의 98%를 약 40% 비용으로, 클로드 오퍼스 5.5의 96%를 5% 비용으로(50% 프로모션 가격 기준)<br/>
<strong>이미지</strong> MAI 이미지 2.7 약 35달러/1,000장, 2.7 플래시 약 10달러/1,000장(파운드리 퍼블릭 프리뷰)<br/>
<strong>음성</strong> MAI 리얼타임 1 분당 0.01달러부터 + 추론 100만 토큰당 입력 1달러·출력 5달러(파운드리 제한 프리뷰, 퍼블릭 프리뷰 전 과금 없음)<br/>
<strong>보안</strong> MAI 사이버 2 플래시, 컨텍스트 100만 토큰, MS 보안 제품 전용, 12월 중순부터 MDASH 적용<br/>
<strong>기타</strong> 판단 모델 Decision 1.1 정식 출시, 의료용 드래곤 코파일럿 트랜스크라이브(MAI 트랜스크라이브 2 기반), 2세대 AI 칩 마이아 200이 MS 최대 모델 운영에 투입됐다고 발표
</div>

### 코딩 모델: 어디서, 누가 쓸 수 있나

<a href="https://github.blog/changelog/2026-11-17-mai-code-2-and-mai-code-2-flash-in-github-copilot/" target="_blank" rel="noopener">깃허브 체인지로그</a>에 따르면 두 모델은 VS Code, 비주얼 스튜디오, 코파일럿 CLI, 클라우드 에이전트, github.com, 깃허브 모바일, 젯브레인즈, Xcode, 이클립스의 모델 선택기에서 고를 수 있다. 과금은 사용량 기반이다. 같은 체인지로그는 "연간 요금제의 적격 구독자"에게 제공된다고 적어, 월간 결제 이용자에게도 같은 시점에 열리는지는 문구만으로는 분명하지 않다. 코드 2는 여러 모델을 자동으로 섞어 쓰는 <a href="https://github.blog/changelog/2026-11-17-github-copilot-fusion-updates-more-availability-benchmarks-and-models/" target="_blank" rel="noopener">코파일럿 퓨전의 스탠더드 등급</a>에도 추가됐다.

<a href="https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/" target="_blank" rel="noopener">MS 발표문</a>은 이 모델들이 "일상적인 기업 코딩 작업"에 맞춰졌고, <strong>기초과학 연구나 매우 긴 에이전트 작업에는 아직 맞춰지지 않았다</strong>고 명시했다. 성능 비교는 DeepSWE 1.1·터미널벤치 2.1·SWE-Atlas를 MS 내부 평가 플랫폼에서 코파일럿 CLI로 돌린 값과 아티피셜 애널리시스의 FrontierCode 1.1 값을 평균한 것이다. 프론트엔드 결과물 블라인드 평가에서는 258명 평가자가 GPT-6 솔보다 MAI 코드 2를 64% 선호했다고 밝혔다. 파운드리에서는 코드 2 플래시만 제한 프리뷰로 열렸고, 오픈라우터·버셀 등에는 "곧" 나온다고 했다.

### 이미지·음성·보안

<a href="https://microsoft.ai/news/introducing-mai-image-2-7/" target="_blank" rel="noopener">MAI 이미지 2.7</a>은 11월 16일 기준 아티피셜 애널리시스 이미지 편집 순위 1위(2위와 4점 차)라고 MS는 밝혔다. 투명 배경 출력을 지원하고, 빙 이미지 크리에이터의 기본 모델이다. <a href="https://microsoft.ai/news/introducing-mai-realtime-1/" target="_blank" rel="noopener">MAI 리얼타임 1</a>은 MS의 첫 음성-음성 모델로, 오픈AI 리얼타임 API와 호환돼 기존 음성 앱을 옮기기 쉽다고 설명했다. <a href="https://microsoft.ai/news/introducing-mai-cyber-2-flash/" target="_blank" rel="noopener">MAI 사이버 2 플래시</a> 발표문은 벤치마크 905개 과제 중 92개가 학습 데이터와 같은 오픈소스 프로젝트에 기반한 사실을 발견해, 모든 모델에서 이를 빼고 813개로 점수를 냈다고 밝혔다.

### 모델 가중치 라이선스

<a href="https://blogs.microsoft.com/blog/2026/11/17/ignite-2026-building-the-frontier-ecosystem/" target="_blank" rel="noopener">사티아 나델라 CEO 기조연설 정리본</a>은 신뢰할 수 있는 고객이 MS AI 모델 가중치를 받아 쓸 수 있는 <strong>'MAI 라이선스드 웨이츠'</strong>를 발표했다. 구체적인 자격 요건과 가격은 이 글에서 확인하지 못했다.

## 미확인·전망 (사실과 구분)

- **독립 검증**: 성능·비용 수치는 MS 발표다. 비용 비교 일부에는 프로모션 할인가가 쓰였으므로, 할인이 끝난 뒤 정가 기준 격차는 더 작아질 수 있다. 프로모션 종료 시점은 <strong>미확인</strong>이다.
- **모델 규모**: AI타임스는 MAI 코드 2가 총 2조8,000억 개 매개변수 중 800억 개를 쓰는 전문가 혼합(MoE) 모델이고 컨텍스트가 약 105만 토큰이라고 보도했다. 이 글에서 확인한 MS 발표문에는 이 수치가 없었다. 같은 보도는 블라인드 평가 선호도를 67%로 적었지만 MS 원문은 64%다.
- **한국어 성능**: 코드 2의 한국어 주석·문서 처리, 리얼타임 1의 한국어 음성 대화, 이미지 2.7의 한글 글자 표현에 대한 평가 수치는 공개되지 않았다(<strong>미확인</strong>).
- **국내 리전·원화 가격**: 파운드리 프리뷰가 한국 중부 등 국내 리전에서 열리는지, 원화 가격이 있는지는 <strong>미확인</strong>이다. 코파일럿과 파운드리 가격은 달러로만 공개됐다.
- **코드 2 API 단가**: 파운드리나 외부 API에서의 100만 토큰당 가격은 이 글에서 확인하지 못했다.

## 국내 이용자에게 미치는 영향

국내 매체도 18일 새벽부터 일제히 보도했다. <a href="https://www.mk.co.kr/news/it/12211911" target="_blank" rel="noopener">매일경제</a>는 무스타파 술레이만 MS AI CEO의 "토큰 지출이 치솟고 있다"는 발언을 중심으로, 이번 발표를 가격 공세로 해석했다. <a href="https://www.aitimes.kr/news/articleView.html?idxno=42777" target="_blank" rel="noopener">인공지능신문</a>은 모델과 함께 공개된 에이전트 관리·데이터 인프라 발표를 묶어 전했다.

개인 개발자에게 가장 빠른 변화는 무료 코파일럿에서 고를 수 있는 모델이 하나 늘었다는 점이다. 기업에는 두 가지가 걸린다. 첫째, 자동 활성화 기본값 때문에 보안 검토 전 새 모델이 사내에서 쓰일 수 있다. 둘째, 코드 2가 MS 설명처럼 "일상 업무용"이라면, 버그 수정·리팩터링 같은 반복 작업은 MAI로, 설계·장기 에이전트 작업은 상위 모델로 나누는 식의 비용 배분을 검토할 근거가 생긴다. 다만 그 판단은 회사 자체 저장소에서 같은 작업을 돌려 본 결과로 해야 한다.

<div class="article-callout tip">
<strong>지금 할 수 있는 일</strong><br/>
1. <strong>개인 개발자</strong>: VS Code 등 코파일럿 채팅의 모델 선택기에서 'MAI Code 2' 또는 'MAI Code 2 Flash'가 보이는지 확인한다. 보이지 않으면 요금제(코드 2는 프로 이상)와 결제 주기를 확인한다.<br/>
2. <strong>관리자</strong>: 코파일럿 설정의 모델 정책에서 MAI 모델 허용 여부를 정한다. 기본값을 그대로 두면 자동으로 켜진다.<br/>
3. <strong>MAI-Code-1.1-Flash 사용 팀</strong>: 12월 18일 종료 전에 자동화 스크립트·설정에 박아 둔 모델 이름을 바꾼다.<br/>
4. <strong>비용 비교</strong>: 같은 이슈 10~20건을 기존 모델과 MAI 코드 2로 처리하게 하고, 병합 가능한 변경 비율과 사용량 청구액을 함께 기록한다. 프로모션 가격이 끝난 뒤 다시 비교한다.<br/>
5. <strong>음성봇 개발사</strong>: 오픈AI 리얼타임 API로 만든 앱이라면 파운드리 제한 프리뷰를 신청해 한국어 대화 품질을 먼저 확인한다. 프리뷰 기간에는 과금되지 않는다고 MS는 밝혔다.
</div>

MS의 이전 MAI 모델 흐름은 TechPulse의 <a href="/2026-09-07-microsoft-mai-transcribe-2-speech-model/">MAI 트랜스크라이브 2 기사</a>와 <a href="/2026-07-28-microsoft-mai-cyber-perception-security-ai/">MAI 사이버 기사</a>에서 함께 볼 수 있다.

## 한계

이 글은 11월 18일 확인한 MS AI 발표문 5건(종합·코드·이미지·리얼타임·사이버), MS 공식 블로그와 뉴스센터, 깃허브 체인지로그, AI타임스·인공지능신문·매일경제·파이낸셜뉴스 보도에 근거했다. 모델을 실행해 어떤 수치도 재현하지 않았다. 드래곤 코파일럿과 Decision 1.1은 국내 일반 이용자와 거리가 있어 간단히만 다뤘고, 가격과 제공 범위는 바뀔 수 있다.

<p><em>최종 확인일 2026-11-18.</em></p>

<div class="article-callout info">
<strong>출처 (공식·1차 자료 / 보도·해설 구분)</strong><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://microsoft.ai/news/microsoft-ignite-2026/" target="_blank" rel="noopener">Microsoft AI — Seven new world class models at scalable price-performance (2026-11-17)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/" target="_blank" rel="noopener">Microsoft AI — MAI Code 2 and Code 2 Flash</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://microsoft.ai/news/introducing-mai-image-2-7/" target="_blank" rel="noopener">Microsoft AI — MAI Image 2.7</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://microsoft.ai/news/introducing-mai-realtime-1/" target="_blank" rel="noopener">Microsoft AI — MAI Realtime 1</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://microsoft.ai/news/introducing-mai-cyber-2-flash/" target="_blank" rel="noopener">Microsoft AI — MAI Cyber 2 Flash</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://blogs.microsoft.com/blog/2026/11/17/ignite-2026-building-the-frontier-ecosystem/" target="_blank" rel="noopener">The Official Microsoft Blog — Ignite 2026: Building the frontier ecosystem</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://news.microsoft.com/source/2026/11/17/microsoft-ignite-2026-empowering-human-ambition-intelligence-and-trust/" target="_blank" rel="noopener">Microsoft Source — Microsoft Ignite 2026 발표 종합</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://github.blog/changelog/2026-11-17-mai-code-2-and-mai-code-2-flash-in-github-copilot/" target="_blank" rel="noopener">GitHub Changelog — MAI Code 2 and MAI Code 2 Flash in GitHub Copilot</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://github.blog/changelog/2026-11-17-github-copilot-fusion-updates-more-availability-benchmarks-and-models/" target="_blank" rel="noopener">GitHub Changelog — Copilot Fusion updates</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://github.blog/changelog/month/11-2026/" target="_blank" rel="noopener">GitHub Changelog — 2026년 11월 목록(MAI-Code-1.1-Flash 지원 종료 공지 포함)</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.aitimes.com/news/articleView.html?idxno=217511" target="_blank" rel="noopener">AI타임스 — MS, 'MAI 코드 2' 출시…앤트로픽급 코딩 성능에 비용은 5%</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.aitimes.kr/news/articleView.html?idxno=42777" target="_blank" rel="noopener">인공지능신문 — 마이크로소프트, 자체 AI 모델 '코드 2' 공개</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.mk.co.kr/news/it/12211911" target="_blank" rel="noopener">매일경제 — MS, '가성비 AI' 공세...GPT급 코딩 성능에 비용 40%</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://www.fnnews.com/news/202611180759315296" target="_blank" rel="noopener">파이낸셜뉴스 — MS 신모델 AI 7종 공개[글로벌AI브리핑]</a>
</div>

<div class="article-keypoints">
<ul>
<li>MS, 이그나이트 2026(한국 시간 11월 18일 새벽)에서 코딩·보안·이미지·음성·의료 전사·판단용 자체 모델 7종 발표</li>
<li>MAI 코드 2(프로 이상)·코드 2 플래시(무료·학생 포함)는 발표 당일부터 깃허브 코파일럿 모델 선택기에서 사용 가능</li>
<li>"GPT-6.1 솔의 98% 성능을 40% 비용으로"는 MS 자체 평가, 비용 비교는 50% 프로모션 가격 기준</li>
<li>코파일럿 기업 요금제는 새 모델이 기본 자동 활성화 — 관리자 정책 확인 필요, MAI-Code-1.1-Flash는 12월 18일 종료</li>
<li>한국어 성능, 국내 리전 제공, 원화 가격, 프로모션 종료 시점은 미확인</li>
</ul>
</div>
