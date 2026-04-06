# 07 — API & environment

## App Router API (`src/app/api`)

| 영역 | 경로 예 | 비고 |
|------|---------|------|
| Account | `/api/account/me`, `profile`, `attention-seen`, … | 인증 사용자 |
| Guardian | `/api/guardian/posts`, `profile`, … | 가디언 콘솔 연동 |
| Traveler | `/api/traveler/match-requests`, `saved-posts`, `points`, `reviews`, … | 여행자 |
| Matches | `/api/matches`, `[id]/confirm` | 매칭 |
| Bookings | `/api/bookings` | 예약 |
| Routing | `/api/routing/osrm`, `/api/routing/directions` | 경로(레이트리밋·시크릿 가드 존재) |
| Admin | `/api/admin/...` | 관리 |
| Dev | `/api/dev/mock-guardian-login` 등 | 개발용 |

전체 목록은 `glob: src/app/api/**/route.ts` 로 확인.

## 클라이언트·서버 환경 변수 (코드에서 읽힌 항목, 불완전할 수 있음)

### 공개 (NEXT_PUBLIC_*)

| 변수 | 용도 |
|------|------|
| `NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID` | Naver Dynamic Map |
| `NEXT_PUBLIC_NAVER_MAPS_USE_MOCK` | Naver 목 사용 여부 |
| `NEXT_PUBLIC_MAP_PROVIDER` | `schematic` 시 SVG/폴백 |
| `NEXT_PUBLIC_MAP_STYLE_URL` | MapLibre 스타일 URL |
| `NEXT_PUBLIC_SITE_URL` | OAuth·캐노니컬 ( `src/lib/site-url.ts` ) |
| `NEXT_PUBLIC_OAUTH_*` | 리다이렉트 폴백 |

### 서버 전용 (예시)

| 변수 | 용도 |
|------|------|
| `NCP_MAP_API_KEY_ID` / `NCP_MAP_API_KEY` 등 | 네이버 방향 API (서버) |
| `OSRM_BASE_URL` | OSRM 엔드포인트 (기본 공개 OSRM) |
| `DIRECTIONS_RATE_LIMIT_PER_MINUTE` | 방향 API 레이트리밋 |
| `DIRECTIONS_INTERNAL_SECRET` | 내부 호출 보호 |
| `SAFEMATE_DEMO_EMPTY_SAVED_ROUTES` | 데모 저장 목록 비우기 |

> **전수 조사는 `rg process.env src` 권장.** 누락 가능 → TODO.

## 배포

- Vercel: `vercel.json` 최소 설정.
- `deploy.sh`: CI/로컬 배포 파이프라인 (내용은 스크립트 직접 확인).
