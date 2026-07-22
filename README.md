# 국민대학교 디지털AI혁신센터 홈페이지

국민대학교 디지털AI혁신센터의 공개 프로젝트와 GitHub 작업 이력을 소개하는 GitHub Pages 홈페이지입니다.

2026-07-22 스냅샷에서는 공개 저장소 11개를 4개 작업 분야로 묶고, 기본 브랜치 작업 커밋 69건과 `gh-pages` 배포 커밋 14건을 분리해 보여줍니다. 각 작업 카드는 16:9 전체 화면과 카드 내부 수정 이력을 제공하며, 앱·시스템 7종은 상세 사용 매뉴얼을 연결합니다.

- 공개 사이트: <https://dongjinshin-kookmin.github.io/>
- 앱·시스템 사용 매뉴얼: <https://dongjinshin-kookmin.github.io/manuals/>
- 성과관리 통합시스템: <https://dongjinshin-kookmin.github.io/kmu-performance-system/>
- UI 디자인 사전(독립 페이지): <https://dongjinshin-kookmin.github.io/design-dictionary/>
- 교비회계 수지분석: <https://dongjinshin-kookmin.github.io/univ-finance-dashboard/>
- AI 기술과 활용 직원교육: <https://dongjinshin-kookmin.github.io/ai-staff-training/교육자료/AI기술과활용_직원교육_강의페이지.html>
- 범용 디지털 백드롭: <https://dongjinshin-kookmin.github.io/digital-backdrop/>
- 디지털 백드롭 행사 화면: <https://dongjinshin-kookmin.github.io/nkust-mou-backdrop/>
- 시간표 편성 시스템: <https://dongjinshin-kookmin.github.io/timetable-app/>
- 마크다운 에디터 소스: <https://github.com/dongjinshin-kookmin/markdown-editor>

## 실행

```bash
npm install
npm run dev
```

## 검증·빌드

```bash
npm run typecheck
npm run build
npm run preview
```

## 공개 기준

- 공개 데모에는 합성 데이터와 예시 자료를 사용합니다.
- 가상·합성 데이터를 사용하는 공개 데모는 카드에 안전 안내를 강조 표시합니다.
- 실명·사번·성적·결재정보, 클라이언트 API 키 입력 기능이 있는 자료는 홈페이지에서 제외합니다.
- `public/media`에는 공개용으로 선별·최적화한 파생 이미지 파일만 저장합니다.
- 데모 데이터나 공개 소스의 재검토가 필요한 저장소는 이력만 표시하고 외부 링크를 비활성합니다.
- 라이선스가 명시되지 않은 저장소는 ‘오픈 소스’가 아닌 ‘공개 저장소’로 표기합니다.

## GitHub 아카이브 갱신

홈페이지의 저장소·커밋 스냅샷은 `src/data/githubPortfolio.ts`에서 관리합니다. 기본 브랜치와 배포 브랜치를 분리하고, 갱신 시점과 접속 검증 상태를 함께 수정합니다.
