export type WorkAreaId = 'administration' | 'education' | 'media' | 'platform'

export type CommitRecord = {
  sha: string
  date: string
  message: string
  branch: 'main' | 'gh-pages'
}

export type RepositoryStatus = 'live' | 'source' | 'archive' | 'review'

export type RepositoryRecord = {
  id: string
  name: string
  displayName: string
  area: WorkAreaId
  summary: string
  language: 'HTML' | 'TypeScript'
  status: RepositoryStatus
  statusLabel: string
  repositoryUrl?: string
  liveUrl?: string
  pageNote: string
  startedAt: string
  commits: CommitRecord[]
}

export type WorkRecord = {
  id: string
  number: string
  area: WorkAreaId
  eyebrow: string
  title: string
  summary: string
  status: string
  repositoryIds: string[]
  highlights: string[]
  note: string
  image?: string
  imageAlt?: string
  primaryUrl?: string
  primaryLabel?: string
}

export const archiveSnapshot = {
  capturedAt: '2026.07.20 22:36 KST',
  publicRepositories: 10,
  sourceCommits: 56,
  deployCommits: 13,
  livePages: 8,
  period: '2026.01.28 — 2026.07.20',
}

export const workAreas: Array<{
  id: WorkAreaId
  number: string
  title: string
  english: string
  description: string
}> = [
  {
    id: 'administration',
    number: '01',
    title: '행정·데이터 시스템',
    english: 'Administration & Data',
    description: '복잡한 대학 업무를 구조화하고, 판단에 필요한 정보를 한 화면에 연결합니다.',
  },
  {
    id: 'education',
    number: '02',
    title: '교육·역량 확산',
    english: 'Education & Enablement',
    description: '도구 소개를 넘어 실제 행정 문서와 업무 흐름에 적용하는 교육을 설계합니다.',
  },
  {
    id: 'media',
    number: '03',
    title: '행사·생성 미디어',
    english: 'Event & Generative Media',
    description: '행사용 송출 화면부터 AI 생성 비주얼 연구까지 매체에 맞는 결과를 반복 제작합니다.',
  },
  {
    id: 'platform',
    number: '04',
    title: '센터 플랫폼',
    english: 'Center Platform',
    description: '결과물만이 아니라 수정·배포 이력까지 오래 찾아볼 수 있는 공개 기록을 만듭니다.',
  },
]

export const repositories: RepositoryRecord[] = [
  {
    id: 'timetable-app',
    name: 'timetable-app',
    displayName: '시간표 편성 시스템',
    area: 'administration',
    summary: '분반 산정, 교수 선점, 강의실 배치, 충돌 검사와 엑셀 입출력을 지원하는 단일 HTML 데모입니다.',
    language: 'HTML',
    status: 'live',
    statusLabel: '라이브',
    repositoryUrl: 'https://github.com/dongjinshin-kookmin/timetable-app',
    liveUrl: 'https://dongjinshin-kookmin.github.io/timetable-app/',
    pageNote: 'main 직접 배포 · HTTP 200 확인',
    startedAt: '2026.07.18',
    commits: [
      {
        sha: 'bfd82a4',
        date: '2026.07.19',
        message: 'GitHub Pages 접속용 index.html 리다이렉트 추가',
        branch: 'main',
      },
      {
        sha: '1b75d81',
        date: '2026.07.18',
        message: '시간표 편성 시스템: 글로벌인문·지역대학 데모 버전',
        branch: 'main',
      },
    ],
  },
  {
    id: 'kmu-ai-staff-training',
    name: 'kmu-ai-staff-training',
    displayName: 'AI 기술과 활용 직원교육',
    area: 'education',
    summary: '2026년 7월 23일 직원역량강화교육을 위한 4개 강의, 실습, 출처와 시연 앱을 통합한 웹 교육자료입니다.',
    language: 'HTML',
    status: 'live',
    statusLabel: '라이브',
    repositoryUrl: 'https://github.com/dongjinshin-kookmin/kmu-ai-staff-training',
    liveUrl: 'https://dongjinshin-kookmin.github.io/kmu-ai-staff-training/',
    pageNote: 'main 직접 배포 · HTTP 200 확인',
    startedAt: '2026.07.10',
    commits: [
      {
        sha: '5283193',
        date: '2026.07.20',
        message: '강의_3 실습 재료 개편: 결과보고서·디자인 가이드 다운로드, FactChat 시연 추가, 통합본 69섹션 재조립',
        branch: 'main',
      },
      {
        sha: '1cc430b',
        date: '2026.07.20',
        message: 'FactChat 실습 자료 추가: 결과보고서 MD·PDF 5종, 디자인 가이드 5종, 시연 결과물 2종',
        branch: 'main',
      },
      {
        sha: '9df72b9',
        date: '2026.07.20',
        message: '교육자료 개편: 강의 1·2·3 재구성 및 통합본 67섹션 조립',
        branch: 'main',
      },
      {
        sha: '6aa1cd6',
        date: '2026.07.16',
        message: '교육자료 갱신: 강의 1/2/3 문구·섹션 수정 및 통합본 재조립',
        branch: 'main',
      },
      {
        sha: 'c5ab28b',
        date: '2026.07.15',
        message: '강의 3 풀폭 레이아웃과 16:9 정보 밀도 개선',
        branch: 'main',
      },
      {
        sha: '6558568',
        date: '2026.07.15',
        message: '강의_3 레이아웃 가로 확장·타이포 확대 (d3 스코프, 타 챕터 무영향)',
        branch: 'main',
      },
      {
        sha: '7d4c63b',
        date: '2026.07.15',
        message: '신설 장면 20곳에 히어로풍 시네마틱 정적 배경 삽입, 모바일 5칩 그리드 접힘 보완',
        branch: 'main',
      },
      {
        sha: 'c265470',
        date: '2026.07.14',
        message: '모바일(아이폰 사파리) 좌우 여백·오버플로 대응 — 640px 이하, safe-area, 그리드 접힘',
        branch: 'main',
      },
      {
        sha: 'd480876',
        date: '2026.07.14',
        message: '파트 표지 대형 재디자인·체험 카드 성과관리 교체·실습 흐름 장면 이동',
        branch: 'main',
      },
      {
        sha: 'f45abbb',
        date: '2026.07.14',
        message: '덱 대개편: 2파트 재편·강의_4 신설·하네스 보강·실습 파이프라인 (총 75분)',
        branch: 'main',
      },
      {
        sha: 'e186b5c',
        date: '2026.07.13',
        message: '3장 실습에 FactChat 사용법 장면 5개 추가 (스크린샷 7장 임베드)',
        branch: 'main',
      },
      {
        sha: '8edc44c',
        date: '2026.07.13',
        message: '실습 확장: 5블록 5분할·글씨 확대·마크다운→디자인 가이드라인→산출물 3종 파이프라인',
        branch: 'main',
      },
      {
        sha: 'e2cd96d',
        date: '2026.07.13',
        message: '설문 기반 커리큘럼 재편: 실습=문서·계획안 자동화, 이미지·영상·앱=2장 쇼케이스',
        branch: 'main',
      },
      {
        sha: '5901392',
        date: '2026.07.13',
        message: '이미지 중복 정리: 공식 도표 삭제, 결과컷 헤더 크롭, 모빌리티 캡션 보강',
        branch: 'main',
      },
      {
        sha: '96325e1',
        date: '2026.07.10',
        message: '트랙 A에 프롬프트 공식 슬라이드 3장 복원 (6단계·비교·4요소), 실습 가이드 반영',
        branch: 'main',
      },
      {
        sha: '711e2d8',
        date: '2026.07.10',
        message: '직원교육 강의 자료 공개 게시 (2026-07-23 교육)',
        branch: 'main',
      },
    ],
  },
  {
    id: 'univ-finance-dashboard',
    name: 'univ-finance-dashboard',
    displayName: '교비회계 수지분석 대시보드',
    area: 'administration',
    summary: '공개 재정·교육 데이터로 344개 대학의 2016–2024년 교비회계 추이, 10개 KPI, 계정 벤치마크와 입학정원 감축 시뮬레이션을 보여줍니다.',
    language: 'HTML',
    status: 'live',
    statusLabel: '라이브',
    repositoryUrl: 'https://github.com/dongjinshin-kookmin/univ-finance-dashboard',
    liveUrl: 'https://dongjinshin-kookmin.github.io/univ-finance-dashboard/',
    pageNote: 'main 직접 배포 · HTTP 200 확인',
    startedAt: '2026.07.14',
    commits: [
      {
        sha: '9795dec',
        date: '2026.07.20',
        message: 'fix: 수지구조·계정분석 대학 검색 선택 미반영 버그 수정',
        branch: 'main',
      },
      {
        sha: 'dcce618',
        date: '2026.07.20',
        message: 'v9: 입학정원 감소 시뮬레이션 탭 — 코호트 델타 모델 + 백테스트 검증',
        branch: 'main',
      },
      {
        sha: 'c3d4072',
        date: '2026.07.16',
        message: 'v8: 계정 분석 탭 신설 — 자동 인사이트 + 전 계정 벤치마크 매트릭스',
        branch: 'main',
      },
      {
        sha: '2ecab8d',
        date: '2026.07.16',
        message: 'v7.1: 수지구조 그리드 60:40 재배치 (트리 6fr : 분석 패널 4fr)',
        branch: 'main',
      },
      {
        sha: 'eab6de2',
        date: '2026.07.16',
        message: 'v7: 수지구조 — 총액 강조·억원 통일·코드 배지·트리 폭 축소·라운드 바',
        branch: 'main',
      },
      {
        sha: '2aaa3f1',
        date: '2026.07.15',
        message: 'v6: 홈 랜딩 화면 추가 — 80주년 캠퍼스 사진 히어로 + 메뉴 안내 카드',
        branch: 'main',
      },
      {
        sha: '6edd72a',
        date: '2026.07.15',
        message: 'v5: 수지 구조 탭 전면 개편 — 연도 칩·병렬 계층 박스·선택 계정 분석 패널',
        branch: 'main',
      },
      {
        sha: 'fbc67ab',
        date: '2026.07.15',
        message: 'v4: 위기 진단·구조 전망 탭 추가 (데이터 확장 1~3순위 반영)',
        branch: 'main',
      },
      {
        sha: '461612d',
        date: '2026.07.15',
        message: '데이터 확장 조사보고서 추가 (시너지 데이터 지도·우선순위 로드맵)',
        branch: 'main',
      },
      {
        sha: '21d6c5f',
        date: '2026.07.15',
        message: 'Trackline 스타일 UI 리디자인 (v3)',
        branch: 'main',
      },
      {
        sha: 'c511452',
        date: '2026.07.14',
        message: 'GitHub Pages용 index.html 리다이렉트 추가',
        branch: 'main',
      },
      {
        sha: 'cbdeaa0',
        date: '2026.07.14',
        message: '사립대학 교비회계 자금계산서 수지분석 대시보드',
        branch: 'main',
      },
    ],
  },
  {
    id: 'dongjinshin-kookmin.github.io',
    name: 'dongjinshin-kookmin.github.io',
    displayName: '디지털AI혁신센터 홈페이지',
    area: 'platform',
    summary: '센터의 공개 결과물, 작업 원칙과 GitHub 변경 이력을 한곳에 연결하는 React 기반 공개 플랫폼입니다.',
    language: 'TypeScript',
    status: 'live',
    statusLabel: '라이브',
    repositoryUrl: 'https://github.com/dongjinshin-kookmin/dongjinshin-kookmin.github.io',
    liveUrl: 'https://dongjinshin-kookmin.github.io/',
    pageNote: 'gh-pages 배포 · HTTP 200 확인',
    startedAt: '2026.07.14',
    commits: [
      {
        sha: 'b5188fc',
        date: '2026.07.19',
        message: 'Organize complete public GitHub work archive',
        branch: 'main',
      },
      {
        sha: '31f20d0',
        date: '2026.07.16',
        message: 'Equalize hero navigation spacing',
        branch: 'main',
      },
      {
        sha: 'a878943',
        date: '2026.07.16',
        message: 'Refine hero navigation and title alignment',
        branch: 'main',
      },
      {
        sha: '872280e',
        date: '2026.07.15',
        message: 'Unify sections with pastel landscapes',
        branch: 'main',
      },
      {
        sha: '143b2e6',
        date: '2026.07.15',
        message: 'Refresh hero with cinematic video',
        branch: 'main',
      },
      {
        sha: 'bf525bd',
        date: '2026.07.15',
        message: 'Scale typography around center identity',
        branch: 'main',
      },
      {
        sha: 'c356b8d',
        date: '2026.07.15',
        message: 'Rebuild hero from center office photo',
        branch: 'main',
      },
      {
        sha: 'bd28b69',
        date: '2026.07.14',
        message: 'Unify sections with pixel motion',
        branch: 'main',
      },
      {
        sha: '6d43628',
        date: '2026.07.14',
        message: 'Brighten hero with pixel art office',
        branch: 'main',
      },
      {
        sha: '9e77118',
        date: '2026.07.14',
        message: 'Reframe homepage around center work',
        branch: 'main',
      },
      {
        sha: 'a97458e',
        date: '2026.07.14',
        message: 'Deploy Prisma landing page',
        branch: 'main',
      },
      {
        sha: '758729d',
        date: '2026.07.19',
        message: 'Deploy complete GitHub work archive',
        branch: 'gh-pages',
      },
      {
        sha: '0ed383f',
        date: '2026.07.16',
        message: 'Deploy equal navigation spacing',
        branch: 'gh-pages',
      },
      {
        sha: '8a00657',
        date: '2026.07.16',
        message: 'Deploy refined hero alignment',
        branch: 'gh-pages',
      },
      {
        sha: 'f398c09',
        date: '2026.07.15',
        message: 'Deploy pastel landscape sections',
        branch: 'gh-pages',
      },
      {
        sha: '2e76a6d',
        date: '2026.07.15',
        message: 'Deploy fresh cinematic hero',
        branch: 'gh-pages',
      },
      {
        sha: '6583ef0',
        date: '2026.07.15',
        message: 'Deploy center-first large typography',
        branch: 'gh-pages',
      },
      {
        sha: '3729d43',
        date: '2026.07.15',
        message: 'Deploy photo-based pixel office hero',
        branch: 'gh-pages',
      },
      {
        sha: '4145f5f',
        date: '2026.07.14',
        message: 'Deploy unified panels and pixel motion',
        branch: 'gh-pages',
      },
      {
        sha: '9147b2d',
        date: '2026.07.14',
        message: 'Deploy pixel art hero and single-column cards',
        branch: 'gh-pages',
      },
      {
        sha: 'fafee5a',
        date: '2026.07.14',
        message: 'Deploy center homepage content',
        branch: 'gh-pages',
      },
      {
        sha: '735ed67',
        date: '2026.07.14',
        message: 'Deploy Prisma landing page',
        branch: 'gh-pages',
      },
    ],
  },
  {
    id: 'markdown-editor',
    name: 'markdown-editor',
    displayName: '단독실행형 마크다운 에디터',
    area: 'platform',
    summary: '외부 라이브러리나 네트워크 없이 문서 작성, 분할 미리보기, 자동 저장과 파일 내보내기를 지원하는 단일 HTML 편집기입니다.',
    language: 'HTML',
    status: 'source',
    statusLabel: '소스 공개',
    repositoryUrl: 'https://github.com/dongjinshin-kookmin/markdown-editor',
    pageNote: 'Pages 설정 확인 · 2026.07.20 현재 HTTP 404',
    startedAt: '2026.07.19',
    commits: [
      {
        sha: '7d918b5',
        date: '2026.07.19',
        message: '마크다운 에디터 초기 공개 — 단독실행형 single-file 웹앱',
        branch: 'main',
      },
    ],
  },
  {
    id: 'digital-backdrop',
    name: 'digital-backdrop',
    displayName: '범용 디지털 백드롭',
    area: 'media',
    summary: '행사·세미나·협정식의 배경, 텍스트, 로고를 편집하고 메인/촬영 화면을 전환하는 단일 HTML 도구입니다.',
    language: 'HTML',
    status: 'live',
    statusLabel: '라이브',
    repositoryUrl: 'https://github.com/dongjinshin-kookmin/digital-backdrop',
    liveUrl: 'https://dongjinshin-kookmin.github.io/digital-backdrop/',
    pageNote: 'main 직접 배포 · HTTP 200 확인',
    startedAt: '2026.07.15',
    commits: [
      {
        sha: '64bcc12',
        date: '2026.07.16',
        message: '표시 화면의 페이지 전환 버튼 제거, 토글 방식으로 변경',
        branch: 'main',
      },
      {
        sha: '024b167',
        date: '2026.07.16',
        message: '기본 템플릿을 국민대학교 단독 범용 구성으로 변경',
        branch: 'main',
      },
      {
        sha: 'e517f2a',
        date: '2026.07.15',
        message: '디지털 백드롭 앱: 겹침 버그 수정 · 포토 페이지 · 자간 슬라이더',
        branch: 'main',
      },
    ],
  },
  {
    id: 'kmu-performance-system',
    name: 'kmu-performance-system',
    displayName: '성과관리 통합시스템',
    area: 'administration',
    summary: '교수·직원 평가, 지표 산식, 대시보드, 드릴다운과 역할별 흐름을 합성 데이터로 구현한 프로토타입입니다.',
    language: 'TypeScript',
    status: 'live',
    statusLabel: '라이브',
    repositoryUrl: 'https://github.com/dongjinshin-kookmin/kmu-performance-system',
    liveUrl: 'https://dongjinshin-kookmin.github.io/kmu-performance-system/',
    pageNote: 'gh-pages 배포 · HTTP 200 확인',
    startedAt: '2026.07.10',
    commits: [
      {
        sha: '370181d',
        date: '2026.07.15',
        message: 'feat: redesign dashboard with royal blue workspace',
        branch: 'main',
      },
      {
        sha: 'fc90550',
        date: '2026.07.14',
        message: 'feat: 대시보드 디자인 및 가독성 개선',
        branch: 'main',
      },
      {
        sha: '2c40e2d',
        date: '2026.07.13',
        message: 'fix: 페이지 전수 리뷰 발견 29건 수정 (A8·B11·C10)',
        branch: 'main',
      },
      {
        sha: 'f423773',
        date: '2026.07.10',
        message: 'README: 데모 제약(서버 필터 고정) 정확화',
        branch: 'main',
      },
      {
        sha: '3f1fdfa',
        date: '2026.07.10',
        message: 'GitHub Pages 정적 배포 구축 (Next.js static export)',
        branch: 'main',
      },
      {
        sha: 'e8e6b24',
        date: '2026.07.10',
        message: '국민대학교 성과관리통합시스템 웹앱 프로토타입',
        branch: 'main',
      },
      {
        sha: '481b09b',
        date: '2026.07.15',
        message: 'Deploy royal blue dashboard redesign',
        branch: 'gh-pages',
      },
      {
        sha: 'b3e4521',
        date: '2026.07.13',
        message: 'deploy: 페이지 리뷰 29건 수정 반영 (A/B/C)',
        branch: 'gh-pages',
      },
    ],
  },
  {
    id: 'nkust-mou-backdrop',
    name: 'nkust-mou-backdrop',
    displayName: 'KMU–NKUST 협정식 백드롭',
    area: 'media',
    summary: '범용 디지털 백드롭의 출발점이 된 2026년 7월 10일 국제교류 협정 체결식용 화면 기록입니다.',
    language: 'HTML',
    status: 'archive',
    statusLabel: '행사 기록',
    repositoryUrl: 'https://github.com/dongjinshin-kookmin/nkust-mou-backdrop',
    liveUrl: 'https://dongjinshin-kookmin.github.io/nkust-mou-backdrop/',
    pageNote: 'main 직접 배포 · HTTP 200 확인',
    startedAt: '2026.07.09',
    commits: [
      {
        sha: '6bde931',
        date: '2026.07.09',
        message: 'KMU-NKUST MOU 체결식 LED 배경화면',
        branch: 'main',
      },
    ],
  },
  {
    id: 'hrms',
    name: 'hrms',
    displayName: '인사발령 프로토타입',
    area: 'administration',
    summary: '조직도에서 직원 이동과 겸직 발령 흐름을 시뮬레이션한 초기 React 프로토타입입니다.',
    language: 'TypeScript',
    status: 'review',
    statusLabel: '공개 정리 검토',
    pageNote: '데모 데이터·소스 정리 전까지 홈페이지에서 링크 비활성',
    startedAt: '2026.01.29',
    commits: [
      { sha: '7306a2d', date: '2026.01.29', message: 'Add files via upload', branch: 'main' },
      { sha: '3b51f26', date: '2026.01.29', message: 'Initial commit', branch: 'main' },
    ],
  },
  {
    id: 'hrm_test',
    name: 'hrm_test',
    displayName: '인사 프로토타입 빌드 스냅샷',
    area: 'administration',
    summary: 'hrms와 동일한 빌드 자산을 보존한 초기 배포 테스트 저장소입니다.',
    language: 'HTML',
    status: 'review',
    statusLabel: '배포 테스트',
    pageNote: 'Pages 설정은 있지만 현재 HTTP 404 · 링크 비활성',
    startedAt: '2026.01.28',
    commits: [
      { sha: 'ae7165a', date: '2026.01.29', message: 'Add files via upload', branch: 'main' },
      { sha: '3d73ba0', date: '2026.01.28', message: 'Add files via upload', branch: 'main' },
    ],
  },
]

export const workRecords: WorkRecord[] = [
  {
    id: 'performance',
    number: '01',
    area: 'administration',
    eyebrow: 'AI · DATA SYSTEM',
    title: '성과관리 통합시스템',
    summary: '교수·직원의 성과 현황, 지표 산식과 평가 흐름을 합성 데이터로 탐색하는 통합 관리 시연 시스템입니다.',
    status: '라이브 프로토타입',
    repositoryIds: ['kmu-performance-system'],
    highlights: ['839개 정적 페이지·검증 19항목', '전수 리뷰 29건 반영', '역할별 평가·드릴다운 흐름'],
    note: '합성 데이터 기반 시연용으로, 실제 인증·운영 시스템이 아닙니다.',
    image: '/media/project-performance.jpg',
    imageAlt: '성과관리 통합시스템 총괄 대시보드',
    primaryUrl: 'https://dongjinshin-kookmin.github.io/kmu-performance-system/',
    primaryLabel: '라이브 데모',
  },
  {
    id: 'finance',
    number: '02',
    area: 'administration',
    eyebrow: 'FINANCE · DECISION SUPPORT',
    title: '교비회계 수지분석 대시보드',
    summary: '공개 재정·교육 데이터로 344개 대학의 2016–2024년 자금계산서를 구조화해 수지구조, 위기 진단, 계정 벤치마크와 입학정원 감축 시뮬레이션을 연결합니다.',
    status: 'v9 라이브',
    repositoryIds: ['univ-finance-dashboard'],
    highlights: ['344개 대학·2016–2024 비교', '10개 KPI·전 계정 벤치마크', '감축 시나리오·백테스트 검증'],
    note: '감축 시뮬레이션은 공개 데이터와 가정 기반 베타이며, 회계 판단은 원문과 전문가 검토가 필요합니다.',
    image: '/media/project-finance.jpg',
    imageAlt: '교비회계 수지분석 대시보드 홈 화면',
    primaryUrl: 'https://dongjinshin-kookmin.github.io/univ-finance-dashboard/',
    primaryLabel: '대시보드 보기',
  },
  {
    id: 'timetable',
    number: '03',
    area: 'administration',
    eyebrow: 'SCHEDULING · WORKFLOW',
    title: '시간표 편성 시스템',
    summary: '분반 수요와 교수·강의실 조건을 연결하고, 충돌과 분반 조합을 검사하는 글로벌인문·지역대학 데모입니다.',
    status: '라이브 데모',
    repositoryIds: ['timetable-app'],
    highlights: ['분반 산정·교수 선점', '강의실 배치·충돌 검사', '엑셀 입출력 흐름'],
    note: '합성·익명화 데모 데이터로 구성했으며, 2026.07.19부터 GitHub Pages에서 둘러볼 수 있습니다.',
    image: '/media/project-timetable.jpg',
    imageAlt: '시간표 편성 시스템 관리자 둘러보기 접속 화면',
    primaryUrl: 'https://dongjinshin-kookmin.github.io/timetable-app/',
    primaryLabel: '라이브 데모',
  },
  {
    id: 'training',
    number: '04',
    area: 'education',
    eyebrow: 'AI · ORGANIZATIONAL LEARNING',
    title: 'AI 기술과 활용 직원교육',
    summary: 'AI 기술 현황, 행정업무 활용과 실습을 4개 강의로 구성하고, FactChat 실습 자료와 결과보고서·디자인 가이드를 연결한 인터랙티브 웹덱입니다.',
    status: '69섹션 공개본',
    repositoryIds: ['kmu-ai-staff-training'],
    highlights: ['4개 강의·통합본 69섹션', '결과보고서·디자인 가이드 15종', 'FactChat 시연·결과물 2종'],
    note: '2026.07.23 교육용 공개본을 2026.07.20에 재조립했으며, 연결 자료는 공개 범위를 기준으로 관리합니다.',
    image: '/media/project-training.jpg',
    imageAlt: 'AI 기술과 활용 직원교육 웹 콘텐츠',
    primaryUrl: 'https://dongjinshin-kookmin.github.io/kmu-ai-staff-training/',
    primaryLabel: '교육 콘텐츠',
  },
  {
    id: 'backdrop',
    number: '05',
    area: 'media',
    eyebrow: 'EVENT · INTERACTIVE DISPLAY',
    title: '행사 화면에서 범용 도구로, 디지털 백드롭',
    summary: 'KMU–NKUST 협정식용 화면에서 출발해, 행사·세미나·협정식에 재사용할 수 있는 단일 HTML 편집 도구로 확장했습니다.',
    status: '2개 공개 저장소',
    repositoryIds: ['digital-backdrop', 'nkust-mou-backdrop'],
    highlights: ['메인·촬영 화면 전환', '텍스트·로고·자간 화면 편집', '별도 서버 없는 단일 HTML'],
    note: '행사별 화면과 범용 도구를 분리해 제작물 기록과 재사용 버전을 모두 보존합니다.',
    image: '/media/project-backdrop.jpg',
    imageAlt: '범용 디지털 백드롭 기본 협정식 화면',
    primaryUrl: 'https://dongjinshin-kookmin.github.io/digital-backdrop/',
    primaryLabel: '범용 도구 보기',
  },
  {
    id: 'higgsfield',
    number: '06',
    area: 'media',
    eyebrow: 'GENERATIVE MEDIA R&D',
    title: 'Higgsfield 비주얼 R&D',
    summary: '세로형 옥외 LED 매체를 가정해 스토리보드, 이미지 레퍼런스, 키프레임과 영상 시안을 반복한 생성 미디어 제작 연구입니다.',
    status: 'GitHub 외 R&D · 진행 중',
    repositoryIds: [],
    highlights: ['v1–v5 키프레임 75장', '최신 v5 추상 콘셉트 16장', '프롬프트·레퍼런스·채택 근거 기록'],
    note: 'GitHub 통계에서는 제외한 AI 생성 콘셉트 연구입니다. 현재 키프레임 단계며 최종 영상은 제작 중입니다.',
    image: '/media/lab-organic.jpg',
    imageAlt: '녹색과 금색의 AI 생성 추상 키프레임',
  },
  {
    id: 'markdown',
    number: '07',
    area: 'platform',
    eyebrow: 'WRITING · LOCAL-FIRST TOOL',
    title: '단독실행형 마크다운 에디터',
    summary: '파일 하나로 실행해 문서를 작성하고, 실시간 분할 미리보기와 다중 문서 자동 저장, 마크다운·HTML 내보내기를 지원합니다.',
    status: '신규 소스 공개',
    repositoryIds: ['markdown-editor'],
    highlights: ['외부 라이브러리·네트워크 0', '3가지 보기·스크롤 동기화', '다중 문서 자동저장·파일 입출력'],
    note: 'GitHub 저장소는 공개되어 있으며, Pages 주소는 2026.07.20 현재 404로 확인되어 소스 링크만 제공합니다.',
    image: '/media/project-markdown.jpg',
    imageAlt: '마크다운 에디터의 문서 목록, 편집기와 실시간 미리보기',
    primaryUrl: 'https://github.com/dongjinshin-kookmin/markdown-editor',
    primaryLabel: '저장소 보기',
  },
  {
    id: 'homepage',
    number: '08',
    area: 'platform',
    eyebrow: 'PUBLIC ARCHIVE · PLATFORM',
    title: '센터 홈페이지와 공개 작업 아카이브',
    summary: '대표 결과물을 보여주는 화면에서 출발해, 저장소별 상태와 기본·배포 브랜치 기록까지 확인하는 센터의 공개 인덱스로 확장합니다.',
    status: '공개 운영 중',
    repositoryIds: ['dongjinshin-kookmin.github.io'],
    highlights: ['10개 공개 저장소 통합', '56건 작업·13건 배포 기록 분리', '저장소별 전체 커밋 접기/펼치기'],
    note: '집계값은 2026.07.20 22:36 KST에 캡처한 공개 GitHub 스냅샷입니다.',
    primaryUrl: 'https://github.com/dongjinshin-kookmin/dongjinshin-kookmin.github.io',
    primaryLabel: '홈페이지 소스',
  },
]

export function commitUrl(repository: RepositoryRecord, commit: CommitRecord) {
  return `https://github.com/dongjinshin-kookmin/${repository.name}/commit/${commit.sha}`
}

export function sourceCommitCount(repository: RepositoryRecord) {
  return repository.commits.filter((commit) => commit.branch === 'main').length
}

export function deployCommitCount(repository: RepositoryRecord) {
  return repository.commits.filter((commit) => commit.branch === 'gh-pages').length
}
