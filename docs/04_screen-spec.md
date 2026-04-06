# 04 — Screen spec (요약)

> 세부 UI 스펙은 피그마/원문 없음. **컴포넌트·라우트 책임** 기준으로 정리.

## Map-canvas 워크스페이스 (`AppShell`)

| 영역 | 역할 |
|------|------|
| Icon rail (lg+) | 홈·탐색·플래너·저장·마이 + 하단 유틸(도움/정보/언어/계정) |
| Context panel | 현재 작업 전용: 헤더·스크롤 본문·스티키 CTA·(선택) 푸터 CTA·유틸 푸터 |
| Full-screen map | 앰비언트 맵 또는 `RouteMap` / `SpotPinMap` |
| Mobile | 컴팩트 헤더 + 바텀시트(패널) + 하단 탭바 |

## 홈

- 패널: 지역 칩·무드 칩·추천 루트·플래너/탐색 CTA.
- 맵: `FullBleedAmbientMap`.

## AI Planner

- 패널: 동반자·시간·무드·예산·이동수단·민감도·언어·지역 힌트 + 스티키 “동선 만들기”.
- 맵: 앰비언트 + 지역 칩 연동.

## Planner result / Route detail

- 맵: 경로 폴리라인·스톱 마커·통계 칩(`MapOverlayStats`).
- 패널: 요약·대안 탭(결과)·스톱 리스트·가디언 CTA 등 (컴포넌트: `planner-result-experience`, `route-detail-experience`).

## Explore hub

- 세그먼트: Routes / Spots / Stories, 필터 칩, 카드 리스트.
- 헤더 액션: 지도 프리셋 S/R/G.

## Spot / Story detail

- 스팟: 핀 맵 + 메타·다음 스톱·루트 링크.
- 스토리: 앰비언트 맵 + 본문·관련 루트 CTA.

## Site 셸 화면

- `PublicSiteShell`: 헤더·푸터·모바일 내비 — 로그인·가디언·포스트 등.

## 빈/로딩/에러

- 지도: Naver/MapLibre/schematic 각각 폴백·에러 문구 존재.
- 워크스페이스: 등록 전 `AppShell` 스켈레톤 (코드 기준). **전 화면 공통 empty UX는 TODO**로 통일 검토.
