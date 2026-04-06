# 02 — Tech setup

## 요구 사항

- **Node.js 20.x** (`package.json` `engines`)
- **pnpm 10.x** (`packageManager` 필드 권장)

## 설치

```bash
pnpm install
```

> `README.md`의 `npm install`은 레거시 표기. 이 레포는 **pnpm**이 표준이다.

## 개발 서버

```bash
pnpm dev
```

- 기본: http://localhost:3000  
- 로케일: `/ko`, `/ja` (라우팅은 `src/i18n/routing.ts` 참고)

## 품질 게이트

```bash
pnpm run check   # tsc + eslint (경로는 package.json scripts 참고)
pnpm run build
pnpm start       # 또는 pnpm run preview (= build && start)
```

## 기타 스크립트

| 스크립트 | 용도 |
|----------|------|
| `posts:scan-images` | 포스트 로컬 이미지 스캔 → `prebuild`에서 실행 |
| `seed:*` | Supabase 시드 (로컬/스테이징용, 자격 증명 필요) |
| `deploy` | `deploy.sh` |

## Next.js 버전 주의

`AGENTS.md`: **Next 16은 학습 데이터와 다를 수 있음** — 변경 시 `node_modules/next/dist/docs/` 확인.

## 문서·로그

- 작업 기록: `scripts/log-work.sh` → `docs/08_prompt-log.md`
- 릴리스: `scripts/log-release.sh` → `docs/11_release-log.md`
