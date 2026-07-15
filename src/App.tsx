import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Check, Github } from 'lucide-react'
import { useRef, type ReactNode } from 'react'
import { ScrollOpacityText } from './components/ScrollOpacityText'
import { WordsPullUpMultiStyle } from './components/WordsPullUp'

const GITHUB_PROFILE = 'https://github.com/dongjinshin-kookmin'
const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260714_113715_c7e0daa0-8bdd-4486-a2da-040901f8f0ea.mp4'

const navItems = [
  { label: '소개', href: '#about' },
  { label: '프로젝트', href: '#projects' },
  { label: '과정', href: '#process' },
  { label: '원칙', href: '#principles' },
  { label: 'GitHub ↗', href: GITHUB_PROFILE, external: true },
]

const proofStats = [
  { value: '839', label: '정적 페이지', note: '성과관리 현재 빌드' },
  { value: '48', label: '교육 장면', note: '직원교육 현행 구성' },
  { value: '75', label: '키프레임', note: 'Higgsfield v1–v5 반복' },
  { value: '3', label: '공개 데모', note: 'Pages에서 운영 중' },
]

const projects = [
  {
    number: '01',
    status: 'PUBLIC DEMO',
    category: 'AI · DATA SYSTEM',
    title: '성과관리 통합시스템',
    summary:
      '합성 데이터를 기반으로 교수·직원의 성과 현황과 평가 흐름을 탐색하는 통합 관리 시연 시스템입니다.',
    image: '/media/project-performance.jpg',
    imagePosition: 'center',
    alt: '합성 데이터로 구성된 국민대학교 성과관리 통합시스템 총괄 대시보드',
    highlights: [
      '839개 정적 페이지 · 검증 19항목 통과',
      '개인·부서 성과카드와 지표 분석',
      '평가 워크플로와 역할별 화면 시뮬레이션',
    ],
    note: '합성 데이터 기반 프로토타입이며 실제 인증 시스템이 아닙니다.',
    href: 'https://dongjinshin-kookmin.github.io/kmu-performance-system/',
    linkLabel: '라이브 데모 보기',
    external: true,
  },
  {
    number: '02',
    status: 'EDUCATION',
    category: 'AI · ORGANIZATIONAL LEARNING',
    title: 'AI 기술과 활용 교육',
    summary:
      'AI 기술의 현황부터 행정업무 활용과 실습까지 한 흐름으로 구성한 직원교육용 인터랙티브 웹 콘텐츠입니다.',
    image: '/media/project-training.jpg',
    imagePosition: 'center',
    alt: 'AI 기술과 활용 직원교육 웹 콘텐츠의 첫 화면',
    highlights: [
      '기술 현황 → 업무 활용 → 실습의 3부 구성',
      '48개 장면으로 구성된 현행 웹덱',
      '사례 영상과 업무 시연 앱 연결',
    ],
    note: '교육용 공개본이며 연결 자료는 출처와 공개 범위를 기준으로 관리합니다.',
    href: 'https://dongjinshin-kookmin.github.io/kmu-ai-staff-training/',
    linkLabel: '교육 웹 콘텐츠 보기',
    external: true,
  },
  {
    number: '03',
    status: 'EVENT DISPLAY',
    category: 'INTERACTIVE · EVENT',
    title: 'KMU–NKUST MOU',
    summary:
      '국제교류 협정 체결식의 행사 정보와 기관 이미지를 대형 화면에 맞게 구성한 웹 기반 디지털 백드롭입니다.',
    image: '/media/project-mou.jpg',
    imagePosition: 'center',
    alt: 'KMU-NKUST 국제교류 협정 체결식 디지털 백드롭 화면',
    highlights: [
      '2026.07.10 협정 체결식 현장 화면',
      '클릭·키보드로 전환하는 2개 장면',
      '별도 서버 없이 실행되는 정적 HTML',
    ],
    note: '행사 현장에서 사용하고 GitHub Pages에 공개한 화면 기록입니다.',
    href: 'https://dongjinshin-kookmin.github.io/nkust-mou-backdrop/',
    linkLabel: '공개 화면 보기',
    external: true,
  },
  {
    number: '04',
    status: 'LAB · IN PROGRESS',
    category: 'GENERATIVE MEDIA R&D',
    title: 'Higgsfield 비주얼 R&D',
    summary:
      '세로형 옥외 LED 매체를 가정해 스토리보드, 이미지 레퍼런스, 키프레임과 영상 시안을 반복한 제작 연구입니다.',
    image: '/media/lab-organic.jpg',
    imagePosition: 'center',
    alt: '바이오 구조를 연상시키는 녹색과 금색의 AI 생성 추상 키프레임',
    highlights: [
      'v1–v5에 걸친 키프레임 75장 탐색',
      '최신 v5 추상 콘셉트 키프레임 16장',
      '프롬프트·레퍼런스 연결·채택 근거 기록',
    ],
    note: 'AI 생성 콘셉트 이미지입니다. 최신 안은 키프레임 단계이며 최종 영상은 제작 중입니다.',
    href: '#process',
    linkLabel: '제작 과정 보기',
    external: false,
  },
]

const stages = [
  {
    number: '01',
    period: '2025.05 — 09',
    title: '실험',
    english: 'Experiment',
    body: '이미지·음성·영상 생성으로 표현 가능성을 탐색하고, 교육과 행사에 적용할 작은 시안을 만들었습니다.',
  },
  {
    number: '02',
    period: '2025.09 — 2026.02',
    title: '적용',
    english: 'Apply',
    body: '바이브코딩, 데이터 구조화, 업무 보조 프로토타입으로 AI가 실제 흐름 안에서 작동하도록 설계했습니다.',
  },
  {
    number: '03',
    period: '2026.03 — NOW',
    title: '확산',
    english: 'Scale',
    body: '대외 송출 콘텐츠, 공개 데모, 직원교육으로 결과를 공유하고 조직이 다시 활용할 수 있는 형태로 확장합니다.',
  },
]

const principles = [
  {
    number: '01',
    title: '실제 문제부터',
    body: '도구보다 사용자, 업무, 매체의 문제와 제약, 성공 기준을 먼저 정의합니다.',
  },
  {
    number: '02',
    title: '공개 데이터는 안전하게',
    body: '공개 데모에는 실명·사번·성적·결재정보 대신 합성 데이터와 예시 자료를 사용합니다.',
  },
  {
    number: '03',
    title: '사람의 검증을 거쳐',
    body: 'AI 초안은 원문 대조, 계산 확인, 화면 검수와 담당자의 판단을 거쳐 사용합니다.',
  },
  {
    number: '04',
    title: 'AI 사용을 분명하게',
    body: '생성·복원·TTS·립싱크가 쓰인 결과물에는 사용 사실과 출처, 현재 한계를 밝힙니다.',
  },
]

function CenterMark() {
  return (
    <svg viewBox="0 0 256 256" className="h-6 w-6" aria-hidden="true">
      <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z" fill="currentColor" />
      <path d="M 256 128 L 128 128 L 0 0 L 128 0 Z" fill="currentColor" />
    </svg>
  )
}

function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const primaryTitle = ['국', '민', '대', '학', '교']
  const secondaryTitle = ['디', '지', '털', 'AI', '혁', '신', '센', '터']
  const titleTransition = (delay: number) => ({
    duration: shouldReduceMotion ? 0 : 0.75,
    delay: shouldReduceMotion ? 0 : delay,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  })

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="hero-viewport relative flex min-h-[680px] w-full flex-col overflow-hidden bg-[#eeebfb] text-[#1B133C]"
    >
      <video
        src={HERO_VIDEO}
        autoPlay={!shouldReduceMotion}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 z-0 h-[130%] w-full object-cover object-top"
        aria-hidden="true"
      />
      <div className="hero-video-wash pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />

      <a
        href="#about"
        className="absolute left-4 top-4 z-50 -translate-y-24 rounded-xl bg-white px-4 py-2 text-base font-semibold text-[#1B133C] shadow-sm transition-transform focus:translate-y-0"
      >
        본문 바로가기
      </a>

      <div className="relative z-20 flex justify-center px-4 pt-4 md:pt-6">
        <nav
          aria-label="주요 메뉴"
          className="inline-flex items-center rounded-xl border border-white/60 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-md md:px-6"
        >
          <a
            href="#hero"
            aria-label="국민대학교 디지털AI혁신센터 홈"
            className="rounded-sm text-[#1B133C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B133C]"
          >
            <CenterMark />
          </a>
          <div className="ml-7 hidden items-center gap-6 whitespace-nowrap sm:flex md:ml-10 md:gap-9">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                className="rounded-sm text-sm font-medium text-[#1B133C]/80 transition-colors duration-300 hover:text-[#1B133C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B133C]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div className="relative z-10 mx-auto mt-8 flex w-full flex-1 flex-col items-center px-5 text-center md:mt-14 md:px-8">
        <motion.div
          className="mb-6 inline-flex max-w-full items-center gap-2.5 rounded-xl border border-[#1B133C]/10 bg-white/70 px-4 py-2 text-xs font-medium text-[#1B133C] shadow-sm backdrop-blur-sm sm:text-sm"
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={titleTransition(0.1)}
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-orange-500 text-xs font-bold text-white">
            K
          </span>
          <span>Kookmin University · Since 2025</span>
        </motion.div>

        <h1
          id="hero-title"
          aria-label="국민대학교 디지털AI혁신센터"
          className="hero-institution-title w-[86vw] max-w-[800px] text-[#1B133C]"
        >
          <motion.span
            aria-hidden="true"
            className="flex w-full items-center justify-between whitespace-nowrap text-[16vw] font-extrabold leading-[0.9] sm:text-[14vw] lg:text-[clamp(7.25rem,8.5vw,8rem)]"
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={titleTransition(0.2)}
          >
            {primaryTitle.map((character, index) => (
              <span key={`${character}-${index}`}>{character}</span>
            ))}
          </motion.span>
          <motion.span
            aria-hidden="true"
            className="mt-1 flex w-full items-center justify-between whitespace-nowrap text-[10.3vw] font-light leading-[0.95] sm:text-[9vw] lg:text-[clamp(4.7rem,5.5vw,5.2rem)]"
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={titleTransition(0.3)}
          >
            {secondaryTitle.map((character, index) => (
              <span key={`${character}-${index}`}>{character}</span>
            ))}
          </motion.span>
        </h1>

        <motion.p
          className="mt-5 max-w-3xl text-sm leading-relaxed text-[#1B133C]/70 sm:mt-6 sm:text-base md:text-lg"
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={titleTransition(0.45)}
        >
          국민대학교 디지털AI혁신센터는 생성형 AI·데이터·자동화 기술을 행정, 교육,
          콘텐츠 제작의 실제 문제에 연결합니다.
        </motion.p>

        <motion.a
          href="#projects"
          className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[#FEFEFE] px-6 py-3 text-sm font-semibold text-[#1B133C] shadow-[0px_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_6px_16px_rgba(0,0,0,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B133C] sm:mt-8 sm:px-8 sm:py-3.5 sm:text-base"
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={titleTransition(0.6)}
        >
          프로젝트 살펴보기
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </motion.a>
      </div>
    </section>
  )
}

type SectionTone = 'coral' | 'mint' | 'sky' | 'gold'

type SectionShellProps = {
  id: string
  labelledBy: string
  tone: SectionTone
  children: ReactNode
  noise?: boolean
}

function SectionShell({ id, labelledBy, tone, children, noise = false }: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className="bg-black px-4 py-8 md:px-6 md:py-10 lg:py-12"
    >
      <div
        className={`section-panel section-panel--${tone} relative mx-auto max-w-[1400px] overflow-hidden rounded-2xl md:rounded-[2rem]`}
      >
        {noise ? (
          <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true" />
        ) : null}
        {children}
      </div>
    </section>
  )
}

function About() {
  const bodyCopy =
    '2025년부터 이미지·음성·영상 생성, 바이브코딩, 데이터 시스템, 직원교육을 실제 업무와 행사에 적용해 왔습니다. 완성된 화면뿐 아니라 문제 정의, 제약, 반복 과정, 그리고 AI의 결과를 사람이 어떻게 검증했는지까지 함께 기록합니다.'

  return (
    <SectionShell id="about" labelledBy="about-title" tone="coral">
      <div className="relative z-10 flex flex-col items-center px-5 py-14 text-center sm:px-7 md:px-10 md:py-16 lg:px-14 lg:py-20">
        <p className="section-kicker mb-7 text-xs font-bold uppercase tracking-[0.12em] sm:text-sm sm:tracking-[0.16em] md:mb-9">
          Kookmin University · Digital AI Innovation Center
        </p>

        <WordsPullUpMultiStyle
          as="h2"
          id="about-title"
          className="mx-auto max-w-5xl justify-center text-center text-[clamp(2.25rem,12vw,3rem)] font-normal leading-[1.02] text-primary sm:leading-[0.98] md:text-6xl lg:text-7xl"
          segments={[
            { text: 'AI를 보여 주는 것에서,', className: 'font-normal' },
            {
              text: 'making it work.',
              className: 'section-accent-text font-serif italic',
              breakBefore: true,
            },
            {
              text: '실험을 적용으로, 적용을 조직의 역량으로 확장합니다.',
              className: 'font-normal',
              breakBefore: true,
            },
          ]}
        />

        <ScrollOpacityText
          text={bodyCopy}
          className="mt-10 max-w-4xl text-base leading-[1.85] text-[#DEDBC8] sm:text-lg md:mt-12 md:text-xl lg:text-2xl"
        />

        <dl className="about-proof-grid mt-10 grid w-full grid-cols-2 gap-2 text-left md:mt-14 md:grid-cols-4">
          {proofStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col rounded-xl border border-white/[0.07] bg-black/20 px-3 py-5 sm:px-5 md:py-6"
            >
              <dt className="order-2 mt-3 text-sm font-bold text-primary/85 sm:text-base">{stat.label}</dt>
              <dd className="order-1 text-[clamp(3rem,13vw,3.75rem)] font-light tracking-[-0.06em] text-primary lg:text-7xl">
                {stat.value}
              </dd>
              <dd className="order-3 mt-1 text-xs leading-relaxed text-gray-400 sm:text-sm">{stat.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </SectionShell>
  )
}

type AnimatedCardProps = {
  children: ReactNode
  className?: string
  delay?: number
  labelledBy?: string
}

function AnimatedCard({ children, className = '', delay = 0, labelledBy }: AnimatedCardProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      ref={ref}
      aria-labelledby={labelledBy}
      className={className}
      initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : undefined}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.article>
  )
}

function Projects() {
  return (
    <SectionShell id="projects" labelledBy="projects-title" tone="mint" noise>
      <div className="relative z-10 px-5 py-14 sm:px-7 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <p className="section-kicker mb-6 text-xs font-bold uppercase tracking-[0.12em] sm:text-sm sm:tracking-[0.16em]">
          Selected work · 주요 프로젝트
        </p>
        <div className="mb-10 flex flex-col gap-6 md:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <WordsPullUpMultiStyle
            as="h2"
            id="projects-title"
            className="max-w-5xl justify-start text-left text-[clamp(2.25rem,12vw,3rem)] font-normal leading-[1.02] sm:leading-[0.98] md:text-6xl lg:text-7xl"
            segments={[
              { text: '실험을 넘어, 작동하는 결과로.', className: 'text-[#E1E0CC]' },
              {
                text: '공개 가능한 프로젝트부터 투명하게 보여드립니다.',
                className: 'text-gray-500',
                breakBefore: true,
              },
            ]}
          />
          <p className="max-w-lg text-sm leading-[1.75] text-gray-400 sm:text-base md:text-lg">
            상태, 제약, 데이터 범위를 구분해 공개합니다. 수치는 현재 빌드와 작업 기록을 기준으로
            확인했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-5">
          {projects.map((project, index) => (
            <AnimatedCard
              key={project.number}
              delay={index * 0.1}
              labelledBy={`project-${project.number}-title`}
              className="group overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-black/25 md:grid md:grid-cols-12 md:rounded-[1.75rem]"
            >
              <div className="project-media relative aspect-[16/10] overflow-hidden bg-[#212121] md:col-span-5 md:aspect-auto md:min-h-[400px] lg:min-h-[440px]">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025]"
                  style={{ objectPosition: project.imagePosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/45" aria-hidden="true" />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/70 px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] text-primary backdrop-blur sm:left-5 sm:top-5 sm:text-xs">
                  {project.status}
                </div>
                <span className="absolute right-4 top-4 text-xs font-bold tracking-[0.14em] text-primary/65 sm:right-5 sm:top-5 sm:text-sm">
                  ({project.number})
                </span>
              </div>

              <div className="min-w-0 p-6 sm:p-7 md:col-span-7 md:flex md:flex-col md:justify-center md:p-8 lg:p-10">
                <p className="text-[10px] font-bold tracking-[0.1em] text-gray-400 sm:text-xs sm:tracking-[0.14em] md:text-sm">
                  {project.category}
                </p>
                <h3
                  id={`project-${project.number}-title`}
                  className="mt-3 text-[clamp(1.875rem,8vw,2.25rem)] font-normal tracking-[-0.045em] text-primary md:text-5xl"
                >
                  {project.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-[1.75] text-gray-400 sm:text-lg md:text-xl">
                  {project.summary}
                </p>

                <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-400 sm:text-base">
                      <Check size={16} strokeWidth={1.5} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-l border-primary/40 pl-3 text-xs leading-relaxed text-gray-400 sm:text-sm">
                  {project.note}
                </p>

                <a
                  href={project.href}
                  target={project.external ? '_blank' : undefined}
                  rel={project.external ? 'noreferrer' : undefined}
                  className="mt-7 inline-flex items-center gap-2 rounded-sm text-sm font-bold text-primary/85 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-base"
                  aria-label={`${project.title} — ${project.linkLabel}${project.external ? ' (새 창)' : ''}`}
                >
                  {project.linkLabel}
                  {project.external ? <ArrowUpRight size={16} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />}
                </a>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

function Process() {
  return (
    <SectionShell id="process" labelledBy="process-title" tone="sky">
      <div className="relative z-10">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-14 sm:px-7 md:px-8 md:py-16 lg:px-10 lg:py-20">
            <p className="section-kicker text-xs font-bold uppercase tracking-[0.12em] sm:text-sm sm:tracking-[0.16em]">
              From experiment to impact · 2025—Now
            </p>
            <WordsPullUpMultiStyle
              as="h2"
              id="process-title"
              className="mt-8 justify-start text-left text-[clamp(2.75rem,12.5vw,3.75rem)] font-normal leading-[1] sm:leading-[0.95] md:text-7xl xl:text-8xl"
              segments={[
                { text: 'Experiment.', className: 'section-accent-text font-serif italic' },
                { text: 'Apply.', className: 'section-accent-text font-serif italic' },
                { text: 'Scale.', className: 'section-accent-text font-serif italic' },
                {
                  text: '실험을 기록하고, 실제 흐름에 적용하고, 다시 쓸 수 있게 확장합니다.',
                  className: 'text-gray-500',
                  breakBefore: true,
                },
              ]}
            />
            <p className="mt-8 max-w-2xl text-base leading-[1.8] text-gray-400 sm:text-lg lg:text-xl">
              도구 목록보다 문제 해결의 흐름을 남깁니다. 채택안과 탈락안, 검증 과정과 다음
              단계까지 기록해야 한 번의 실험이 조직의 자산이 됩니다.
            </p>
          </div>

          <figure className="relative min-h-[420px] overflow-hidden lg:min-h-[600px]">
            <img
              src="/media/lab-gyro.jpg"
              alt="빛나는 자이로 구조의 AI 생성 로보틱스 추상 키프레임"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-xs leading-relaxed text-primary/70 sm:p-8 sm:text-sm">
              AI 생성 콘셉트 키프레임 · Higgsfield R&D v5 · 진행 중 · 최종 영상 없음
            </figcaption>
          </figure>
        </div>

        <ol className="grid border-t border-white/10 md:grid-cols-3">
          {stages.map((stage, index) => (
            <li
              key={stage.number}
              className={`process-stage bg-black/10 p-6 sm:p-8 md:p-10 ${index < stages.length - 1 ? 'border-b border-white/10 md:border-b-0 md:border-r' : ''}`}
            >
              <div className="flex items-center justify-between gap-4 text-xs font-bold tracking-[0.1em] text-gray-400 lg:text-sm">
                <span>({stage.number})</span>
                <span>{stage.period}</span>
              </div>
              <p className="mt-10 font-serif text-3xl italic text-primary/60 md:text-[2rem] lg:text-4xl xl:text-5xl">{stage.english}</p>
              <h3 className="mt-1 text-4xl font-normal tracking-[-0.04em] text-primary md:text-5xl lg:text-6xl">{stage.title}</h3>
              <p className="mt-5 text-base leading-[1.8] text-gray-400 lg:text-lg">{stage.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  )
}

function Principles() {
  return (
    <SectionShell id="principles" labelledBy="principles-title" tone="gold" noise>
      <div className="relative z-10 px-5 py-14 sm:px-7 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <p className="section-kicker text-xs font-bold uppercase tracking-[0.12em] sm:text-sm sm:tracking-[0.16em]">
          Principles · AI 활용 원칙
        </p>
        <WordsPullUpMultiStyle
          as="h2"
          id="principles-title"
          className="mt-8 max-w-5xl justify-start text-left text-[clamp(2.75rem,12.5vw,3.75rem)] font-normal leading-[1] sm:leading-[0.95] md:text-7xl xl:text-8xl"
          segments={[
            { text: '빠르게 만들되,', className: 'text-primary' },
            { text: '책임을 생략하지 않습니다.', className: 'text-gray-500', breakBefore: true },
          ]}
        />

        <ol className="mt-10 grid gap-2 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
          {principles.map((principle) => (
            <li
              key={principle.number}
              className="principle-card min-h-[280px] rounded-xl border border-white/[0.07] bg-black/20 p-6 sm:min-h-[300px] sm:p-8 lg:min-h-[340px]"
            >
              <span className="text-xs font-bold tracking-[0.14em] text-gray-400 sm:text-sm">({principle.number})</span>
              <h3 className="mt-16 text-2xl font-normal tracking-[-0.035em] text-primary sm:text-3xl lg:text-4xl">
                {principle.title}
              </h3>
              <p className="mt-4 text-sm leading-[1.8] text-gray-400 sm:text-base lg:text-lg">{principle.body}</p>
            </li>
          ))}
        </ol>

        <div id="contact" className="mt-10 overflow-hidden rounded-[1.5rem] bg-primary p-6 text-black sm:p-10 md:mt-12 md:rounded-[1.75rem] md:p-14">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-black/70 sm:text-sm sm:tracking-[0.16em]">
                Open work archive
              </p>
              <h2 className="mt-5 max-w-4xl text-[clamp(3rem,14vw,3.75rem)] font-normal leading-[1] tracking-[-0.04em] sm:leading-[0.95] md:text-7xl lg:text-8xl">
                AI를 보여 주는 것에서, 일하게 하는 것까지.
              </h2>
            </div>
            <div className="flex flex-col items-start gap-5 lg:col-span-4">
              <p className="text-base leading-[1.7] text-black/65 sm:text-lg lg:text-xl">
                공개 가능한 작업과 소스, 라이브 데모는 GitHub에서 계속 업데이트합니다.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={GITHUB_PROFILE}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-black py-1 pl-5 pr-1 text-base font-medium text-primary transition-[gap] duration-300 motion-safe:hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:text-lg"
                >
                  <Github size={16} aria-hidden="true" />
                  GitHub 보기
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-black transition-transform duration-300 motion-safe:group-hover:scale-110 sm:h-10 sm:w-10">
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </a>
                <a
                  href="https://www.kookmin.ac.kr/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/20 px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:text-base"
                >
                  국민대학교
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 text-primary/60 md:px-6">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-base font-bold text-primary sm:text-lg">국민대학교 디지털AI혁신센터</p>
          <p className="mt-2 max-w-lg text-xs leading-relaxed text-gray-400 sm:text-sm">
            AI 생성·복원 콘텐츠와 프로토타입의 상태는 각 프로젝트에서 별도로 표시합니다.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-bold tracking-[0.1em] sm:text-sm">
          <a href="#hero" className="transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            TOP
          </a>
          <a href="#principles" className="transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            AI 원칙
          </a>
          <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            GITHUB ↗
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <main id="main-content" className="overflow-x-hidden bg-black">
        <Hero />
        <About />
        <Projects />
        <Process />
        <Principles />
      </main>
      <Footer />
    </>
  )
}
