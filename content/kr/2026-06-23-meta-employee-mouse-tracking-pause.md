---
title: "메타, AI 학습용 직원 '마우스·키보드 추적' 프로그램 전격 중단…민감정보 전사 노출 파문"
summary: "메타가 자사 AI 모델 학습을 위해 직원의 마우스 움직임과 키 입력을 기록하던 내부 프로그램 'MCI'를 중단했다. 민감한 직원 데이터가 전체 직원에게 노출된 사실이 드러나면서 보안 조사에 착수했다."
category: "it-news"
date: "2026-06-23"
readingTime: 5
tags: ["메타", "데이터보안", "직원감시", "AI학습데이터", "개인정보보호"]
---

<div class="article-tldr">
메타가 자사 AI 모델 학습 데이터를 확보하기 위해 미국 직원들의 마우스 클릭, 키 입력, 화면 일부를 기록해온 내부 프로그램 'Model Capability Initiative(MCI)'를 잠정 중단했다. 민감한 직원 데이터가 사내 전체 직원에게 열람 가능한 상태로 노출된 사실이 드러났기 때문이다. 직원 감시 논란과 정리해고 시점이 겹쳐 안팎의 반발이 거셌던 프로그램이 보안 사고로 결국 멈춰선 셈이다.
</div>

메타는 6월 22일(현지시간) 자사 AI 모델 훈련을 위해 미국 내 직원들의 업무 활동을 기록하던 내부 도구의 가동을 중단한다고 밝혔다. 로이터가 검토한 문서에 따르면, 이 도구로 수집된 민감한 직원 데이터 일부가 의도와 달리 사내 전 직원에게 열람 가능한 상태로 노출돼 있었던 것으로 확인됐다.

## MCI란 무엇인가

문제가 된 프로그램은 'Model Capability Initiative(MCI)'로, 지난 4월 도입됐다. 이 도구는 미국 소재 직원들의 마우스 움직임, 클릭, 키 입력을 기록하고 때때로 화면을 캡처해 메타의 AI 모델 학습 데이터로 활용했다. 노출된 자료에는 사적인 대화 내용, 업무 평가 데이터, 음성 전사 기록 등 민감한 정보가 포함된 것으로 알려졌다.

메타 대변인 트레이시 클레이턴은 "이 프로그램은 개인정보 보호 장치를 충분히 갖추고 설계됐으며, 현재까지 직원이 데이터를 부적절하게 열람했다는 증거는 없지만 조사를 위해 잠정 중단한다"고 밝혔다. 다만 중단 기간이나 재개 여부, 재개 시 형태에 대해서는 구체적으로 밝히지 않았다.

<div class="article-stats">
<strong>도입 시점</strong> 2026년 4월<br/>
<strong>중단 시점</strong> 2026년 6월 22일<br/>
<strong>대상</strong> 미국 소재 직원 전체<br/>
<strong>노출 범위</strong> 사내 전 직원 열람 가능 상태
</div>

## 정리해고 시점과 맞물린 반발

MCI는 도입 초기부터 사내 반발이 거셌다. 직원들은 자신의 업무 활동을 학습 삼아 만들어진 AI가 결과적으로 자신들의 일자리를 대체할 수 있다는 점에 우려를 표했고, 이런 긴장은 마침 회사의 인력 감축 시기와 겹치면서 더욱 증폭됐다. 보안 문제뿐 아니라 감시 자체에 대한 거부감도 상당했다는 점에서, 이번 중단은 단순한 기술적 사고 수습을 넘어 조직 내 신뢰 문제로 이어질 가능성이 있다.

| 구분 | 내용 |
|---|---|
| 프로그램명 | Model Capability Initiative (MCI) |
| 수집 데이터 | 마우스 움직임, 클릭, 키 입력, 화면 캡처 |
| 용도 | 메타 AI 모델 학습 데이터 확보 |
| 노출 사고 | 민감 직원 데이터 전사 열람 가능 |
| 조치 | 프로그램 잠정 중단, 조사 착수 |

<div class="article-callout tip">
기업 IT·보안 담당자라면 내부 AI 학습 데이터 수집 도구를 설계할 때 접근 권한을 최소 권한 원칙으로 엄격히 분리하고, 수집 단계부터 익명화·마스킹을 적용해 노출 사고 자체를 원천적으로 차단하는 구조를 우선 검토해야 한다.
</div>

<div class="article-callout info">
직원 키 입력과 화면을 기록해 식별 가능한 개인 데이터를 처리하는 방식은 유럽 GDPR과 정면으로 충돌할 가능성이 높다. GDPR은 개인정보 처리에 높은 기준을 요구하며, 고용 관계에서의 동의는 권력 불균형으로 인해 법적으로 취약하다고 본다.
</div>

## 의미와 전망

이번 사건은 AI 기업들이 자사 모델을 고도화하기 위해 내부 직원의 행동 데이터까지 학습에 활용하는 흐름이 확산되는 가운데, 그 이면의 보안·윤리적 리스크를 적나라하게 드러낸 사례다. 메타는 재개 여부를 밝히지 않은 채 조사를 이어가고 있으며, 유사한 내부 데이터 수집 프로그램을 운영 중인 다른 빅테크 기업들에도 경각심을 불러일으킬 것으로 보인다.

<div class="article-keypoints">
<ul>
<li>메타, AI 학습용 직원 마우스·키 입력 추적 프로그램 'MCI' 잠정 중단</li>
<li>민감 직원 데이터가 전 직원에게 노출된 사실이 드러나며 조사 착수</li>
<li>정리해고 시기와 겹쳐 직원 반발이 거셌던 프로그램</li>
<li>GDPR 등 개인정보 보호 규제와의 충돌 우려도 제기</li>
</ul>
</div>

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
&middot; <a href="https://www.engadget.com/2199458/meta-is-pausing-employee-tracking-program-after-it-let-the-whole-company-see-sensitive-data/" target="_blank" rel="noopener">Engadget — 권한 설정 오류로 전사 열람 가능했던 경위</a><br/>
&middot; <a href="https://thenextweb.com/news/meta-pauses-mouse-tracking-data-security" target="_blank" rel="noopener">The Next Web — 마우스 추적 프로그램 중단과 데이터 보안 쟁점</a><br/>
&middot; <a href="https://www.ghacks.net/2026/06/23/meta-pauses-employee-mouse-tracking-ai-training-program-after-internal-data-exposure/" target="_blank" rel="noopener">gHacks — MCI 프로그램 개요와 수집 데이터 범위</a><br/>
</div>
