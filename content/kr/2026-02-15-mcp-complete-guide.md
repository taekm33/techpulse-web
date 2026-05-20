---
title: "MCP(Model Context Protocol) 완전 가이드 — AI와 도구를 연결하는 표준"
summary: "Anthropic이 2024년 11월 공개한 MCP(Model Context Protocol)는 AI 모델과 외부 도구를 일관된 방식으로 연결하는 오픈 표준이다. 파편화된 AI 통합 문제를 해결하고, 개발자가 직접 서버를 만들어 생태계를 확장할 수 있다."
category: "dev-trend"
date: "2026-02-15"
tags: ["MCP", "ModelContextProtocol", "Anthropic", "AI도구연결", "개발자가이드"]
featured: false
---

## MCP란 무엇인가

**MCP(Model Context Protocol)**는 Anthropic이 2024년 11월 공개한 오픈 표준 프로토콜이다. 핵심 목표는 단순하다: AI 모델이 외부 데이터 소스, 도구, 서비스와 표준화된 방식으로 통신할 수 있도록 하는 것이다.

비유하자면, MCP는 **AI 세계의 USB-C**다. 이전에는 기기마다 다른 충전 케이블이 필요했던 것처럼, AI 모델도 각 서비스(GitHub, Slack, 데이터베이스 등)마다 별도의 커스텀 통합 코드가 필요했다. MCP는 이 혼란을 단 하나의 표준 인터페이스로 해결한다.

> "MCP는 AI 애플리케이션을 위한 공통 언어다. 모델 개발자와 툴 개발자 모두가 같은 방언을 쓰게 되면, 생태계 전체의 속도가 달라진다." — Anthropic 엔지니어링 블로그, 2024.11

MCP는 완전한 오픈소스(MIT 라이선스)로 공개되어 있으며, 특정 모델이나 플랫폼에 종속되지 않는다. 사양 문서, SDK, 레퍼런스 서버 구현체 모두 GitHub에서 확인할 수 있다.

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

---

## MCP 아키텍처: Host · Client · Server

MCP는 세 가지 역할로 구성된다.

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

### Host (호스트)

사용자가 직접 상호작용하는 애플리케이션이다. Claude Desktop, Cursor, Windsurf, 또는 직접 구축한 AI 챗 인터페이스가 여기에 해당한다. Host는 여러 개의 MCP Client를 관리하며, 각 Client를 통해 다수의 MCP Server에 연결할 수 있다.

### Client (클라이언트)

Host 내부에 존재하는 컴포넌트로, 특정 MCP Server와 1:1 연결을 유지한다. MCP 프로토콜의 통신을 담당하며, 서버가 제공하는 도구(Tools), 리소스(Resources), 프롬프트(Prompts) 목록을 모델에게 전달한다.

### Server (서버)

실제 기능을 제공하는 경량 프로세스다. 파일시스템 접근, GitHub API 호출, 데이터베이스 쿼리 등 구체적인 작업을 수행한다. MCP Server는 세 가지 기본 기능을 노출할 수 있다:

- **Tools**: AI가 호출할 수 있는 함수 (예: `read_file`, `create_issue`)
- **Resources**: AI가 읽을 수 있는 데이터 (예: 파일 내용, DB 레코드)
- **Prompts**: 재사용 가능한 프롬프트 템플릿

---

## 현재 지원하는 주요 MCP 서버

Anthropic과 커뮤니티가 공개한 MCP 서버 목록은 빠르게 늘고 있다. 아래는 가장 많이 사용되는 레퍼런스 서버들이다.

| 서버명 | 주요 기능 | 공식 링크 |
|---|---|---|
| **filesystem** | 로컬 파일 읽기·쓰기·검색 | github.com/modelcontextprotocol/servers |
| **github** | 이슈·PR·코드 조회 및 생성 | github.com/modelcontextprotocol/servers |
| **slack** | 채널 메시지 읽기·전송 | github.com/modelcontextprotocol/servers |
| **postgres** | PostgreSQL 쿼리 실행 | github.com/modelcontextprotocol/servers |
| **sqlite** | SQLite DB 조회 및 수정 | github.com/modelcontextprotocol/servers |
| **brave-search** | Brave Search API 기반 웹 검색 | github.com/modelcontextprotocol/servers |
| **puppeteer** | 웹 브라우저 자동화 | github.com/modelcontextprotocol/servers |
| **google-drive** | Google Drive 파일 접근 | github.com/modelcontextprotocol/servers |
| **memory** | 대화 간 지식 저장 (KV 저장소) | github.com/modelcontextprotocol/servers |
| **fetch** | URL 웹페이지 내용 가져오기 | github.com/modelcontextprotocol/servers |

서드파티 생태계도 급성장하고 있다. Linear, Notion, Jira, Figma, Supabase 등 주요 SaaS 플랫폼들이 공식 MCP 서버를 출시했다.

---

## MCP 서버 직접 만드는 방법

MCP 서버는 Python 또는 TypeScript SDK를 사용해 빠르게 만들 수 있다.

### Python 예시 — 간단한 날씨 조회 서버

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
        # 실제 구현에서는 Weather API 호출
        return [TextContent(type="text", text=f"{city}의 현재 날씨: 맑음, 18°C")]

async def main():
    async with stdio_server() as streams:
        await app.run(*streams)

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
```

### TypeScript 예시 — 간단한 계산기 서버

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

두 예시 모두 **stdio 전송 방식**을 사용한다. 프로덕션 환경에서는 HTTP/SSE(Server-Sent Events) 방식도 지원한다.

---

## Claude Desktop에서 MCP 설정하는 방법

Claude Desktop 앱에서 MCP 서버를 연결하는 방법은 다음과 같다.

### 1단계: 설정 파일 위치 확인

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

### 2단계: 설정 파일 편집

아래 형식으로 원하는 MCP 서버를 추가한다.

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
    }
  }
}
```

### 3단계: Claude Desktop 재시작

설정 파일 저장 후 Claude Desktop을 완전히 종료했다가 다시 실행한다. 정상적으로 연결되면 채팅창 좌측 하단에 MCP 도구 아이콘이 표시된다.

### 4단계: 동작 확인

채팅창에 "내 Documents 폴더에 있는 파일 목록을 보여줘" 같이 입력하면 Claude가 파일시스템 MCP 서버를 통해 직접 파일을 조회한다.

> 주의: MCP 서버에 민감한 API 키나 파일 경로를 설정할 때는 보안에 주의해야 한다. 신뢰할 수 없는 출처의 MCP 서버는 설치하지 않는 것이 원칙이다.

---

## 다른 AI 도구에서의 MCP 지원 현황

MCP의 가장 큰 강점은 특정 AI에 종속되지 않는다는 점이다. 2025~2026년에 걸쳐 주요 AI 개발 도구들이 MCP를 지원하기 시작했다.

| 도구/플랫폼 | MCP 지원 현황 | 특이사항 |
|---|---|---|
| **Claude Desktop** | 정식 지원 (2024.11~) | Anthropic 공식 구현 |
| **Cursor** | 정식 지원 (2025 Q1~) | `.cursor/mcp.json`으로 설정 |
| **Windsurf** | 정식 지원 (2025 Q2~) | Cascade AI와 통합 |
| **VS Code (Copilot)** | 실험적 지원 | GitHub Copilot Chat 확장 연동 |
| **Zed Editor** | 지원 (2025~) | 네이티브 AI 기능과 통합 |
| **Continue.dev** | 지원 (2025~) | 오픈소스 AI 코딩 어시스턴트 |
| **OpenAI (ChatGPT)** | 미지원 (별도 Plugin/Tool 생태계 유지) | — |

Cursor와 Windsurf의 MCP 도입은 특히 개발자 생태계에 큰 영향을 미쳤다. AI 코딩 어시스턴트가 로컬 파일시스템, GitHub, JIRA 등을 직접 읽고 쓸 수 있게 되면서 단순 코드 자동완성을 넘어 '자율 개발 에이전트'에 가까워지고 있다.

---

## 참고 자료

1. Anthropic, "Introducing the Model Context Protocol", https://www.anthropic.com/news/model-context-protocol
2. MCP 공식 문서, https://modelcontextprotocol.io/introduction
3. MCP GitHub 레포지토리, https://github.com/modelcontextprotocol/servers
4. MCP Python SDK, https://github.com/modelcontextprotocol/python-sdk
5. MCP TypeScript SDK, https://github.com/modelcontextprotocol/typescript-sdk
6. Cursor MCP 설정 가이드, https://docs.cursor.com/advanced/mcp
7. Simon Willison, "MCP: The Standard for AI Tool Connections", https://simonwillison.net/2024/Nov/25/model-context-protocol
