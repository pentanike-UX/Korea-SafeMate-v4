# 00 — Project overview

## 한 줄 요약

**Korea SafeMate**는 한국 여행자에게 **검증된 가디언(Guardian) 매칭**, **콘텐츠(포스트/스토리)**, **큐레이션 동선(v4: Route / Spot / AI Planner)** 을 제공하는 **Next.js 기반 웹 앱**이다.

## 레포 메타 (주의)

- 디렉터리 이름은 `Korea-SafeMate-v4`이나 `README.md`는 **v3** 초기 베이스 설명을 담고 있다. **실제 제품 IA는 v4 큐레이션·워크스페이스 중심으로 진화**했다.
- `package.json`의 `repository` URL은 **v2**를 가리킨다. **원격 푸시 대상은 v4 저장소일 수 있음** → 운영 시 실제 GitHub URL과 맞출 것 (TODO).

## 기술 스택 (코드 기준)

| 영역 | 선택 |
|------|------|
| 프레임워크 | **Next.js 16** (App Router) |
| UI | React 19, Tailwind 4, Base UI Dialog 등(shadcn 계열), Lucide |
| i18n | **next-intl** — 로케일 `en`, `ko`, `ja` |
| 인증/DB | **Supabase** (`@supabase/ssr`, `@supabase/supabase-js`) |
| 지도 | **Naver Dynamic Map** (클라이언트 ID 설정 시) 또는 **MapLibre**; `schematic` 폴백 |
| 분석 | `@vercel/analytics` |
| 패키지 매니저 | **pnpm** (`package.json` `packageManager`) |

## 운영·배포 흔적

- `vercel.json`: `framework: nextjs`
- `deploy.sh`: 배포 스크립트 (마이그레이션 스킵 옵션 등)
- Node **20.x** 엔진 고정

## 문서 인덱스

| 문서 | 용도 |
|------|------|
| [01_product-prd.md](./01_product-prd.md) | 제품 범위·페르소나 (코드+커밋 기반) |
| [02_tech-setup.md](./02_tech-setup.md) | 로컬 실행·빌드·체크 |
| [03_information-architecture.md](./03_information-architecture.md) | 라우트·레이아웃 그룹 |
| [04_screen-spec.md](./04_screen-spec.md) | 주요 화면 책임 |
| [05_design-rules.md](./05_design-rules.md) | 토큰·UX 원칙 |
| [06_data-schema.md](./06_data-schema.md) | 도메인 타입·데이터 소스 |
| [07_api-env.md](./07_api-env.md) | API 라우트·환경 변수 |
| [08_prompt-log.md](./08_prompt-log.md) | 작업/프롬프트 로그 (미래 누적) |
| [09_decision-log.md](./09_decision-log.md) | 의사결정 (추론 구분) |
| [10_qa-checklist.md](./10_qa-checklist.md) | 릴리스 전 점검 |
| [11_release-log.md](./11_release-log.md) | 릴리스·기능 타임라인 |

## 관련 자동화

- `scripts/log-work.sh` — 작업 한 줄 로그
- `scripts/log-release.sh` — 릴리스 블록 추가
- `scripts/new-adr.sh` — 의사결정 항목 추가
