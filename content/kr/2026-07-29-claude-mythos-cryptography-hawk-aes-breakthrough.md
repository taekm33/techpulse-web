---
draft: true
title: "AI가 암호 알고리즘 취약점을 스스로 발견하다: Claude Mythos의 충격적 성과"
summary: "Anthropic의 Claude Mythos Preview가 60시간 만에 NIST 후보 양자내성 서명 알고리즘 HAWK의 키 강도를 절반으로 줄이고, AES 공격 속도를 200~800배 향상시키는 데 성공했다. 인간 전문가들이 수년간 놓쳤던 취약점을 AI가 자율적으로 발견한 역사적 사건이다."
category: "hot-issue"
date: "2026-07-29"
readingTime: 5
tags: ["Claude Mythos", "암호학", "AI 보안", "HAWK", "AES"]
---

<div class="article-tldr">
<strong>TL;DR</strong>: Anthropic의 최신 모델 Claude Mythos Preview가 NIST가 2년간 검토한 양자내성 암호 알고리즘 HAWK의 키 강도를 단 60시간 만에 절반으로 줄이는 공격법을 발견했다. 또한 세계에서 가장 많이 쓰이는 대칭 암호 AES의 약화 변형에 대한 공격 속도를 최대 800배 향상시켰다. 현재 운영 중인 시스템에는 직접적인 위협이 없지만, AI가 수학적 암호 취약점을 자율적으로 발견할 수 있음을 처음으로 입증한 사례다.
</div>

## AI가 전문가들을 앞서다

2026년 7월 28일, Anthropic은 자사의 차세대 AI 모델 **Claude Mythos Preview**가 역대 가장 중요한 암호학적 성과를 자율적으로 달성했다고 발표했다. 수십 명의 세계 최고 암호학자들이 수년간 검토했지만 발견하지 못한 취약점을 AI가 불과 며칠 만에 스스로 찾아낸 것이다.

이번 연구는 AI가 단순히 코드를 생성하거나 문서를 요약하는 수준을 넘어, **수학적 알고리즘 자체의 결함**을 발견할 수 있음을 보여준다. 암호학 분야는 고도로 전문화된 수학적 지식이 요구되는 영역으로, 지금까지 AI가 인간 전문가 수준의 성과를 내기 어렵다고 여겨졌다.

<div class="article-stats">
<div class="stat-item">
<span class="stat-number">60시간</span>
<span class="stat-label">HAWK 취약점 발견 소요 시간</span>
</div>
<div class="stat-item">
<span class="stat-number">200~800×</span>
<span class="stat-label">AES 공격 속도 향상 배율</span>
</div>
<div class="stat-item">
<span class="stat-number">50%</span>
<span class="stat-label">HAWK 키 강도 감소율</span>
</div>
<div class="stat-item">
<span class="stat-number">$100,000</span>
<span class="stat-label">결과당 API 비용 (각 공격법 개발에 소요)</span>
</div>
</div>

## HAWK: 양자 컴퓨터도 막아야 하는 미래 암호 알고리즘

첫 번째 대상은 **HAWK**다. HAWK는 미국 국립표준기술원(NIST)이 2022년부터 진행 중인 양자내성 암호(PQC) 표준화 사업의 3라운드 후보 알고리즘이다. 양자 컴퓨터가 현재 RSA와 ECDSA 같은 서명 알고리즘을 무력화할 수 있다는 우려에서 시작된 프로젝트다.

Mythos Preview는 단 한 명의 Anthropic 연구자와 협력해 **60시간 만에** HAWK에 대한 기존 최선 공격법을 개선했다. 결과는 놀라웠다. HAWK의 사실상의 키 강도가 **절반**으로 줄어드는 공격법을 찾아낸 것이다. NIST의 2년에 걸친 전문가 검토 과정에서 발견되지 않은 결함이었다.

<div class="article-callout tip">
<strong>왜 중요한가?</strong> HAWK는 아직 표준으로 채택되지 않아 현재 운영 중인 시스템에는 영향이 없다. 하지만 표준화 이후 수십억 개의 기기에 적용될 수 있었던 알고리즘이다. AI가 사전에 이를 발견한 것은 "암호학 연구가 의도한 대로 작동하고 있다"는 Anthropic의 설명처럼, 결국 보안을 강화하는 과정이다.
</div>

## AES: 세계에서 가장 많이 쓰이는 암호를 200~800배 빠르게 뚫다

두 번째 성과는 **AES(고급 암호화 표준)**에 관한 것이다. AES는 2001년 NIST가 채택한 대칭 암호로, 인류 역사상 가장 광범위하게 검토받은 암호 알고리즘 중 하나다. 직접적으로 AES를 깨는 것은 아니고, 연구 목적으로 사용되는 '라운드 감소 변형(reduced-round AES)'에 대한 공격이다.

Mythos는 기존 최선 공격법 대비 **200~800배 빠른** 공격 방법을 자율적으로 발견했다. 연구자가 별도의 스캐폴드(자동화 실행 환경)를 만들어주자, Claude가 **완전 자율적으로** 이 취약점을 찾아냈다.

<div class="article-callout info">
<strong>책임있는 공개(Responsible Disclosure)</strong>: Anthropic은 이 연구 결과를 공개하기 전, 미국 정부 기관과 산업계 리더들과 협의했다. ETH 취리히, 텔아비브 대학교, 하이파 대학교 연구자들과 함께 <strong>CryptanalysisBench</strong>라는 오픈 벤치마크도 공동 개발해 타 연구자들도 AI의 암호 분석 능력을 평가할 수 있게 했다.
</div>

## AI와 암호학의 미래: 기회인가, 위협인가

이번 성과는 AI가 암호학 연구에 미칠 영향을 두 가지 시각에서 바라보게 한다.

**기회 측면**: AI는 인간이 수십 년간 검토해도 놓칠 수 있는 취약점을 빠르게 발견할 수 있다. 특히 "적절한 검토를 받지 못한 암호들"에 대한 대규모 감사(audit)가 가능해진다. Anthropic은 이미 HAWK 발견 이후 추가 알고리즘에 대한 감사를 시작했다.

**위험 측면**: 동일한 AI 능력이 악의적 행위자에게 이용될 경우, 기존에는 불가능했던 규모와 속도로 암호화된 통신을 공격할 수 있다. Anthropic은 "사이버 보안 커뮤니티가 이미 AI가 너무 많은 버그를 발견해 표준적인 인간 처리 프로세스(심사, 검증, 보완)가 병목이 되는 상황에 직면했다"고 경고한다. 동일한 상황이 학문적 암호학 연구에서도 곧 현실화될 것이라는 예측이다.

<div class="article-keypoints">
<h3>핵심 포인트</h3>
<ul>
<li>Claude Mythos Preview는 NIST의 양자내성 암호 후보 HAWK를 60시간 만에 돌파해 키 강도를 절반으로 감소시켰다</li>
<li>AES 라운드 감소 변형에 대한 공격 속도를 200~800배 향상시켰으며, 이는 완전 자율적으로 달성됐다</li>
<li>현재 운영 중인 시스템에는 직접적 위협 없음; 두 결과 모두 연구 목적의 스트레스 테스트</li>
<li>Anthropic은 ETH 취리히, 텔아비브 대학교, 하이파 대학교와 협력해 CryptanalysisBench 오픈 벤치마크를 공개했다</li>
<li>AI 모델이 1년 만에 기초 암호도 못 풀던 수준에서 수년간 전문가 검토를 통과한 알고리즘의 결함을 찾아내는 수준으로 급성장했다</li>
</ul>
</div>

## 경쟁 환경과 맥락

Anthropic의 성과는 AI가 수학 연구를 수행하는 더 넓은 추세의 일부다. 최근 몇 달 사이 Google의 Gemini는 미해결 에르되시(Erdős) 문제들을 해결했고, OpenAI의 GPT는 단위 거리 추측(unit distance conjecture)을 증명했다. Anthropic 역시 Claude Fable 5가 야코비안 추측(Jacobian Conjecture)을 해결했다고 발표했다.

| 사건 | AI 모델 | 기관 | 날짜 |
|------|---------|------|------|
| 에르되시 문제 다수 해결 | Gemini | Google | 2026년 초 |
| 단위 거리 추측 증명 | GPT | OpenAI | 2026년 중반 |
| 야코비안 추측 해결 | Claude Fable 5 | Anthropic | 2026년 7월 초 |
| HAWK·AES 취약점 발견 | Claude Mythos Preview | Anthropic | 2026년 7월 28일 |

## 앞으로의 전망

Anthropic은 앞으로 수 주 안에 학술 워크숍을 개최해 학계, 정부, 산업계가 AI 시대의 보안 및 암호학 연구 역할에 대해 논의할 계획이다. 연구팀은 "AI 언어 모델이 가장 기본적인 암호도 분석하지 못하던 수준에서 단 1년 만에 수년간의 전문가 검토를 통과한 암호 설계의 결함을 찾아내는 수준까지 성장했다"며, 이 기술 발전의 속도를 경계할 것을 요청했다.

이번 사건은 AI의 놀라운 연구 잠재력을 보여줌과 동시에, 암호학 커뮤니티가 AI 시대에 맞는 새로운 연구·공개·대응 체계를 갖춰야 할 필요성을 일깨웠다.


<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://www.anthropic.com/research" target="_blank" rel="noopener">Anthropic 연구·발표 (Research)</a><br/>
· <a href="https://csrc.nist.gov/projects/post-quantum-cryptography" target="_blank" rel="noopener">NIST 양자내성암호(PQC) 표준화 프로젝트</a><br/>
· <a href="https://hawk-sign.info/" target="_blank" rel="noopener">HAWK 서명 알고리즘 공식 사이트</a><br/>
· <a href="https://csrc.nist.gov/pubs/fips/197/final" target="_blank" rel="noopener">AES 표준 FIPS 197 (NIST)</a><br/>
</div>
