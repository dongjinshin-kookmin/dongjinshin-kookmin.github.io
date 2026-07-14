# 국민대학교 디지털AI혁신센터 홈페이지

국민대학교 디지털AI혁신센터의 공개 프로젝트와 AI 활용 작업 이력을 소개하는 GitHub Pages 홈페이지입니다.

- 공개 사이트: <https://dongjinshin-kookmin.github.io/>
- 성과관리 통합시스템: <https://dongjinshin-kookmin.github.io/kmu-performance-system/>
- AI 기술과 활용 직원교육: <https://dongjinshin-kookmin.github.io/kmu-ai-staff-training/>
- KMU–NKUST 행사 화면: <https://dongjinshin-kookmin.github.io/nkust-mou-backdrop/>

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
- AI 생성 콘셉트 이미지와 진행 중인 R&D는 화면에 상태를 표시합니다.
- 실명·사번·성적·결재정보, 클라이언트 API 키 입력 기능이 있는 자료는 홈페이지에서 제외합니다.
- `public/media`에는 공개용으로 선별·최적화한 파생 이미지 파일만 저장합니다.
