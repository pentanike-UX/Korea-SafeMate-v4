# 06 — Data schema

## 도메인 모델 (TypeScript 정본)

파일: `src/domain/curated-experience.ts`

| 타입 | 설명 |
|------|------|
| `CuratedRoute` | 슬러그, 스톱 순서, `PathSegment`(도로 따라 폴리라인), 팁/주의, 상태 |
| `Spot` | 장소 메타, 좌표, 루트 참조 등 |
| `StoryArticleV4` 등 | 스토리 콘텐츠 (같은 파일·`data/v4` 참고) |
| `AIPlannerInput` / `AIPlanOutput` | 플래너 입출력 (목업 생성기와 연결) |

## 시드·정적 데이터

- `src/data/v4/*` — 공개 큐레이션 루트·스팟·스토리 등.
- 포스트 이미지: `scripts/scan-post-local-images.mjs` → 생성 매니페스트 (`prebuild`).

## Supabase (추정 + 코드 흔적)

- 사용자·프로필·가디언·포스트·매치·포인트 등은 **API 라우트 + `createSupabase*`** 로 접근.
- **정확한 DB 스키마(테이블 DDL)** 는 이 레포에 단일 소스 없음 → **TODO: Supabase 대시보드 또는 migration 리포 동기화**.

## 지도·경로 기하

- `PathSegment.polyline`: OSRM 호환 도로 기하 (주석상).
- 생성물: `src/data/v4/route-path-segments.generated` 등.
