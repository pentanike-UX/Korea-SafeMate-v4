# 11 — Release log

> 날짜는 **커밋 author date (KST 근처)** 기준. 버전 태그는 레포에 **없음** — 필요 시 `git tag` 도입 TODO.

---

## 2026-04-01 — Wayly UX (워크스페이스)

- **주요 업데이트**: 퍼블릭 지도 중심 **App Shell** (아이콘 레일·컨텍스트 패널·풀스크린 맵); 모바일 바텀시트·탭바. `(map-canvas)` / `(site)` 라우트 그룹 재배치. 탐색·스토리·스팟 다수 페이지를 map-canvas로 이전.
- **영향 화면**: 홈, 플래너, 플래너 결과, explore/*, stories/*, spot detail.
- **기술**: `src/components/app-shell/*`, `workspace-registry`, `ExploreWorkspaceClient` 등 신규; i18n `V4.workspace` 확장.
- **비고**: 커밋 `f9be9d6`, `90ff729` (동일 메시지 2회 — **diff로 실제 차이 확인 권장**).

---

## 2026-04-01 — v4 큐레이션 IA (대형)

- **주요 업데이트**: 도메인 모델·v4 시드 데이터; 퍼블릭 **프리미엄 셸**(헤더·모바일 바텀 내비); 홈·explore 서브라우트·플래너/결과·스토리·안전·도움말·검색·시티 허브; 가디언 목록·가이드·요청 폼; 마이페이지 저장·가디언 가용성; **어드민 curated 허브**.
- **영향**: 공개 IA 전반 + 어드민 + i18n 대량.
- **기술**: `messages/*` 300+ 줄 증가, `data/v4`, `domain/*`, 다수 `page.tsx`.
- **비고**: 커밋 `2fcfa04` 본문에 기능 목록. Made-with: Cursor.

---

## 2026-04-01 — 추천/매칭 UX 묶음

- **주요 업데이트**: 커밋 메시지 `feat: 추천단계별기능(및UX)개선`, `추천완료요약UX개선` 등 **연속 커밋** — 단계형 추천·완료 요약 흐름 개선으로 **추정**.
- **영향**: *(정확한 화면 ID는 diff 미작성 — 추정)* 매칭/추천 관련 UI.
- **비고**: 메시지는 구체적이나 본 문서에서는 파일 단위 diff 생략. 필요 시 `git log -p --grep=추천` 로 검증.

---

## 2026-03-31 — 안정화·탐색

- **주요 업데이트**: 프로덕션 콘솔 로그 제거, pending 포스트 노출 수정, i18n 하드코딩 정리 (`a9e94e9`). 가디언 지원 2열 레이아웃 (`f6624d6`). explore 폴백·lockfile (`a22e383`). 시드 목 (`7a3f21b`).
- **영향**: 운영 안전·탐색 안정성.

---

## 2026-03-30 — 분석·잠금파일

- **주요 업데이트**: `@vercel/analytics` (`9479717`). pnpm lockfile Vercel 동기화 (`4fb5af8`). 다수 `All UX` — 세부는 메시지 부실.
- **비고**: **기능 단위 분해 불가** → 코드 역추적 또는 `git show` 권장.

---

## 2026-03-27 ~ 03-26 — 마이페이지·가디언·여행자·포스트·공통 UI

- **주요 업데이트**: Mypage / Guardian / Traveler / Notification / Header&Footer / Post / Hero / Common UI 등 **UX 집중 기간**.
- **영향**: 레이아웃·포스트 카드·가디언 세그먼트·홈 블록 조정 등.
- **비고**: 커밋 메시지 짧음 — **릴리스 노트 수준으로만 유지**.

---

## 2026-03-25 — 인증·관리·콘텐츠 기반

- **주요 업데이트**: Google 로그인·API (`091d0b8`), OAuth 콜백, Authorization, Admin&Mypage, 가디언 찾기·포스팅, User create&posting 등.
- **기술**: Supabase SSR lock (`072be10`), 초기 Renewal (`98eba0f`), v2에서 v3 분기 (`d6eaf07`).

---

## 2026-03-23 ~ 03-24 — MVP·디자인 토큰·히어로

- **주요 업데이트**: First MVP, Design token, Home Design Re, Hero, Post UX.
- **비고**: 프로젝트 시초.

---

## 앞으로

```bash
./scripts/log-release.sh
```

대화형으로 이 파일에 블록 추가.
