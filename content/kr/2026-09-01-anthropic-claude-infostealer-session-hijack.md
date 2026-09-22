---
title: "Anthropic, 인포스틸러에 세션 탈취당한 Claude 사용자 강제 로그아웃"
summary: "Vidar·Lumma·RedLine 등 인포스틸러 악성코드가 사용자 PC에서 Claude 로그인 세션 쿠키를 훔쳐 유료 사용량을 무단 소진했다. Anthropic은 피해 계정을 강제 로그아웃하고 저장된 결제수단을 제거한 뒤 부정 청구를 환불했다. 2FA를 우회하는 '세션 절도'가 새로운 위협으로 부상했다."
category: "hot-issue"
date: "2026-09-01"
draft: true
readingTime: 5
tags: ["보안", "Anthropic", "인포스틸러", "세션하이재킹"]
---

<div class="article-tldr">
사용자 PC에 감염된 범용 인포스틸러 악성코드가 브라우저에 저장된 Claude 로그인 세션 쿠키를 탈취해, 비밀번호나 2FA 없이 계정에 침입하고 유료 사용량을 무단으로 소진시켰다. Anthropic은 피해 계정을 강제 로그아웃해 탈취된 세션을 무효화하고, 저장된 결제수단을 제거한 뒤 부정 청구를 환불했다. 회사는 "이 악성코드가 Claude와 관련되거나 Claude를 통해 설치됐다고 볼 근거가 없다"며, 문제의 원인은 플랫폼이 아닌 사용자 기기의 감염이라고 강조했다.
</div>

Anthropic이 인포스틸러(정보 탈취형) 악성코드에 로그인 세션을 도난당한 Claude 사용자들을 자사 계정에서 강제 로그아웃시키기 시작했다. 회사는 지난주 피해 사용자들에게 보낸 이메일에서, 이 캠페인이 사용자 본인의 컴퓨터에 설치된 악성코드에서 비롯됐으며 Claude 플랫폼 자체의 침해가 아니라고 밝혔다.

## 무엇이 도난당했나

Anthropic이 이메일에서 지목한 악성코드는 특정 표적형이 아닌 범용 인포스틸러다. 윈도우에서는 Vidar, Lumma(LummaC2), StealC, RedLine, Acreed가, 소수의 맥에서는 Atomic Stealer(AMOS)가 확인됐다. 회사는 "비공식 다운로드나 악성 앱과 함께 조용히 유입돼, 저장된 비밀번호·브라우저 로그인 쿠키·로컬 앱 자격증명을 복사한다"며 "당신의 Claude 세션도 그렇게 수집된 여러 항목 중 하나였을 가능성이 크다"고 설명했다.

<div class="article-stats">
<strong>확인된 악성코드(윈도우)</strong> Vidar · Lumma(LummaC2) · StealC · RedLine · Acreed<br/>
<strong>확인된 악성코드(맥)</strong> Atomic Stealer(AMOS), 소수<br/>
<strong>탈취 대상</strong> 브라우저 세션 쿠키 · 저장된 비밀번호 · 로컬 자격증명<br/>
<strong>Anthropic 대응</strong> 강제 로그아웃 + 결제수단 제거 + 부정 청구 환불
</div>

## 왜 2FA가 무력화됐나

핵심은 '세션 절도(session theft)'가 '자격증명 절도'를 대체하고 있다는 점이다. 2단계 인증(2FA)은 로그인 시점을 보호하지만, 일단 로그인이 끝나면 사이트는 브라우저에 세션 쿠키를 발급해 사용자가 클릭할 때마다 재인증하지 않도록 한다. 인포스틸러는 바로 이 쿠키를 복사하며, 이를 '재생(replay)'하는 공격자는 이미 로그인된 사용자로 취급된다. 즉 비밀번호를 몰라도, 2FA를 깨지 않아도 계정에 그대로 들어올 수 있다.

공격자들은 이렇게 확보한 접근으로 피해자의 유료 사용량 할당량을 소진시켰다. Anthropic은 비정상 사용 패턴을 탐지해 강제 로그아웃, 결제수단 제거, 부정 청구 환불로 대응했다.

## 피해자가 해야 할 조치

Anthropic은 "로그아웃은 탈취된 세션을 차단하지만 악성코드를 제거하지는 않는다"며, 무엇보다 먼저 악성코드를 검사·제거하라고 권고했다. 그 다음 순서로 다음을 권한다.

| 순서 | 조치 |
|---|---|
| 1 | PC에서 악성코드 검사 및 제거 (최우선) |
| 2 | Claude에 쓰는 이메일 계정의 비밀번호 변경 + 2FA 활성화 |
| 3 | 브라우저에 저장한 비밀번호 갱신, 카드 명세서 확인 |
| 4 | 계정 사용을 이어갈 경우에만 결제수단 재등록 |
| 5 | 다른 온라인 서비스의 활성 세션도 로그아웃 후 재로그인해 무효화 |

<div class="article-callout tip">
결제수단은 반드시 악성코드를 완전히 제거한 뒤에만 다시 등록하라. 감염이 남아 있으면 재등록한 카드 정보가 또다시 탈취될 수 있다.
</div>

## 의미와 전망

이번 사건은 AI 구독 서비스가 인포스틸러의 새로운 수익화 표적이 됐음을 보여준다. 한 피해자는 러시아 지하 포럼에서 내려받은 불법 복제 게임에서 감염이 시작됐다고 밝혔다. Anthropic은 "이 악성코드가 Claude와 관련되거나 Claude를 통해 설치됐다고 볼 근거가 없으며, 휴대폰·태블릿은 영향받지 않은 것으로 보인다"고 밝혔다. 다만 이번 캠페인을 빌미로 Anthropic을 사칭하는 모방 이메일도 나올 수 있어, 사용자들은 공식 안내와 피싱을 구분하는 주의가 필요하다.

<div class="article-callout info">
<strong>관련 자료 · 공식 출처</strong><br/>
<a href="https://www.helpnetsecurity.com/2026/08/31/claude-accounts-compromised-through-infostealer/" target="_blank" rel="noopener">Help Net Security — Anthropic locks out Claude users after infostealers hijack login sessions</a><br/>
<a href="https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-warns-infostealer-malware-is-hijacking-claude-sessions-to-drain-usage/" target="_blank" rel="noopener">BleepingComputer — Anthropic warns infostealer malware is hijacking Claude sessions to drain usage</a><br/>
<a href="https://www.securityweek.com/anthropic-warns-claude-users-of-infostealer-malware-infections/" target="_blank" rel="noopener">SecurityWeek — Anthropic Warns Claude Users of Infostealer Malware Infections</a><br/>
<a href="https://securityaffairs.com/198166/ai/infostealers-are-hijacking-claude-sessions-and-draining-subscriptions.html" target="_blank" rel="noopener">Security Affairs — Infostealers Are Hijacking Claude Sessions and Draining Subscriptions</a>
</div>

<div class="article-keypoints">
<ul>
<li>범용 인포스틸러(Vidar·Lumma·StealC·RedLine·Acreed, 맥은 AMOS)가 사용자 PC에서 Claude 세션 쿠키를 탈취해 유료 사용량을 무단 소진했다.</li>
<li>세션 쿠키 재생으로 비밀번호·2FA를 우회하는 '세션 절도'가 자격증명 절도를 대체하는 새 위협으로 부상했다.</li>
<li>Anthropic은 강제 로그아웃·결제수단 제거·부정 청구 환불로 대응했고, 원인은 플랫폼이 아닌 사용자 기기 감염이라고 강조했다.</li>
<li>피해자는 악성코드 제거를 최우선으로 하고, 그 뒤에야 비밀번호 변경·2FA·결제수단 재등록을 진행해야 한다.</li>
</ul>
</div>
