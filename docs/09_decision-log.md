# 09 — Decision log (ADR-style)

> **확실**: 커밋 본문·코드 주석에 근거. **추정**: 구현만 보고 역추적 — 반드시 *추정* 표기.

---

## D-001 — Next.js App Router + next-intl (확실)

- **맥락**: `src/app/[locale]` 구조, `next-intl` 의존성.
- **결정**: 로케일 접두 경로와 메시지 JSON로 i18n.
- **근거**: 코드 구조.

## D-002 — 지도: Naver 우선, MapLibre 폴백, schematic 최후 (확실)

- **맥락**: `src/lib/maps/map-display-mode.ts`, `route-map.tsx` 주석.
- **결정**: `NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID` 설정 시 Naver Dynamic Map; 아니면 MapLibre; `NEXT_PUBLIC_MAP_PROVIDER=schematic` 시 단순 도식.
- **근거**: 소스 주석 및 분기.

## D-003 — 경로 기하: OSRM/도로 폴리라인 (확실)

- **맥락**: `PathSegment` 주석, `api/routing/osrm`, `OSRM_BASE_URL`.
- **결정**: 스트리트 폴리라인을 쓰고 OSRM 호환 엔드포인트와 연동.
- **근거**: 도메인 타입 + API.

## D-004 — 공개 레이아웃 이원화: `(map-canvas)` vs `(site)` (확실)

- **맥락**: 커밋 `90ff729` — 페이지 이동, `MapPrimaryShell` vs `PublicSiteShell`.
- **결정**: 지도 중심 워크스페이스와 전통 퍼블릭 셸을 **라우트 그룹**으로 분리해 서버 컴포넌트 경계 문제를 피함. *(추정: 레이아웃 스위치 클라이언트 이슈 회피 — `docs/00` 참고, 상세는 커밋 diff 확인 권장)*

## D-005 — v4 큐레이션 데이터를 TS 시드로 관리 (확실)

- **맥락**: `src/data/v4`, `src/domain/curated-experience.ts`.
- **결정**: 초기 에디토리얼·데모는 코드 내 데이터 + 어드민 curated 허브로 운영 *(어드민 범위는 커밋 `2fcfa04` 본문)*.

## D-006 — AI Planner 결과는 클라이언트 목업 빌더 (추정)

- **맥락**: `buildMockAIPlan`, 플래너 result 페이지.
- **결정**: 실서비스 LLM 전 **데모/프로토타입** 경로. 프로덕션 모델 연동 시 교체 필요.
- **근거**: 파일명·패턴 (정확한 TODO: `planner/result` 코드 재확인).

## D-007 — 패키지 매니저 pnpm (확실)

- **근거**: `packageManager` 필드, lockfile, 커밋 `4fb5af8` Vercel lockfile 동기화.

---

## 템플릿 (새 항목)

```bash
./scripts/new-adr.sh "짧은 제목"
```
