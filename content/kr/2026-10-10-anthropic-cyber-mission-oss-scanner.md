---
title: "앤트로픽 'Cyber Mission' 출범 — 오픈소스 무료 취약점 스캔(OSS Scanner)과 핵심 인프라 방어 프로그램"
summary: "앤트로픽이 2026년 10월 8일(미국 시간) 방어자 지원 장기 계획 'Anthropic Cyber Mission'을 발표했다. 첫 단계는 두 가지다. 전력망·수도·교통 같은 운영기술(OT) 보안 사업자에게 Claude 모델과 현장 엔지니어를 붙이는 '핵심 인프라 방어 프로그램(CIDP)'(창립 파트너 11곳)과, 중요 오픈소스 프로젝트를 무료로 정기 스캔하는 'OSS Scanner'다. 스캔 보고서는 사람 검토 없이 모델이 바로 보낸다는 점이 핵심 제약이다. 국내 오픈소스 메인테이너와 보안 담당자가 확인할 점을 공개 자료 기준으로 정리했다."
category: "ai-news"
date: "2026-10-10"
readingTime: 6
tags: ["Anthropic", "Claude", "사이버보안", "오픈소스", "OSS Scanner", "핵심 인프라"]
---

<div class="article-tldr">
앤트로픽이 2026년 10월 8일(미국 시간) <strong>Anthropic Cyber Mission</strong>을 발표했다. 회사는 이를 "모두가 의존하는 시스템을 지키기 위한 장기 약속"이라고 소개했다. 첫 단계는 두 가지다. ① 전력망·수도·교통 등 운영기술(OT)을 지키는 보안 사업자에게 Claude 모델·현장 엔지니어·위협 연구를 제공하는 <strong>핵심 인프라 방어 프로그램(CIDP)</strong>, ② 중요 오픈소스 프로젝트를 <strong>무료로 정기 스캔</strong>해 재현 코드와 수정안까지 보내 주는 <strong>OSS Scanner</strong>. 다만 OSS Scanner 보고서는 <strong>사람 검토 없이</strong> 모델이 생성해 바로 발송되므로 오탐과 심각도 과대평가 가능성이 있다고 회사가 직접 밝혔다.
</div>

이 글은 앤트로픽 공식 발표문·연구 글·OSS Scanner 안내 페이지와 언론 보도를 바탕으로 한 공개 자료 분석이다. 서비스에 직접 등록하거나 스캔 결과를 받아 보지 않았다.

## 누구에게 중요한가

- **오픈소스 메인테이너**: 널리 쓰이는 라이브러리·인프라 소프트웨어를 관리한다면 무료 AI 스캔을 신청할 수 있다. 반대로 등록하면 검증되지 않은 보고서가 메일로 계속 들어오므로 처리 여력도 따져야 한다.
- **기업 보안·DevSecOps 팀**: 쓰고 있는 오픈소스에서 취약점 공개가 늘어날 수 있다. 의존성 업데이트 주기를 점검할 이유가 된다.
- **OT·제조·에너지 분야 보안 담당자**: CIDP는 이 분야를 직접 겨냥한다. 다만 첫 대상은 보안 사업자(서비스 제공 기업)이며 운영사 개별 신청 경로는 아니다.

## 확인된 사실 — 공식 발표 기준

앤트로픽은 <a href="https://www.anthropic.com/news/anthropic-cyber-mission" target="_blank" rel="noopener">공식 발표문</a>에서 프런티어 모델이 "취약점 악용과 사이버 작전에 오용될 수 있다"고 인정하면서, 방어 쪽에 도구·연구·자원을 먼저 보내겠다고 밝혔다.

<div class="article-stats">
<strong>발표일</strong> 2026-10-08 (미국 시간)<br/>
<strong>첫 집중 영역</strong> 핵심 인프라, 오픈소스 소프트웨어<br/>
<strong>CIDP 창립 파트너</strong> 11곳<br/>
<strong>OSS Scanner 비용</strong> 무료 (앤트로픽 부담)<br/>
<strong>OSS Scanner 검토</strong> 모델 생성, 사람 검토 없이 발송<br/>
<strong>회사 예측</strong> "2년 안에 AI가 방어 쪽에 유리해질 것"
</div>

### 핵심 인프라 방어 프로그램(CIDP)

CIDP는 운영기술(OT) 보안을 제공하는 사업자에게 최신 Claude 모델, 현장 파견 엔지니어, 위협 연구를 지원한다. 발표문이 밝힌 창립 파트너 11곳은 Accenture, Booz Allen, CrowdStrike, Deloitte, Dragos, Hitachi, Insane Cyber, Nozomi Networks, Palo Alto Networks, PwC, Rockwell Automation이다. 회사는 "소규모 집단"으로 시작해 효과적인 전략을 배운 뒤 몇 달에 걸쳐 파트너와 분야를 넓히겠다고 했다. OT 설비는 "패치를 위해 쉽게 오프라인으로 내릴 수 없다"는 점을 이유로 들었다. 핵심 인프라용 보안 제품·서비스를 만드는 기업은 <a href="https://claude.com/form/critical-infrastructure-defense-program-interest" target="_blank" rel="noopener">관심 등록 양식</a>으로 신청할 수 있다.

### OSS Scanner — 무료 오픈소스 취약점 스캔

<a href="https://www.anthropic.com/research/launching-opt-in-vuln-finding-service-for-open-source" target="_blank" rel="noopener">앤트로픽 연구 글</a>에 따르면 OSS Scanner는 Claude Mythos를 포함한 회사의 가장 강력한 모델로 등록 프로젝트를 정기 스캔한다. 구글의 OSS-Fuzz를 본뜬 방식이다. 각 보고서에는 재현 코드, 버그 설명(가능하면 버그가 들어온 시점까지), 수정 패치 후보가 담긴다.

<a href="https://red.anthropic.com/oss-scanner" target="_blank" rel="noopener">OSS Scanner 안내 페이지</a>가 밝힌 등록 조건은 다음과 같다.

- 대상은 "인프라와 사용자 보안에 중대한 영향을 주는 기성 프로젝트"다. 앤트로픽이 사례별로 판단한다.
- **핵심 메인테이너만** 등록할 수 있고, 앤트로픽이 수동으로 신원을 확인한다.
- 등록은 <a href="https://github.com/anthropics/oss-scanner" target="_blank" rel="noopener">anthropics/oss-scanner 저장소</a>에 `project.yaml`(저장소 git URL, 연락 이메일, 오프라인 빌드용 Dockerfile 경로)을 추가하는 PR로 한다. 깃허브가 아닌 저장소도 git URL이면 된다.
- 스캔은 Dockerfile 빌드 뒤 인터넷 연결 없이 실행된다. 스캔 주기는 고정돼 있지 않다.

## 정확도 — 회사 수치와 한계를 함께 봐야 한다

발표문은 진양성률(실제 취약점 비율)이 "90%를 넘을 것"으로 예상한다고 밝혔다. 연구 글이 공개한 시범 결과는 조금 더 구체적이다. 모의해킹 전문가가 48개 프로젝트의 치명·높음 등급 발견 97건을 검토했더니 85건(88%)이 회사의 공개 기준을 충족했다. 나머지 12건 중 11건은 실제 문제였지만 이미 알려졌거나 중복이었고, 1건은 오탐이었다. 회사는 일부 메인테이너가 심각도가 부풀려졌거나 위협 모델을 잘못 이해했다는 의견을 냈다고도 적었다. 이 수치는 모두 앤트로픽 자체 측정이며 독립 검증 결과는 아직 없다.

## 보도가 짚은 점

벨기에 IT 매체 <a href="https://itdaily.com/news/security/anthropic-on-a-mission-to-improve-the-security-of-critical-infrastructure-and-open-source/" target="_blank" rel="noopener">ITdaily</a>는 CIDP의 상업 조건이 공개되지 않았고, 파트너가 무료로 쓰는지·모델 연산 비용을 누가 내는지 불분명하다고 지적했다. 발표문 본문에도 Cyber Mission 전체 예산은 나오지 않는다.

## 미확인·전망 (사실과 구분)

- **국내 기관 참여**: 창립 파트너에 한국 기업은 없다. 국내 핵심 인프라 운영사나 보안 기업이 CIDP에 참여할 수 있는지는 **미확인**이다.
- **국가 제한**: OSS Scanner 안내 페이지에는 국가·지역 제한 언급이 없다. 국내 프로젝트도 등록 조건을 충족하면 신청할 수 있어 보이지만, 실제 승인 여부는 앤트로픽 판단이라 **미확인**이다.
- **한국어 지원**: 보고서 언어는 공개되지 않았다. 코드 분석 서비스라 한국어 지원 여부가 큰 변수는 아니지만 **미확인**이다.
- **"2년 안에 방어 우위"**: 회사의 전망일 뿐 검증된 사실이 아니다.

## 국내 개발자·보안 담당자에게 미치는 영향

OSS Scanner가 널리 쓰이면 주요 오픈소스에서 취약점 수정과 공개가 몰릴 수 있다. 연구 글에 따르면 앤트로픽은 지난 6개월 동안 후보 취약점 2만 9천여 건을 찾았고, 약 6천 건을 수동 분류했다. 찾는 속도가 고치는 속도보다 빠르다는 것이 회사 스스로 밝힌 문제의식이다. 국내 기업이 쓰는 오픈소스도 예외가 아니므로, 패치 공지와 의존성 업데이트에 더 자주 대응해야 할 수 있다.

<div class="article-callout tip">
<strong>지금 할 수 있는 일</strong><br/>
1. <strong>메인테이너</strong>: 안내 페이지의 조건(핵심 인프라 영향, 높음·치명 보고 처리 여력)을 먼저 확인하고, 오프라인 빌드되는 Dockerfile을 준비한 뒤 PR로 신청한다. 암호화 보고를 원하면 PGP 키를 넣는다.<br/>
2. <strong>보고서를 받으면</strong>: 사람 검토 전 보고서이므로 재현 코드로 직접 확인한 뒤 대응한다. 심각도 등급은 자체 위협 모델로 다시 매긴다.<br/>
3. <strong>기업 보안팀</strong>: 주요 오픈소스 의존성의 보안 공지 구독과 업데이트 주기를 점검한다.<br/>
4. <strong>보안 연구·방어 조직</strong>: 앤트로픽의 <a href="https://www.anthropic.com/news/cyber-verification-program" target="_blank" rel="noopener">Cyber Verification Program</a>(방어·레드팀 등 단계별 모델 접근 신청)도 함께 검토할 수 있다.
</div>

## 한계

이 글은 발표 직후 공개된 앤트로픽 자료와 일부 보도만을 근거로 했다. 정확도 수치는 회사 시범 결과이고, CIDP의 비용 구조와 국외 기관 참여 조건은 공개되지 않았다. 실제 보고서 품질과 메인테이너 부담은 운영이 쌓인 뒤 제3자 평가로 확인해야 한다.

<p><em>최종 확인일 2026-10-10.</em></p>

<div class="article-callout info">
<strong>출처 (공식·1차 자료 / 보도·해설 구분)</strong><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://www.anthropic.com/news/anthropic-cyber-mission" target="_blank" rel="noopener">Anthropic — Introducing the Anthropic Cyber Mission (2026-10-08)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://www.anthropic.com/research/launching-opt-in-vuln-finding-service-for-open-source" target="_blank" rel="noopener">Anthropic 연구 — 오픈소스 대상 옵트인 취약점 탐지 서비스 출시 (2026-10-08)</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://red.anthropic.com/oss-scanner" target="_blank" rel="noopener">Anthropic — OSS Scanner 안내 페이지</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://github.com/anthropics/oss-scanner" target="_blank" rel="noopener">GitHub — anthropics/oss-scanner 저장소</a><br/>
· <span class="src-role">[공식·1차]</span> <a href="https://www.anthropic.com/news/cyber-verification-program" target="_blank" rel="noopener">Anthropic — Cyber Verification Program 확대 (2026-10-06)</a><br/>
· <span class="src-role">[보도·해설]</span> <a href="https://itdaily.com/news/security/anthropic-on-a-mission-to-improve-the-security-of-critical-infrastructure-and-open-source/" target="_blank" rel="noopener">ITdaily — Anthropic, 핵심 인프라·오픈소스 보안 미션 출범 (2026-10-09)</a>
</div>

<div class="article-keypoints">
<ul>
<li>앤트로픽, 방어자 지원 장기 계획 'Cyber Mission' 발표(2026-10-08) — 첫 영역은 핵심 인프라와 오픈소스</li>
<li>CIDP: OT 보안 사업자에 Claude 모델·현장 엔지니어 지원, 창립 파트너 11곳, 상업 조건은 비공개</li>
<li>OSS Scanner: 중요 오픈소스 무료 정기 스캔, 핵심 메인테이너가 GitHub PR로 신청, 보고서는 사람 검토 없이 발송</li>
<li>정확도는 회사 시범 기준 97건 중 85건(88%)이 공개 기준 충족 — 독립 검증 전</li>
<li>국내 기관의 CIDP 참여 가능 여부와 국가 제한은 미확인</li>
</ul>
</div>
