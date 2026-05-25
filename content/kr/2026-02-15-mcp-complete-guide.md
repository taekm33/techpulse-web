---
title: "MCP(Model Context Protocol) 완전 가이드 — AI와 도구를 연결하는 표준"
summary: "Anthropic이 2024년 11월 공개한 MCP(Model Context Protocol)는 AI 모델과 외부 도구를 일관된 방식으로 연결하는 오픈 표준이다. 파편화된 AI 통합 문제를 해결하고, 개발자가 직접 서버를 만들어 생태계를 확장할 수 있다."
category: "dev-trend"
date: "2026-02-15"
tags: ["MCP", "ModelContextProtocol", "Anthropic", "AI도구연결", "개발자가이드"]
featured: false
readingTime: 12
---

## MCP란 무엇인가

**MCP(Model Context Protocol)**는 Anthropic이 2024년 11월 공개한 오픈 표준 프로토콜이다. 핵심 목표는 단순하다: AI 모델이 외부 데이터 소스, 도구, 서비스와 표준화된 방식으로 통신할 수 있도록 하는 것이다.

비유하자면, MCP는 **AI 세계의 USB-C**다. 이전에는 기기마다 다른 충전 케이블이 필요했던 것처럼, AI 모델도 각 서비스(GitHub, Slack, 데이터베이스 등)마다 별도의 커스텀 통합 코드가 필요했다. MCP는 이 혼란을 단 하나의 표준 인터페이스로 해결한다.

> "MCP는 AI 애플리케이션을 위한 공통 언어다. 모델 개발자와 툴 개발자 모두가 같은 방언을 쓰게 되면, 생태계 전체의 속도가 달라진다." — Anthropic 엔지니어링 블로그, 2024.11

MCP는 완전한 오픈소스(MIT 라이선스)로 공개되어 있으며, 특정 모델이나 플랫폼에 종속되지 않는다. 사양 문서, SDK, 레퍼런스 서버 구현체 모두 GitHub에서 확인할 수 있다.

<div class="article-tldr">
<div class="article-tldr__label">TL;DR</div>
<p>MCP(Model Context Protocol)는 Anthropic이 2024년 11월 공개한 오픈 표준으로, AI 모델과 GitHub·Slack·데이터베이스 등 외부 도구를 단일 인터페이스로 연결한다. 개발자는 Python 또는 TypeScript SDK로 직접 MCP 서버를 만들 수 있으며, Claude Desktop·Cursor·VS Code 등 주요 AI 도구가 이미 정식 지원한다. 한 번 만든 서버는 어떤 AI 모델과도 재사용 가능해, 파편화된 AI 통합 문제를 근본적으로 해결한다.</p>
</div>

---

## MCP 이전의 문제: 파편화된 AI 통합

MCP가 등장하기 전, AI 도구 통합은 사실상 각자도생이었다.

- **ChatGPT 플러그인**은 OpenAI 전용 포맷으로 작성해야 했다.
- **Claude의 Tool Use**는 별도의 JSON 스키마 정의가 필요했다.
- **Gemini의 Function Calling**은 또 다른 방식이었다.

개발자 입장에서는 같은 기능(예: GitHub 이슈 조회)을 모델마다 다르게 구현해야 했다. 기업 입장에서도 AI 솔루션이 바뀔 때마다 통합 코드를 전면 재작성해야 하는 비용이 발생했다. 결과적으로:

- 통합 코드가 중복 생산됨
- 유지보수 부담 급증
- AI 모델 전환 시 높은 락인(lock-in) 비용
- 소규모 팀은 복잡한 통합을 포기하는 경우도 발생

MCP는 이 문제를 **"한 번 만들면 모든 AI와 작동한다"**는 철학으로 해결한다.

<div class="article-stats">
<div class="article-stat"><div class="article-stat__v">2024.11</div><div class="article-stat__k">MCP 공개 시점</div></div>
<div class="article-stat"><div class="article-stat__v">MIT</div><div class="article-stat__k">오픈소스 라이선스</div></div>
<div class="article-stat"><div class="article-stat__v">15+</div><div class="article-stat__k">Anthropic 공식 서버 수</div></div>
<div class="article-stat"><div class="article-stat__v">8+</div><div class="article-stat__k">MCP 정식 지원 IDE/도구</div></div>
</div>

---

## MCP 아키텍처 심층 이해

### Host · Client · Server 삼자 구조

MCP는 세 가지 역할로 구성된 명확한 계층 구조를 가진다.

```
┌─────────────────────────────────────┐
│              Host 애플리케이션         │
│  (Claude Desktop, Cursor, IDE 등)   │
│                                     │
│   ┌─────────┐     ┌─────────┐      │
│   │ Client 1│     │ Client 2│      │
│   └────┬────┘     └────┬────┘      │
└────────│───────────────│────────────┘
         │ MCP Protocol  │
    ┌────▼────┐     ┌────▼────┐
    │ Server A│     │ Server B│
    │ (파일시스템)│   │ (GitHub) │
    └─────────┘     └─────────┘
```

**Host (호스트)**는 사용자가 직접 상호작용하는 애플리케이션이다. Claude Desktop, Cursor, Windsurf, 또는 직접 구축한 AI 챗 인터페이스가 여기에 해당한다. Host는 여러 개의 MCP Client를 관리하며, 각 Client를 통해 다수의 MCP Server에 연결할 수 있다. Host는 연결 수명 주기를 총괄하고, 보안 정책(어떤 서버를 허용할지)을 결정한다.

**Client (클라이언트)**는 Host 내부에 존재하는 컴포넌트로, 특정 MCP Server와 1:1 연결을 유지한다. MCP 프로토콜의 통신을 담당하며, 서버가 제공하는 도구(Tools), 리소스(Resources), 프롬프트(Prompts) 목록을 모델에게 전달한다. Client는 서버와의 연결 초기화(initialize 핸드셰이크)를 수행하고 프로토콜 버전 협상을 담당한다.

**Server (서버)**는 실제 기능을 제공하는 경량 프로세스다. 파일시스템 접근, GitHub API 호출, 데이터베이스 쿼리 등 구체적인 작업을 수행한다. 서버는 독립 프로세스로 실행되기 때문에 Host와 언어나 런타임이 달라도 무방하다. Python으로 만든 서버와 TypeScript로 만든 서버를 동시에 연결하는 것도 가능하다.

<div class="article-callout article-callout--info">
<div class="article-callout__icon">ℹ️</div>
<div class="article-callout__body"><strong>Host · Client · Server 역할 요약</strong><br>Host는 보안 정책과 연결 수명 주기를 총괄하고, Client는 개별 서버와 1:1 통신을 담당하며, Server는 실제 파일·API·DB 작업을 수행하는 독립 프로세스다. 세 역할의 분리 덕분에 서버를 언어에 구애받지 않고 구현할 수 있다.</div>
</div>

### Transport Layer: stdio vs HTTP SSE

MCP는 두 가지 전송 방식(Transport)을 정의한다.

**stdio (표준 입출력)**는 Host가 서버 프로세스를 직접 자식 프로세스(child process)로 실행하고, stdin/stdout 스트림을 통해 메시지를 주고받는 방식이다. 로컬 환경에서 가장 단순하고 안전하며, Claude Desktop이나 Cursor에서 기본으로 사용된다. 네트워크 포트를 열지 않으므로 보안 면에서 유리하다.

**HTTP + SSE (Server-Sent Events)**는 서버가 독립적인 HTTP 엔드포인트를 노출하고, 클라이언트가 HTTP 요청으로 메시지를 보내면 서버는 SSE 스트림으로 응답을 반환하는 방식이다. 원격 서버, 클라우드 배포, 다중 클라이언트 시나리오에 적합하다. 예를 들어 팀 내 공유 MCP 서버를 중앙 서버에 배포해 여러 개발자가 동시에 접속하는 구조가 가능하다.

| 구분 | stdio | HTTP SSE |
|---|---|---|
| 실행 위치 | 로컬 프로세스 | 로컬 또는 원격 서버 |
| 보안 | 높음 (네트워크 미노출) | 인증 레이어 필요 |
| 적합 사용처 | 개인 개발, 데스크탑 앱 | 팀 공유, 클라우드 배포 |
| 다중 클라이언트 | 불가 | 가능 |

### JSON-RPC 2.0 메시지 포맷

MCP의 모든 통신은 **JSON-RPC 2.0** 사양을 따른다. 세 가지 메시지 유형이 존재한다.

**Request (요청)**: 클라이언트가 서버에 특정 작업을 요청할 때 사용한다. `id` 필드가 포함되어 응답과 매핑된다.

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "get_weather",
    "arguments": { "city": "Seoul" }
  }
}
```

**Response (응답)**: 서버가 요청에 대한 결과를 반환할 때 사용한다. 성공 시 `result`, 실패 시 `error` 필드가 포함된다.

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "content": [{ "type": "text", "text": "Seoul: 맑음, 18°C" }]
  }
}
```

**Notification (알림)**: 응답이 필요 없는 단방향 메시지다. 서버가 로그를 스트리밍하거나 진행 상황을 보고할 때 활용한다.

이 표준 포맷 덕분에 MCP 서버는 어떤 언어로 구현되어도 동일한 방식으로 통신할 수 있다.

---

## MCP 핵심 기능 3가지 상세 설명

MCP Server는 세 가지 기본 기능 유형을 노출할 수 있다. 각각의 용도와 동작 방식을 이해하는 것이 MCP 서버 설계의 핵심이다.

### 1. Resources (리소스 읽기)

Resources는 AI 모델이 **읽기 전용으로 접근할 수 있는 데이터**를 정의한다. 파일, 데이터베이스 레코드, API 응답 스냅샷 등 모델에게 컨텍스트를 제공하는 모든 데이터가 여기에 해당한다.

각 리소스는 고유한 URI로 식별된다. 예를 들어 파일시스템 서버라면 `file:///home/user/project/README.md`, 데이터베이스 서버라면 `postgres://mydb/users/1234` 같은 형식이다.

```python
@app.list_resources()
async def list_resources():
    return [
        Resource(
            uri="file:///data/report.csv",
            name="월간 매출 보고서",
            mimeType="text/csv",
            description="2026년 1월 매출 데이터"
        )
    ]

@app.read_resource()
async def read_resource(uri: str):
    if uri == "file:///data/report.csv":
        content = open("/data/report.csv").read()
        return content
```

Resources는 모델이 작업 수행 전 필요한 배경 정보를 읽을 때 사용한다. Tools와 달리 사이드 이펙트(데이터 변경)가 없는 순수 읽기 작업이다.

<div class="article-callout article-callout--tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Resources vs Tools 구분법</strong><br>Resources는 읽기 전용(사이드 이펙트 없음), Tools는 실제 작업 수행(상태 변경 가능)이다. 서버 설계 시 데이터 조회는 Resources, 파일 쓰기·API 호출·DB 삽입 등 변경이 수반되는 작업은 Tools로 분리하면 보안과 권한 관리가 명확해진다.</div>
</div>

### 2. Tools (도구 실행)

Tools는 AI 모델이 **실제 작업을 수행**할 수 있는 함수다. 파일 쓰기, API 호출, 데이터베이스 삽입 등 상태를 변경하거나 외부 시스템과 상호작용하는 모든 작업이 해당된다. MCP에서 가장 핵심적인 기능 유형이다.

각 Tool은 이름, 설명, 입력 스키마(JSON Schema)를 정의한다. AI 모델은 이 스키마를 보고 어떤 인자를 어떤 형식으로 넘겨야 하는지 파악한다.

```python
@app.list_tools()
async def list_tools():
    return [
        Tool(
            name="create_github_issue",
            description="GitHub 저장소에 새 이슈를 생성합니다.",
            inputSchema={
                "type": "object",
                "properties": {
                    "repo": { "type": "string", "description": "저장소 이름 (예: owner/repo)" },
                    "title": { "type": "string", "description": "이슈 제목" },
                    "body": { "type": "string", "description": "이슈 본문 (마크다운)" }
                },
                "required": ["repo", "title"]
            }
        )
    ]
```

Host는 Tool 실행 전에 사용자에게 확인을 요청하는 승인 흐름을 구현할 수 있다. 이를 통해 AI가 민감한 작업(파일 삭제, 결제 등)을 무단으로 수행하는 것을 방지한다.

### 3. Prompts (프롬프트 템플릿)

Prompts는 자주 사용하는 **재사용 가능한 프롬프트 패턴**을 서버에 정의해두는 기능이다. 사용자나 Host 애플리케이션이 특정 프롬프트 템플릿을 이름으로 요청하면, 서버가 완성된 프롬프트를 반환한다.

예를 들어 코드 리뷰 서버라면 "pr_review"라는 프롬프트를 정의해두고, 사용자가 해당 프롬프트를 선택하면 PR 번호와 코드 diff가 자동으로 삽입된 완성된 리뷰 요청 메시지가 생성되는 식이다.

```python
@app.list_prompts()
async def list_prompts():
    return [
        Prompt(
            name="code_review",
            description="코드 변경사항에 대한 구조화된 리뷰를 수행합니다.",
            arguments=[
                PromptArgument(name="diff", description="리뷰할 코드 diff", required=True),
                PromptArgument(name="language", description="프로그래밍 언어", required=False)
            ]
        )
    ]
```

Prompts 기능은 팀 내 AI 사용 패턴을 표준화하고 공유하는 데 특히 유용하다.

---

## 주요 공식/커뮤니티 MCP 서버 목록

Anthropic과 커뮤니티가 공개한 MCP 서버 목록은 빠르게 늘고 있다. 아래는 2026년 초 기준으로 가장 널리 사용되는 서버들이다.

| 서버명 | 주요 기능 | 비고 |
|---|---|---|
| **filesystem** | 로컬 파일 읽기·쓰기·검색, 디렉터리 탐색 | Anthropic 공식 |
| **github** | 이슈·PR 조회 및 생성, 코드 검색, 파일 커밋 | Anthropic 공식 |
| **slack** | 채널 메시지 읽기·전송, DM, 파일 공유 | Anthropic 공식 |
| **google-drive** | 파일 검색, 문서 읽기, 스프레드시트 접근 | Anthropic 공식 |
| **postgres** | PostgreSQL 스키마 조회 및 SQL 쿼리 실행 | Anthropic 공식 |
| **sqlite** | SQLite DB 생성·조회·수정 | Anthropic 공식 |
| **brave-search** | Brave Search API 기반 실시간 웹 검색 | Anthropic 공식 |
| **puppeteer** | Chromium 브라우저 자동화, 스크린샷, 스크래핑 | Anthropic 공식 |
| **memory** | 대화 간 지식 저장소 (KV 구조, 지식 그래프) | Anthropic 공식 |
| **fetch** | URL 페이지 내용 가져오기, HTML→마크다운 변환 | Anthropic 공식 |
| **linear** | 이슈 조회·생성, 프로젝트 관리, 사이클 추적 | Linear 공식 |
| **notion** | 페이지·데이터베이스 읽기·쓰기, 검색 | Notion 공식 |
| **supabase** | Supabase DB 쿼리, Edge Function 배포, 로그 조회 | Supabase 공식 |
| **figma** | 디자인 컴포넌트 조회, 코드 연동, 에셋 추출 | Figma 공식 |
| **aws-kb-retrieval** | AWS Bedrock Knowledge Base 기반 RAG 검색 | 커뮤니티 |

서드파티 생태계도 급성장하고 있다. Jira, Sentry, Vercel, Cloudflare 등 주요 개발 인프라 플랫폼들이 공식 MCP 서버를 출시했으며, 커뮤니티 기여 서버는 수백 개에 달한다. [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) 같은 큐레이션 저장소에서 전체 목록을 확인할 수 있다.

---

## 직접 MCP 서버 만들기

MCP 서버는 Python 또는 TypeScript SDK를 사용해 빠르게 만들 수 있다. 아래는 실제로 동작하는 Python 예시다.

### 환경 설정

```bash
# Python 가상환경 생성 및 MCP SDK 설치
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install mcp
```

### Python 예시 — 날씨 조회 서버

```python
from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent
import httpx

app = Server("weather-server")

@app.list_tools()
async def list_tools():
    return [
        Tool(
            name="get_weather",
            description="도시 이름으로 현재 날씨를 조회합니다.",
            inputSchema={
                "type": "object",
                "properties": {
                    "city": {
                        "type": "string",
                        "description": "날씨를 조회할 도시 이름 (예: Seoul)"
                    }
                },
                "required": ["city"]
            }
        )
    ]

@app.call_tool()
async def call_tool(name: str, arguments: dict):
    if name == "get_weather":
        city = arguments["city"]
        # 실제 구현에서는 OpenWeatherMap 등 Weather API 호출
        async with httpx.AsyncClient() as client:
            # 예시: resp = await client.get(f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid=API_KEY")
            pass
        return [TextContent(type="text", text=f"{city}의 현재 날씨: 맑음, 18°C")]

async def main():
    async with stdio_server() as streams:
        await app.run(*streams)

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
```

### TypeScript 예시 — 계산기 서버

```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  { name: "calculator-server", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "calculate",
      description: "두 숫자의 사칙연산을 수행합니다.",
      inputSchema: {
        type: "object",
        properties: {
          a: { type: "number" },
          b: { type: "number" },
          op: { type: "string", enum: ["add", "sub", "mul", "div"] }
        },
        required: ["a", "b", "op"]
      }
    }
  ]
}));

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  const { a, b, op } = req.params.arguments as { a: number; b: number; op: string };
  const results: Record<string, number> = {
    add: a + b, sub: a - b, mul: a * b, div: a / b
  };
  return { content: [{ type: "text", text: String(results[op]) }] };
});

const transport = new StdioServerTransport();
await server.connect(transport);
```

두 예시 모두 **stdio 전송 방식**을 사용한다. 서버를 완성한 뒤에는 Claude Desktop 설정 파일에 등록하면 바로 사용할 수 있다.

<div class="article-callout article-callout--tip">
<div class="article-callout__icon">💡</div>
<div class="article-callout__body"><strong>Python과 TypeScript 서버를 동시에 연결할 수 있다</strong><br>MCP 서버는 독립 프로세스로 실행되므로 언어나 런타임이 달라도 무방하다. Claude Desktop 설정 파일에 Python 서버와 TypeScript 서버를 함께 등록해 동시에 사용할 수 있다.</div>
</div>

---

## Claude Desktop에서 MCP 설정하기

Claude Desktop 앱에서 MCP 서버를 연결하는 방법을 단계별로 정리한다.

### 1단계: 설정 파일 위치 확인

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux**: `~/.config/Claude/claude_desktop_config.json`

### 2단계: 설정 파일 편집

아래 형식으로 원하는 MCP 서버를 추가한다. 파일이 없다면 새로 생성한다.

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/username/Documents"
      ]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_your_token_here"
      }
    },
    "my-weather-server": {
      "command": "/path/to/.venv/bin/python",
      "args": ["/path/to/weather_server.py"]
    }
  }
}
```

각 항목의 의미:

- `command`: 서버를 실행할 명령어 (npx, python, node 등)
- `args`: 명령어에 전달할 인자 배열
- `env`: 서버 프로세스에 주입할 환경 변수 (API 키 등)

### 3단계: Claude Desktop 재시작

설정 파일 저장 후 Claude Desktop을 완전히 종료했다가 다시 실행한다. 정상적으로 연결되면 채팅창 좌측 하단에 MCP 도구 아이콘(망치 모양)이 표시된다.

### 4단계: 동작 확인

채팅창에 "내 Documents 폴더에 있는 파일 목록을 보여줘" 같이 입력하면 Claude가 파일시스템 MCP 서버를 통해 직접 파일을 조회한다. 도구 실행 시 Claude가 어떤 MCP 도구를 사용했는지 UI에 표시된다.

> 보안 주의: MCP 서버에 민감한 API 키나 파일 경로를 설정할 때는 각별히 주의해야 한다. 신뢰할 수 없는 출처의 MCP 서버는 설치하지 않는 것이 원칙이다. 서버는 Host 프로세스의 권한으로 실행되므로 악의적인 서버는 시스템 자원에 접근할 수 있다.

<div class="article-callout article-callout--warn">
<div class="article-callout__icon">⚠️</div>
<div class="article-callout__body"><strong>신뢰할 수 없는 MCP 서버는 설치하지 말 것</strong><br>MCP 서버는 Host 프로세스의 권한으로 실행된다. 출처가 불분명한 서버는 파일 시스템·환경 변수·API 키에 접근할 수 있으므로, 반드시 공식 저장소나 검증된 소스에서만 설치해야 한다.</div>
</div>

---

## MCP vs 기존 API 연동 방식 비교

MCP 도입 전후의 AI 도구 연동 방식은 어떻게 다를까? 핵심 차이를 비교한다.

| 항목 | 기존 방식 (직접 API 연동) | MCP |
|---|---|---|
| **구현 단위** | AI 모델별 커스텀 코드 | 표준 서버 하나로 모든 AI 지원 |
| **재사용성** | 낮음 (모델 종속) | 높음 (모델 무관) |
| **인증 관리** | 각 통합마다 별도 처리 | 서버 내에서 중앙화 |
| **모델 전환 비용** | 높음 (재구현 필요) | 낮음 (서버 재사용) |
| **도구 발견** | 수동 (개발자가 직접 정의) | 자동 (서버가 목록 제공) |
| **컨텍스트 전달** | 프롬프트에 수동 삽입 | Resources로 구조화 |
| **보안 경계** | 모델과 통합 로직 혼재 | 서버가 독립 프로세스로 분리 |
| **생태계** | 파편화 | 공유 가능한 서버 생태계 |

기존 방식에서 개발자는 "이 AI 모델이 GitHub에 접근하게 하고 싶다"는 요구사항이 생길 때마다, 그 모델의 Function Calling 포맷에 맞는 코드를 처음부터 작성해야 했다. MCP에서는 GitHub MCP 서버를 한 번 만들거나(또는 공식 서버를 가져다 쓰면) 이후 어떤 AI 모델을 사용하든 동일한 서버를 재활용한다.

단, MCP가 모든 상황에 적합한 것은 아니다. 단일 AI 플랫폼만 사용하는 간단한 MVP나, 매우 낮은 레이턴시가 필요한 실시간 시스템에서는 직접 API 연동이 더 간결할 수 있다. MCP는 **다중 AI 도구 환경, 팀 단위 개발, 장기 운영 시스템**에서 그 가치가 배가된다.

---

## MCP 생태계 현황 및 전망

### 2025~2026년 채택 현황

MCP는 발표 후 1년 남짓한 기간 동안 AI 개발 생태계의 사실상 표준(de facto standard)으로 자리잡고 있다.

| 도구/플랫폼 | MCP 지원 현황 | 특이사항 |
|---|---|---|
| **Claude Desktop** | 정식 지원 (2024.11~) | Anthropic 공식 구현 |
| **Cursor** | 정식 지원 (2025 Q1~) | `.cursor/mcp.json`으로 설정 |
| **Windsurf** | 정식 지원 (2025 Q2~) | Cascade AI와 통합 |
| **VS Code (Copilot)** | 정식 지원 (2025 Q3~) | GitHub Copilot Chat 확장 연동 |
| **Zed Editor** | 지원 (2025~) | 네이티브 AI 기능과 통합 |
| **Continue.dev** | 지원 (2025~) | 오픈소스 AI 코딩 어시스턴트 |
| **JetBrains AI** | 지원 (2025 Q4~) | IntelliJ 계열 전 IDE 적용 |
| **OpenAI (ChatGPT)** | 미지원 | 별도 Plugin/Tool 생태계 유지 |

Cursor와 VS Code Copilot의 MCP 도입은 특히 개발자 생태계에 큰 영향을 미쳤다. AI 코딩 어시스턴트가 로컬 파일시스템, GitHub, JIRA 등을 직접 읽고 쓸 수 있게 되면서 단순 코드 자동완성을 넘어 '자율 개발 에이전트'에 가까워지고 있다.

### 기업 도입 사례

- **Anthropic**: Claude.ai 웹 버전에도 MCP 기반 도구 연동을 단계적으로 확대 중이다.
- **Block (구 Square)**: 내부 개발 도구 전체를 MCP 서버로 마이그레이션했다고 발표했다.
- **Replit**: 에이전트 모드에서 MCP를 활용해 외부 서비스 연동을 처리한다.
- **주요 SaaS 플랫폼**: Linear, Notion, Figma, Supabase, Sentry 등이 공식 MCP 서버를 직접 출시했다. 이는 "MCP 지원"이 SaaS 플랫폼의 필수 기능으로 자리잡고 있음을 보여준다.

### 앞으로의 전망

2026년 MCP 생태계의 주요 관전 포인트는 세 가지다.

첫째, **샘플링(Sampling) 기능의 확산**이다. MCP 사양에는 서버가 직접 LLM 호출을 요청할 수 있는 샘플링 기능이 정의되어 있다. 이를 통해 MCP 서버가 단순 도구를 넘어 AI 에이전트의 서브 에이전트 역할을 할 수 있게 된다.

둘째, **보안 표준화**다. MCP 서버의 확산에 따라 악의적인 서버, 프롬프트 인젝션 공격 등 보안 위협도 증가하고 있다. 커뮤니티에서는 서버 서명(signing), 샌드박스 실행, 권한 최소화 패턴 등의 보안 지침을 정립하는 중이다.

셋째, **OpenAI의 동향**이다. 현재까지 OpenAI는 자체 Plugin/GPT Actions 생태계를 유지하고 있지만, 주요 개발 도구들이 MCP를 채택함에 따라 OpenAI도 MCP 호환성을 검토할 가능성이 높다. MCP가 진정한 업계 표준으로 자리잡을 수 있을지는 OpenAI의 결정에 크게 달려 있다.

---

## 참고 자료

1. Anthropic, "Introducing the Model Context Protocol", https://www.anthropic.com/news/model-context-protocol
2. MCP 공식 문서, https://modelcontextprotocol.io/introduction
3. MCP GitHub 레포지토리, https://github.com/modelcontextprotocol/servers
4. MCP Python SDK, https://github.com/modelcontextprotocol/python-sdk
5. MCP TypeScript SDK, https://github.com/modelcontextprotocol/typescript-sdk
6. Cursor MCP 설정 가이드, https://docs.cursor.com/advanced/mcp
7. Simon Willison, "MCP: The Standard for AI Tool Connections", https://simonwillison.net/2024/Nov/25/model-context-protocol
8. awesome-mcp-servers 큐레이션 목록, https://github.com/punkpeye/awesome-mcp-servers

<div class="article-keypoints">
<div class="article-keypoints__title">📌 핵심 정리</div>
<ul>
<li>MCP는 Anthropic이 2024년 11월 공개한 MIT 오픈소스 표준으로, AI 모델과 외부 도구를 단일 인터페이스로 연결한다 — AI 세계의 USB-C.</li>
<li>Host·Client·Server 삼자 구조와 JSON-RPC 2.0 프로토콜 기반으로 동작하며, stdio(로컬)와 HTTP SSE(원격/팀 공유) 두 가지 전송 방식을 지원한다.</li>
<li>서버는 Resources(읽기 전용 데이터), Tools(실제 작업 실행), Prompts(재사용 템플릿) 세 가지 기능 유형을 노출할 수 있으며, Python·TypeScript SDK로 직접 구현 가능하다.</li>
<li>Claude Desktop·Cursor·VS Code·Windsurf·JetBrains 등 주요 AI 개발 도구가 이미 정식 지원하며, Linear·Notion·Figma·Supabase 등 SaaS 플랫폼도 공식 서버를 출시해 사실상 업계 표준으로 자리잡고 있다.</li>
</ul>
</div>
