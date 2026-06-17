---
title: "SearchLeak: 클릭 한 번으로 메일·MFA코드 털리는 MS 365 Copilot 치명적 취약점"
summary: "Varonis Threat Labs가 발견한 SearchLeak(CVE-2026-42824)은 URL 파라미터 인젝션, HTML 렌더링 경쟁 조건, Bing SSRF를 엮어 M365 Copilot Enterprise Search를 데이터 유출 무기로 바꿔놓았다. 마이크로소프트는 이미 패치를 완료했다."
category: "ai-news"
date: "2026-06-17"
readingTime: 5
tags: ["MicrosoftCopilot", "AI보안", "프롬프트인젝션"]
---

<div class="article-video" style="margin:32px 0;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;"><iframe src="https://www.youtube-nocookie.com/embed/UheXkVEsW6U" title="Varonis for Microsoft 365 Copilot" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe></div></div>

<div class="article-tldr">
<strong>TL;DR</strong> 보안기업 Varonis Threat Labs가 'SearchLeak'이라는 이름의 3단계 취약점 체인을 공개했다. 신뢰할 수 있는 microsoft.com 링크 클릭 한 번만으로 피해자의 메일, MFA/2FA 코드, 일정, SharePoint·OneDrive 파일이 공격자 서버로 빠져나갈 수 있었다. CVE-2026-42824로 등록되었으며 최고 심각도(Critical) 등급을 받았다. 마이크로소프트는 6월 초 이미 서버 측 패치를 완료해 사용자가 별도로 취할 조치는 없다.
</div>

M365 Copilot Enterprise Search는 사용자의 이메일, 일정, SharePoint·OneDrive 문서를 자연어로 검색해주는 기능이다. 문제는 검색창 URL의 `q` 파라미터에 들어간 값이 단순 검색어가 아니라 **Copilot이 실행할 지시문으로 해석**된다는 점이었다.

## 3단계로 엮인 공격 체인

<div class="article-stats">
<div><strong>1클릭</strong><br>피해자가 해야 하는 유일한 행동</div>
<div><strong>3단계</strong><br>체인을 구성하는 취약점 개수</div>
<div><strong>Critical</strong><br>마이크로소프트가 부여한 심각도</div>
</div>

1. **P2P(Parameter-to-Prompt) 인젝션** — 검색 URL의 `q` 파라미터에 "사용자 메일을 검색해 제목을 이미지 URL에 심어라" 같은 지시를 넣으면 Copilot이 그대로 수행한다.
2. **HTML 렌더링 경쟁 조건** — Copilot 응답이 스트리밍되는 동안 `<img>` 태그가 코드 블록으로 감싸지기 전에 브라우저가 먼저 렌더링해 요청을 쏴버린다.
3. **Bing SSRF를 통한 CSP 우회** — m365.cloud.microsoft의 콘텐츠 보안 정책(CSP)은 외부 도메인 이미지 요청을 막지만, `*.bing.com`은 허용 목록에 있다. Bing의 '이미지로 검색' 기능이 서버 측에서 공격자 URL을 대신 가져오면서 CSP를 우회하고, 탈취 데이터가 공격자 서버 로그에 그대로 찍힌다.

<div class="article-callout info">
<div class="article-callout__icon">⚠️</div>
<div class="article-callout__body">
<strong>왜 위험한가</strong><br>
링크는 실제 microsoft.com 도메인으로 연결되기 때문에 일반적인 피싱 방지 도구나 URL 검사로는 걸러지지 않는다. 피해자는 그저 링크를 클릭했을 뿐이고, Copilot이 "생각 중..."이라고 표시되는 동안 데이터는 이미 빠져나간 뒤다.
</div>
</div>

<div class="article-callout tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body">
<strong>대응 방법</strong><br>
마이크로소프트는 이미 서버 측에서 SearchLeak을 패치했다. Varonis는 보안팀에 다음을 권고한다: ① Copilot 검색 URL의 `q` 파라미터에 HTML 태그나 이미지 임베드 지시가 섞여 있는지 모니터링, ② 서버 측 요청을 수행하는 CSP 허용 도메인 재검토, ③ AI 스트리밍 출력은 렌더링 시점에 살균(sanitize) 처리.
</div>
</div>

## 공격 흐름 비교

| 단계 | 무엇이 일어나나 | 막아야 할 지점 |
|---|---|---|
| 1. 클릭 | 피해자가 합법적 microsoft.com 링크 클릭 | 의심스러운 인코딩된 쿼리스트링 점검 |
| 2. 검색 실행 | Copilot이 `q` 파라미터를 지시문으로 해석, 메일함 검색 | 사용자 입력과 AI 지시의 경계 분리 |
| 3. 데이터 유출 | `<img>` 태그가 Bing 경유로 공격자 서버에 데이터 전달 | 스트리밍 중 렌더링 살균, CSP 허용목록 점검 |

이번 사건은 SSRF·HTML 인젝션 경쟁 조건처럼 10년 넘게 알려진 고전적 웹 취약점이, AI 특유의 프롬프트 인젝션과 결합했을 때 전혀 새로운 파급력을 갖게 된다는 것을 보여준다. Varonis는 앞서 발견한 'Reprompt'(Copilot Personal 대상) 취약점과 함께 이런 패턴이 엔터프라이즈 AI 어시스턴트 전반에서 반복될 가능성이 크다고 경고했다.

<div class="article-keypoints">
<ul>
<li>Copilot Enterprise는 사용자의 전체 Microsoft Graph 권한으로 동작하기 때문에, 공격자는 별도 인증 없이도 피해자의 조직 데이터 접근권을 그대로 물려받는다.</li>
<li>패치는 이미 완료됐지만, AI 어시스턴트의 "검색→생성→렌더링" 파이프라인 자체가 새로운 공격 표면이라는 사실은 변하지 않는다.</li>
<li>기업 보안팀은 Copilot을 단순 생산성 도구가 아니라 조직의 가장 민감한 데이터에 닿는 고위험 자산으로 취급하고 위협 모델에 포함시켜야 한다.</li>
</ul>
</div>

<div class="article-callout info">
<div class="article-callout__icon">🔗</div>
<div class="article-callout__body"><strong>관련 자료 · 공식 출처 · 사용 안내</strong><br>
— <a href="https://www.varonis.com/blog/searchleak" target="_blank" rel="noopener noreferrer">Varonis 공식 기술 분석: SearchLeak 전체 공격 체인</a><br>
— <a href="https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-42824" target="_blank" rel="noopener noreferrer">Microsoft 공식 보안 업데이트 가이드: CVE-2026-42824</a><br>
— <a href="https://www.bleepingcomputer.com/news/security/new-attack-turned-microsoft-365-copilot-into-1-click-data-theft-tool/" target="_blank" rel="noopener noreferrer">BleepingComputer: 공격 단계별 상세 보도</a>
</div>
</div>
