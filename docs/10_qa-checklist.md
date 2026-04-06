# 10 — QA checklist

릴리스 또는 큰 PR 전 스모크. (제품별 자동 E2E는 별도 TODO.)

## 빌드·타입

- [ ] `pnpm run check` 통과
- [ ] `pnpm run build` 통과

## i18n

- [ ] `en` / `ko` / `ja` 주요 신규 문자열 누락 없음 (콘솔 intl 에러 없음)
- [ ] RTL 미지원 전제 — 혼선 없음

## 맵 캔버스 (로컬)

- [ ] 홈: 패널·맵 로드, 칩 동작
- [ ] `/planner` 폼 제출 → `/planner/result` 이동
- [ ] 루트 상세: 스톱 선택 ↔ 지도 하이라이트
- [ ] 모바일 뷰: 바텀시트·탭바가 맵을 가리지 않는지 (안전 영역)

## 사이트 셸

- [ ] `/login`, `/guardians` 레이아웃 깨짐 없음
- [ ] 푸터 링크 (about 앵커 등)

## 인증 (환경 있을 때)

- [ ] 로그인·로그아웃·콜백 URL (`NEXT_PUBLIC_SITE_URL`)
- [ ] 마이페이지 진입

## API (스테이징)

- [ ] 라우팅 API 레이트리밋/시크릿 오설정 시 4xx 확인 (의도대로)

## 접근성 (샘플)

- [ ] 주요 버튼에 이름/레이블
- [ ] 키보드로 시트 닫기 (가능한 범위)

## 회귀 위험 (기술 부채)

- [ ] `README` vs 실제 pnpm/버전 설명 불일치 알고 있음
- [ ] `package.json` repository URL vs 실제 GitHub 불일치 확인
