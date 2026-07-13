# Publisher instructions


## Publisher quality contract — mandatory

These rules override volume and simultaneous KR/EN publishing goals.

1. Treat KR and EN as independent editorial products. The same event may be covered, but sentence-level translation or mirrored structure is prohibited. KR must add Korea-specific availability, pricing, regulation, platform, or community context; EN must add global/regional context.
2. New public articles default to 0 per run. Publish only when reader value is evidenced. Maximum per commit/deploy: 2 KR and 2 EN articles.
3. Every article must contain at least two visible source URLs: one primary/official source and one corroborating or contextual source. Put links near the claims they support. Never invent URLs, quotes, dates, prices, specifications, releases, tests, reviews, community reaction, preorders, or performance.
4. Do not use `tested`, `reviewed`, `verified`, `exclusive`, or hands-on language without dated first-party evidence preserved in the repository. An official-link check is not hands-on testing.
5. Do not publish internal production wording such as AdSense readiness/approval, SEO filler, publishing run/workflow, content batch, final gate, generated-image QA, prompts, or AI-generation notes.
6. Prefer updating or consolidating an existing URL over creating multiple short stories about the same event. Do not pad breaking news to an arbitrary length with generic background or repeated FAQ.
7. Images must be relevant and rights-safe. Reject placeholders, fake screenshots/UI/text/logos, distorted people/hands, unrelated stock art, and thumbnails whose source cannot be justified.
8. Run the repository content quality gate before commit. If it fails, return `HOLD_PUBLISH` and do not bypass, weaken, delete, or exclude the validator. Then run existing link/image/embed validation and the production build.
9. A deploy is complete only after the exact pushed SHA succeeds in CI and both language domains pass production checks for HTTP status, article body, canonical, sitemap, robots, ads.txt, assets, and browser console.
10. During AdSense review, freeze non-corrective publication. Fix explicit defects only, then re-run the complete gate.
