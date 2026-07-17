---
title: "알리바바 Qwen3.7-Plus, 화면·터미널·클라우드를 동시에 조작하는 컴퓨터 사용 AI 에이전트 출시"
summary: "알리바바가 GUI·CLI·코드를 하나의 에이전트 루프로 통합한 Qwen3.7-Plus를 공개했다. ScreenSpot Pro 79.0점, Terminal-Bench 70.3점을 기록하며 앤트로픽·오픈AI·마이크로소프트의 컴퓨터 사용 경쟁에 본격 합류했다."
category: "ai-news"
date: "2026-06-07"
readingTime: 5
tags: ["Qwen3.7-Plus", "컴퓨터사용AI", "알리바바", "멀티모달에이전트", "AI에이전트"]
---

<div class="article-tldr">
알리바바 통이첸원(Tongyi Qianwen) 팀이 2026년 6월 6일 Qwen3.7-Plus를 출시했다. 이 모델은 화면 인식·브라우저 자동화·터미널 작업·클라우드 콘솔 조작을 단일 에이전트 프레임워크 안에서 수행하는 <strong>멀티모달 인터랙티브 하이브리드 에이전트</strong>다. 11시간 연속 실행으로 1,000회 이상의 에이전트 호출을 통해 10,000줄 이상의 코드를 생성하는 장시간 에이전트 내구성을 입증했다.
</div>

## 컴퓨터 사용 AI란 무엇인가

기존 LLM은 텍스트를 생성하는 데 그쳤다면, 컴퓨터 사용(Computer-Use) AI는 실제 화면을 보고 클릭·타이핑·스크롤 등의 작업을 수행한다. 2024년 10월 앤트로픽이 Claude 3.5 Sonnet에 처음 도입한 이후 오픈AI(Operator), 마이크로소프트(Fara1.5) 등 주요 AI 기업이 경쟁적으로 합류하고 있다.

Qwen3.7-Plus는 이 경쟁에 **시각 인식 + 코딩 + 브라우저 제어 + 클라우드 콘솔 조작**을 하나로 묶은 통합 에이전트 솔루션으로 뛰어들었다.

<div class="article-stats">
  <div class="stat-item">
    <span class="stat-number">79.0</span>
    <span class="stat-label">ScreenSpot Pro 점수 (화면 그라운딩 벤치마크)</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">70.3</span>
    <span class="stat-label">Terminal-Bench 점수 (터미널 작업 벤치마크)</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">10,000+</span>
    <span class="stat-label">11시간 연속 에이전트 실행 중 생성된 코드 줄 수</span>
  </div>
  <div class="stat-item">
    <span class="stat-number">$0.40</span>
    <span class="stat-label">입력 토큰 100만 개당 가격 (출력 $2.40/M)</span>
  </div>
</div>

## 핵심 기능: 무엇을 할 수 있나

### 화면 인식과 GUI 조작
Qwen3.7-Plus는 네이티브 비전 입력과 스크린샷 인식 기능을 통해 버튼·필드·터미널 상태를 정확히 파악한다. 단순히 화면을 읽는 수준을 넘어 클릭·타이핑·드래그 등 실제 조작 명령을 에이전트 호출로 변환한다.

### macOS 네이티브 앱 재현 데모
Qwen 팀이 공개한 데모에서 Qwen3.7-Plus는 macOS 주식(Stocks) 앱 인터페이스를 분석한 후 SwiftUI 코드를 생성하고, API를 연결하며, 컴파일 후 10개의 기능 테스트를 자동으로 통과했다. 인터페이스 분석부터 배포 검증까지 전 과정을 에이전트 단독으로 수행한 것이다.

### 클라우드 콘솔 자동화
Chrome용 Qwen 확장 프로그램을 통해 사용자 허가 하에 클라우드 가상 서버 인스턴스 선택 같은 클라우드 작업을 자동화한다. 이는 개발자뿐 아니라 비개발 직군의 클라우드 관리 효율화로 이어질 수 있다.

<div class="article-callout tip">
**개발자 참고**: Qwen3.7-Plus는 앤트로픽 API 프로토콜을 지원하며 Claude Code 개발 도구, OpenClaw 에이전트 게이트웨이, 알리바바의 Qwen Code와 호환된다. 기존 앤트로픽 기반 워크플로를 그대로 활용할 수 있다.
</div>

## 경쟁 구도 비교

| 모델 | 출시사 | 주요 능력 | 특징 |
|------|--------|-----------|------|
| Claude (Computer Use) | Anthropic | 화면·마우스·키보드 | 최초 도입 (2024.10) |
| Operator | OpenAI | 브라우저 자동화 | ChatGPT 통합 |
| Fara1.5 (4B/9B/27B) | Microsoft Research | 브라우저 에이전트 | 경량 멀티사이즈 |
| Qwen3.7-Plus | Alibaba | GUI+CLI+코딩+클라우드 | 통합 하이브리드 |

## 장시간 에이전트 내구성: 왜 중요한가

단순 작업 하나를 수행하는 에이전트와 11시간 동안 1,000회 이상 도구를 호출하며 복잡한 앱을 빌드하는 에이전트는 근본적으로 다른 기술 요구사항을 갖는다. 장시간 실행 중 발생하는 에러 복구, 컨텍스트 유지, 의존성 관리 능력이 실제 업무 자동화의 핵심 지표다.

Qwen3.7-Plus가 공개한 어휘 앱 빌드 데모(11시간, 1,000+ 에이전트 호출)는 이 내구성을 입증하려는 시도로 해석된다.

<div class="article-callout info">
**가격 비교**: Qwen3.7-Plus의 입력 $0.40/M · 출력 $2.40/M은 동사의 언어 전용 모델 Qwen3.7-Max(입력 $2.50/M · 출력 $7.50/M)보다 크게 저렴하다. 비전 능력을 추가하면서도 비용 경쟁력을 확보한 점이 주목할 만하다.
</div>

## 한계와 과제

알리바바의 발표는 상당 부분 자사 주장(attributed claims)에 기반하며, 공개 사양서나 독립 검증 벤치마크가 아직 부족하다. 실제 장시간 에이전트 체인에서 발생하는 오류 누적(error compounding) 문제는 데모 성공만으로 해결됐다고 보기 어렵다. 특히 복잡한 멀티스텝 워크플로에서의 실 업무 적용성은 추가 검증이 필요하다.

<div class="article-keypoints">

## 핵심 포인트

- **통합 에이전트**: GUI, CLI, 코딩, 클라우드 콘솔을 단일 루프에서 처리
- **벤치마크**: ScreenSpot Pro 79.0, Terminal-Bench 70.3으로 경쟁력 있는 수치
- **가격 경쟁력**: 입력 $0.40/M으로 자사 고급 모델 대비 6분의 1 수준
- **호환성**: Anthropic API 프로토콜 지원으로 기존 Claude 워크플로 재사용 가능
- **내구성 입증**: 11시간·1,000+ 호출의 장시간 에이전트 실행 데모 공개
- **독립 검증 필요**: 자사 주장 기반 수치에 대한 제3자 검증 아직 부족

</div>

## 시장에 미치는 영향

컴퓨터 사용 AI 시장은 2024년 말부터 본격화됐지만, 대부분의 구현이 **브라우저 자동화** 수준에 머물렀다. Qwen3.7-Plus는 앱·터미널·코딩·클라우드 콘솔까지 영역을 확장하며 이 카테고리의 기준점을 높였다. 특히 앤트로픽 API 프로토콜 호환은 기존 Claude 기반 에이전트 파이프라인에 Qwen을 대체재 혹은 보완재로 즉시 투입할 수 있다는 의미로, 엔터프라이즈 채택을 가속화할 수 있다.


<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
· <a href="https://qwenlm.github.io/" target="_blank" rel="noopener">Qwen 공식 블로그 (QwenLM)</a><br/>
· <a href="https://github.com/QwenLM" target="_blank" rel="noopener">Qwen 공식 GitHub (QwenLM)</a><br/>
· <a href="https://huggingface.co/Qwen" target="_blank" rel="noopener">Qwen 공식 Hugging Face</a><br/>
</div>
