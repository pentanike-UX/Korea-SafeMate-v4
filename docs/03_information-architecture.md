# 03 — Information architecture

## 최상위 앱 구조

```
src/app/
├── admin/                    # 관리자 콘솔
├── api/                      # Route Handlers (REST성 엔드포인트)
├── auth/callback/            # OAuth 콜백
├── [locale]/
│   ├── (authed)/             # 로그인 후: mypage, guardian, matches …
│   └── (public)/
│       ├── layout.tsx        # 자식만 렌더 (셸은 그룹별)
│       ├── (map-canvas)/     # 지도 우선 워크스페이스
│       │   ├── layout.tsx    # MapPrimaryShell → AppShell
│       │   ├── page.tsx      # 홈
│       │   ├── planner/
│       │   ├── explore/…
│       │   └── stories/…
│       └── (site)/           # 기존 퍼블릭 사이트형
│           ├── layout.tsx    # PublicSiteShell
│           ├── login/, book/, guardians/, posts/, …
│           └── traveler/…
└── layout.tsx
```

## 공개 URL (대표)

| 경로 | 그룹 | 설명 |
|------|------|------|
| `/` | map-canvas | 홈 (지도 + 패널) |
| `/explore`, `/explore/routes`, `/explore/spots`, … | map-canvas | 탐색 허브·필터 |
| `/explore/routes/[slug]` | map-canvas | 동선 상세 + 지도 |
| `/explore/spots/[slug]` | map-canvas | 스팟 상세 |
| `/planner`, `/planner/result` | map-canvas | AI 플래너 |
| `/stories`, `/stories/[slug]` | map-canvas | 스토리 |
| `/login`, `/guardians`, `/posts`, … | site | 사이트형 셸 |
| `/mypage/*` | authed | 마이페이지 |
| `/admin/*` | admin | 어드민 |

## 상태 관리 (관찰)

- **서버 컴포넌트 + Route Handlers** 중심.
- 클라이언트: 폼/지도/시트, `WorkspaceProvider` + `WorkspaceBinder`로 **맵 캔버스 레이아웃에 콘텐츠 주입**.
- 전역 URL 상태: `next-intl` `Link` / `usePathname` (i18n 래퍼).

## i18n

- 메시지: `messages/{en,ko,ja}.json`
- 네임스페이스: `V4.*` 가 큐레이션·워크스페이스 문자열의 중심.
