---
title: "TypeScript 7.0 RC 공개...컴파일러를 Go로 통째로 갈아엎자 빌드가 10배 빨라졌다"
summary: "마이크로소프트가 TypeScript 7.0 릴리스 후보(RC)를 공개했다. 14년 만에 컴파일러 자체를 JavaScript에서 Go로 포팅한 결과, VS Code 1.5M줄 코드베이스의 타입 체크 시간이 77.8초에서 7.5초로 줄었다."
category: "dev-trend"
date: "2026-06-20"
readingTime: 5
tags: ["TypeScript", "마이크로소프트", "컴파일러"]
---

<div class="article-tldr">
<strong>TL;DR</strong> 마이크로소프트가 6월 18일 TypeScript 7.0 릴리스 후보(RC)를 공개했다. 핵심은 컴파일러 자체를 JavaScript에서 Go로 새로 포팅한 것으로, 네이티브 코드 실행과 공유 메모리 병렬 처리를 결합해 평균 10배 빠른 타입 체크 속도를 달성했다. Bloomberg, Figma, Notion, Vercel 등이 1년 넘게 사전 테스트에 참여했으며, 정식 출시는 한 달 내로 예정돼 있다.
</div>

TypeScript는 2010년 마이크로소프트가 JavaScript에 정적 타입을 더하기 위해 만든 언어다. 지금까지 컴파일러(`tsc`)는 TypeScript 자신으로 작성돼 JavaScript로 트랜스파일된 뒤 Node.js 위에서 실행됐다. 이 방식은 V8 JIT 워밍업 오버헤드와 싱글 스레드 한계라는 두 가지 근본적인 제약을 안고 있었다. TypeScript 7.0은 이 구조를 완전히 버리고 컴파일러, 언어 서비스, 툴링 전체를 Go로 다시 작성했다. 다만 "재작성"이 아니라 "포팅"이라는 점을 마이크로소프트는 강조한다. 기존 타입 체크 로직을 그대로 옮겨왔기 때문에 동작 의미론(semantics)은 TypeScript 6.0과 동일하게 유지된다.

성능 개선의 근거는 두 가지로 나뉜다. 먼저 네이티브 바이너리로 실행되면서 Node.js/V8의 JIT 워밍업 오버헤드가 사라져 약 3~4배 빨라진다. 여기에 Go의 고루틴(goroutine)을 활용한 공유 메모리 병렬 처리가 더해져 추가로 2~3배가 붙는다. 두 효과가 누적되면서 대형 코드베이스일수록 체감 속도 차이가 커진다. 마이크로소프트는 1년 넘는 기간 동안 Bloomberg, Canva, Figma, Google, Lattice, Linear, Miro, Notion, Slack, Vanta, Vercel, VoidZero 등과 사전 버전을 테스트했고, 피드백은 압도적으로 긍정적이었다고 밝혔다.

가장 눈에 띄는 수치는 VS Code 자체 코드베이스(150만 줄) 테스트다. 전체 `tsc` 실행 시간이 77.8초에서 7.5초로 줄어 10.4배 빨라졌다. 에디터에서 프로젝트를 불러오는 시간도 9.6초에서 1.2초로 약 8배 단축됐는데, 이는 언어 서버(language server) 자체가 Go 네이티브로 바뀌었기 때문이다. 메모리 사용량도 JavaScript 버전 대비 절반 수준으로 줄었으며, 마이크로소프트는 메모리 최적화는 아직 본격적으로 손대지 않았다고 덧붙였다. 언어 서버 명령 실패율도 6.0 대비 20배 이상 줄었다는 설명이다.

<div class="article-stats">

| 지표 | TypeScript 6.0 | TypeScript 7.0 RC |
|---|---|---|
| VS Code(150만 줄) 빌드 시간 | 77.8초 | 7.5초 |
| 에디터 프로젝트 로드 시간 | 9.6초 | 1.2초 |
| 메모리 사용량 | 기준치 | 약 50% |
| 언어 서버 명령 실패율 | 기준치 | 약 1/20 |

</div>

도입 방법은 간단하다. `npm install -D typescript@rc`로 설치하면 기존 버전과 충돌 없이 나란히 사용할 수 있다. 패키지에는 `tsc` 바이너리가 그대로 포함돼 있어 기존 빌드 스크립트를 수정하지 않아도 된다. 단, 프로그래매틱 API(컴파일러 API를 직접 호출하는 도구·플러그인)를 쓰는 프로젝트는 7.1까지 기다리는 것이 안전하다는 게 마이크로소프트의 권고다. 호환성을 위한 `@typescript/typescript6` 패키지도 별도 제공되며, 여기에는 `tsc6` 바이너리와 6.0 API가 그대로 들어 있어 과도기 동안 양쪽을 함께 쓸 수 있다.

<div class="article-callout tip">
<strong>실무 팁</strong> 대형 모노레포나 CI 파이프라인을 운영 중이라면 RC를 별도 브랜치에서 먼저 벤치마크해 보는 것을 권한다. 실제로 베타 테스트에 참여한 팀 중 하나는 GitHub Actions의 타입 체크 작업 시간이 줄면서 월 800달러의 러너 비용을 절감했다고 보고했다.
</div>

<div class="article-callout info">
<strong>참고로</strong> 속도 개선폭은 코드베이스 규모에 비례한다. 단일 파일짜리 소규모 프로젝트는 체감 효과가 작고, 파일 수가 많은 대형 프로젝트일수록 병렬 처리 효과가 누적돼 개선폭이 커진다.
</div>

<div class="article-keypoints">
<strong>핵심 포인트</strong>
<ul>
<li>TypeScript 7.0은 컴파일러·언어 서비스·툴링을 JavaScript에서 Go로 전면 포팅한 버전</li>
<li>재작성이 아닌 포팅이라 기존 타입 체크 동작은 6.0과 동일하게 유지</li>
<li>VS Code 코드베이스 기준 빌드 시간이 10배 이상, 에디터 로드 시간이 8배 단축</li>
<li>정식 출시(GA)는 RC 공개로부터 약 한 달 후로 예정</li>
</ul>
</div>

정식 출시 시점은 6월 18일 RC 공개로부터 한 달 이내로 잡혀 있다. 마이크로소프트는 RC 이후 변경 사항을 회귀 버그 수정 위주로 제한하겠다고 밝혀, 동작 방식 자체는 이미 확정된 것으로 봐도 무방하다. 14년 만에 자기 자신을 부트스트랩 언어에서 Go로 옮긴 이번 변화는 TypeScript 생태계 전체의 빌드·CI 비용 구조를 바꿀 잠재력이 있다는 평가가 나온다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
&middot; <a href="https://devblogs.microsoft.com/typescript/" target="_blank" rel="noopener">TypeScript 공식 블로그</a><br/>
&middot; <a href="https://github.com/microsoft/typescript-go" target="_blank" rel="noopener">TypeScript Go 포팅 리포지토리</a><br/>
&middot; <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">TypeScript 공식 사이트</a><br/>
</div>
