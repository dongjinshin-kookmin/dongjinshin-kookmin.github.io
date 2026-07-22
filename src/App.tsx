import { motion, useInView, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  GitBranch,
  Github,
  Globe2,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react'
import { useRef, type ReactNode } from 'react'
import { ScrollOpacityText } from './components/ScrollOpacityText'
import { WordsPullUpMultiStyle } from './components/WordsPullUp'
import {
  archiveSnapshot,
  commitUrl,
  deployCommitCount,
  repositories,
  sourceCommitCount,
  workAreas,
  workRecords,
  type RepositoryRecord,
  type WorkRecord,
} from './data/githubPortfolio'

const GITHUB_PROFILE = 'https://github.com/dongjinshin-kookmin'
const DESIGN_DICTIONARY_URL = '/design-dictionary/'
const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260714_113715_c7e0daa0-8bdd-4486-a2da-040901f8f0ea.mp4'

const navItems = [
  { label: '소개', href: '#about' },
  { label: '작업 분야', href: '#projects' },
  { label: '작업 이력', href: '#archive', expandsArchive: true },
  { label: '원칙', href: '#principles' },
  {
    label: '디자인 사전 ↗',
    href: DESIGN_DICTIONARY_URL,
    external: true,
  },
  { label: 'GitHub ↗', href: GITHUB_PROFILE, external: true },
]

const proofStats = [
  {
    value: String(archiveSnapshot.publicRepositories),
    label: '공개 저장소',
    note: '공개 기본 브랜치 전수 확인',
  },
  {
    value: String(archiveSnapshot.sourceCommits),
    label: '작업 커밋',
    note: '기본 브랜치 · 배포 이력 제외',
  },
  {
    value: String(archiveSnapshot.deployCommits),
    label: '배포 커밋',
    note: 'gh-pages 브랜치 별도 집계',
  },
  {
    value: String(archiveSnapshot.livePages),
    label: '라이브 Pages',
    note: 'HTTP 200 확인 · 정리 검토 1개 포함',
  },
]

function openWorkHistory() {
  const archive = document.querySelector<HTMLDetailsElement>('#archive')
  if (archive) archive.open = true
}

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
    <svg viewBox="0 0 256 256" className="h-7 w-7" aria-hidden="true">
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
          className="inline-flex w-auto items-center rounded-2xl border border-white/60 bg-white/70 px-5 py-3.5 shadow-sm backdrop-blur-md sm:grid sm:w-[min(96vw,880px)] sm:grid-cols-7 sm:px-6 md:px-8 md:py-4"
        >
          <a
            href="#hero"
            aria-label="국민대학교 디지털AI혁신센터 홈"
            className="rounded-sm text-[#1B133C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B133C] sm:justify-self-center"
          >
            <CenterMark />
          </a>
          <div className="ml-5 flex items-center gap-4 text-sm font-semibold sm:hidden">
            <a href="#projects" className="text-[#1B133C]/80">작업</a>
            <a href="#archive" onClick={openWorkHistory} className="text-[#1B133C]/80">이력</a>
          </div>
          <div className="hidden whitespace-nowrap sm:contents">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={item.expandsArchive ? openWorkHistory : undefined}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                className="rounded-sm text-xs font-medium text-[#1B133C]/80 transition-colors duration-300 hover:text-[#1B133C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B133C] sm:justify-self-center md:text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div className="relative z-10 mx-auto mt-8 flex w-full flex-1 flex-col items-center px-4 text-center sm:mt-9 sm:px-6 md:mt-10 md:px-8">
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
            className="hero-title-line hero-title-line--primary whitespace-nowrap text-[16vw] font-extrabold sm:text-[14vw] lg:text-[clamp(7.25rem,8.5vw,8rem)]"
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
            className="hero-title-line hero-title-line--secondary mt-1 whitespace-nowrap text-[10.3vw] font-light sm:text-[9vw] lg:text-[clamp(4.7rem,5.5vw,5.2rem)]"
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              x: 0.95,
              y: shouldReduceMotion ? 0 : 20,
              scaleX: 1.013,
            }}
            animate={{ opacity: 1, x: 0.95, y: 0, scaleX: 1.013 }}
            transition={titleTransition(0.3)}
          >
            {secondaryTitle.map((character, index) => (
              <span key={`${character}-${index}`}>{character}</span>
            ))}
          </motion.span>
        </h1>

        <motion.p
          className="mt-6 max-w-[900px] text-base leading-[1.65] text-[#1B133C]/70 sm:mt-7 sm:text-lg md:text-xl"
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={titleTransition(0.45)}
        >
          생성형 AI·데이터·자동화 기술을 행정, 교육, 콘텐츠 제작의 실제 문제에 연결하고,
          그 결과와 변경 이력을 함께 공개합니다.
        </motion.p>

        <motion.a
          href="#projects"
          className="group mt-8 inline-flex items-center gap-2.5 rounded-xl bg-[#FEFEFE] px-8 py-3.5 text-base font-semibold text-[#1B133C] shadow-[0px_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_6px_16px_rgba(0,0,0,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B133C] sm:px-9 sm:py-4"
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={titleTransition(0.6)}
        >
          전체 작업 인덱스
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
      className="bg-[#EEEBF7] px-4 py-8 md:px-6 md:py-10 lg:py-12"
    >
      <div
        className={`section-panel section-panel--${tone} relative mx-auto max-w-[1600px] overflow-hidden rounded-2xl md:rounded-[2rem]`}
      >
        {noise ? (
          <div
            className="bg-noise pointer-events-none absolute inset-0 z-[1] opacity-[0.025] mix-blend-soft-light"
            aria-hidden="true"
          />
        ) : null}
        {children}
      </div>
    </section>
  )
}

function About() {
  const bodyCopy =
    '단순한 결과물 목록이 아니라, 어떤 문제를 풀었고 어떤 버전을 거쳐 공개되었는지까지 연결합니다. 2026년 1월부터 7월까지 현재 공개 브랜치에 남아 있는 저장소, 소스 커밋과 배포 커밋을 서로 구분해 기록했습니다.'

  return (
    <SectionShell id="about" labelledBy="about-title" tone="coral">
      <div className="relative z-10 flex flex-col items-center px-5 py-14 text-center sm:px-7 md:px-10 md:py-16 lg:px-14 lg:py-20">
        <p className="section-kicker mb-7 text-xs font-bold uppercase tracking-[0.12em] sm:text-sm sm:tracking-[0.16em] md:mb-9">
          Public work index · {archiveSnapshot.capturedAt.split(' ')[0]} snapshot
        </p>

        <WordsPullUpMultiStyle
          as="h2"
          id="about-title"
          className="mx-auto max-w-6xl justify-center text-center text-[clamp(2.5rem,12vw,3.25rem)] font-normal leading-[1.02] text-[#1B133C] sm:leading-[0.98] md:text-7xl lg:text-8xl"
          segments={[
            { text: '공개 결과를,', className: 'font-normal' },
            {
              text: 'a readable history.',
              className: 'section-accent-text font-serif italic',
              breakBefore: true,
            },
            {
              text: '읽을 수 있는 작업 이력으로 정리합니다.',
              className: 'font-normal',
              breakBefore: true,
            },
          ]}
        />

        <ScrollOpacityText
          text={bodyCopy}
          className="mt-10 max-w-5xl text-base leading-[1.85] text-[#1B133C] sm:text-lg md:mt-12 md:text-xl lg:text-2xl"
        />

        <dl className="about-proof-grid mt-10 grid w-full grid-cols-2 gap-2 text-left md:mt-14 md:grid-cols-4">
          {proofStats.map((stat) => (
            <div
              key={stat.label}
              className="section-glass-card flex flex-col rounded-xl px-3 py-5 sm:px-5 md:py-6"
            >
              <dt className="order-2 mt-3 text-sm font-bold text-[#1B133C]/85 sm:text-base">{stat.label}</dt>
              <dd className="order-1 text-[clamp(3rem,13vw,3.75rem)] font-light tracking-[-0.06em] text-[#1B133C] lg:text-7xl">
                {stat.value}
              </dd>
              <dd className="order-3 mt-1 text-xs leading-relaxed text-[#4D4666] sm:text-sm">{stat.note}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex w-full flex-col gap-2 rounded-xl border border-[#1B133C]/10 bg-white/55 px-4 py-4 text-left text-xs leading-relaxed text-[#4D4666] sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:text-sm">
          <span>기준 {archiveSnapshot.capturedAt} · 공개 저장소만 집계</span>
          <span>기록 기간 {archiveSnapshot.period}</span>
        </div>
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

function WorkCard({ work, index }: { work: WorkRecord; index: number }) {
  const linkedRepositories = work.repositoryIds
    .map((repositoryId) => repositories.find((repository) => repository.id === repositoryId))
    .filter((repository): repository is RepositoryRecord => Boolean(repository))
  const sourceCount = linkedRepositories.reduce(
    (total, repository) => total + sourceCommitCount(repository),
    0,
  )
  const deploymentCount = linkedRepositories.reduce(
    (total, repository) => total + deployCommitCount(repository),
    0,
  )

  return (
    <AnimatedCard
      delay={(index % 3) * 0.08}
      labelledBy={`work-${work.id}-title`}
      className="section-glass-card work-card group overflow-hidden rounded-[1.5rem] md:grid md:grid-cols-12 md:rounded-[1.75rem]"
    >
      <div className="project-media relative min-h-[280px] overflow-hidden bg-[#253158] md:col-span-4 md:min-h-[460px]">
        {work.image ? (
          <>
            <img
              src={work.image}
              alt={work.imageAlt ?? ''}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/55" aria-hidden="true" />
          </>
        ) : (
          <div className="work-card-visual absolute inset-0 flex flex-col justify-between p-6 text-white sm:p-8">
            <div className="flex items-center justify-between text-xs font-bold tracking-[0.14em] text-white/70">
              <span>{work.eyebrow}</span>
              <GitBranch size={20} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div>
              <span className="block font-serif text-[clamp(5rem,24vw,8rem)] italic leading-none text-white/95">
                {work.number}
              </span>
              <span className="mt-4 block text-sm leading-relaxed text-white/70">
                {linkedRepositories.map((repository) => repository.name).join(' · ') || 'OFF-GITHUB R&D'}
              </span>
            </div>
          </div>
        )}
        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#1B133C]/80 px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] text-white backdrop-blur sm:left-5 sm:top-5 sm:text-xs">
          {work.status}
        </div>
        <span className="absolute bottom-4 right-4 text-xs font-bold tracking-[0.14em] text-white/90 drop-shadow sm:bottom-5 sm:right-5 sm:text-sm">
          ({work.number})
        </span>
      </div>

      <div className="min-w-0 p-6 sm:p-7 md:col-span-8 md:flex md:flex-col md:justify-center md:p-9 lg:p-12">
        <p className="text-[10px] font-bold tracking-[0.1em] text-[#4D4666] sm:text-xs sm:tracking-[0.14em] md:text-sm">
          {work.eyebrow}
        </p>
        <h3
          id={`work-${work.id}-title`}
          className="mt-3 max-w-4xl text-[clamp(2rem,8vw,2.6rem)] font-normal leading-[1.04] tracking-[-0.045em] text-[#1B133C] md:text-5xl lg:text-6xl"
        >
          {work.title}
        </h3>
        <p className="mt-5 max-w-4xl text-base leading-[1.8] text-[#4D4666] sm:text-lg md:text-xl">
          {work.summary}
        </p>

        {work.publicDataNotice ? (
          <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#1D6C59]/25 bg-[#E5F4ED]/90 p-4 text-sm font-semibold leading-relaxed text-[#155944] sm:text-base">
            <ShieldCheck size={21} className="mt-0.5 shrink-0" aria-hidden="true" />
            <p>{work.publicDataNotice}</p>
          </div>
        ) : null}

        {linkedRepositories.length > 0 ? (
          <dl className="mt-6 grid grid-cols-3 gap-2 border-y border-[#1B133C]/10 py-4 text-left">
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#4D4666] sm:text-xs">저장소</dt>
              <dd className="mt-1 text-2xl font-light tracking-[-0.04em] text-[#1B133C] sm:text-3xl">{linkedRepositories.length}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#4D4666] sm:text-xs">작업</dt>
              <dd className="mt-1 text-2xl font-light tracking-[-0.04em] text-[#1B133C] sm:text-3xl">{sourceCount}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#4D4666] sm:text-xs">배포</dt>
              <dd className="mt-1 text-2xl font-light tracking-[-0.04em] text-[#1B133C] sm:text-3xl">{deploymentCount}</dd>
            </div>
          </dl>
        ) : null}

        <ul className="mt-6 grid gap-3 lg:grid-cols-3">
          {work.highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#4D4666] sm:text-base">
              <Check size={16} strokeWidth={1.5} className="mt-1 shrink-0 text-[#1D6C59]" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-6 border-l border-[#1D6C59]/40 pl-3 text-xs leading-relaxed text-[#4D4666] sm:text-sm">
          {work.note}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-2">
          {work.primaryUrl ? (
            <a
              href={work.primaryUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1D6C59] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1B133C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B133C] sm:text-base"
            >
              {work.primaryLabel}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : null}
          {linkedRepositories.map((repository) => (
            <a
              key={repository.id}
              href="#archive"
              onClick={openWorkHistory}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#1B133C]/15 bg-white/60 px-4 py-2.5 text-xs font-bold text-[#4D4666] transition-colors hover:border-[#1B133C]/30 hover:text-[#1B133C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B133C] sm:text-sm"
            >
              {repository.displayName} 이력
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </AnimatedCard>
  )
}

function Projects() {
  return (
    <SectionShell id="projects" labelledBy="projects-title" tone="mint" noise>
      <div className="relative z-10 px-5 py-14 sm:px-7 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <p className="section-kicker mb-6 text-xs font-bold uppercase tracking-[0.12em] sm:text-sm sm:tracking-[0.16em]">
          Work index · {workAreas.length} areas, {workRecords.length} records
        </p>
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <WordsPullUpMultiStyle
            as="h2"
            id="projects-title"
            className="max-w-5xl justify-start text-left text-[clamp(2.75rem,12.5vw,3.75rem)] font-normal leading-[1] sm:leading-[0.95] md:text-7xl xl:text-8xl"
            segments={[
              { text: '하나의 카드에,', className: 'text-[#1B133C]' },
              {
                text: '하나의 작업 흐름을.',
                className: 'text-[#514A69]',
                breakBefore: true,
              },
            ]}
          />
          <p className="max-w-xl text-base leading-[1.8] text-[#4D4666] sm:text-lg lg:text-xl">
            저장소를 단순 나열하지 않고, 실제 업무와 결과물을 기준으로 묶었습니다. 모든 카드는
            한 줄에 하나씩 배치해 핵심 정보를 빠르게 읽을 수 있습니다.
          </p>
        </div>

        <div className="space-y-14 md:space-y-18">
          {workAreas.map((area) => {
            const areaWork = workRecords.filter((work) => work.area === area.id)
            return (
              <section key={area.id} aria-labelledby={`work-area-${area.id}`} className="work-area-grid grid gap-6 lg:grid-cols-12">
                <header className="lg:col-span-3">
                  <div className="lg:sticky lg:top-8">
                    <span className="text-xs font-bold tracking-[0.14em] text-[#1D6C59] sm:text-sm">({area.number})</span>
                    <h3 id={`work-area-${area.id}`} className="mt-3 text-3xl font-normal tracking-[-0.04em] text-[#1B133C] sm:text-4xl lg:text-5xl">
                      {area.title}
                    </h3>
                    <p className="mt-3 font-serif text-2xl italic text-[#1D6C59] sm:text-3xl">{area.english}</p>
                    <p className="mt-5 max-w-md text-sm leading-[1.8] text-[#4D4666] sm:text-base">{area.description}</p>
                  </div>
                </header>
                <div className="space-y-4 md:space-y-5 lg:col-span-9">
                  {areaWork.map((work, index) => (
                    <WorkCard key={work.id} work={work} index={index} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        <WorkHistory />
      </div>
    </SectionShell>
  )
}

function RepositoryDetails({ repository, expanded = false }: { repository: RepositoryRecord; expanded?: boolean }) {
  const sourceCommits = repository.commits.filter((commit) => commit.branch === 'main')
  const deployCommits = repository.commits.filter((commit) => commit.branch === 'gh-pages')
  const latestSource = sourceCommits[0]
  const linksEnabled = repository.status !== 'review'
  const statusClass = {
    live: 'bg-[#DDF3E9] text-[#155944]',
    source: 'bg-[#E4ECFA] text-[#294F87]',
    archive: 'bg-[#F5E8C8] text-[#705214]',
    review: 'bg-[#F7DDD8] text-[#8A392F]',
  }[repository.status]

  return (
    <details
      id={`repository-${repository.id}`}
      open={expanded}
      className="repository-details section-glass-card overflow-hidden rounded-2xl scroll-mt-6"
    >
      <summary className="grid cursor-pointer list-none items-center gap-4 px-5 py-5 marker:hidden sm:px-6 md:grid-cols-12 md:gap-5 md:py-6 [&::-webkit-details-marker]:hidden">
        <div className="min-w-0 md:col-span-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] sm:text-xs ${statusClass}`}>
              {repository.statusLabel}
            </span>
            <span className="text-xs font-bold text-[#4D4666]">{repository.language}</span>
          </div>
          <h4 className="mt-3 break-words text-2xl font-normal tracking-[-0.035em] text-[#1B133C] sm:text-3xl">
            {repository.displayName}
          </h4>
        </div>
        <div className="grid grid-cols-3 gap-3 md:col-span-5">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-[0.1em] text-[#4D4666] sm:text-xs">작업</span>
            <strong className="mt-1 block text-2xl font-light text-[#1B133C] sm:text-3xl">{sourceCommits.length}</strong>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-[0.1em] text-[#4D4666] sm:text-xs">배포</span>
            <strong className="mt-1 block text-2xl font-light text-[#1B133C] sm:text-3xl">{deployCommits.length}</strong>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-[0.1em] text-[#4D4666] sm:text-xs">최신</span>
            <strong className="mt-2 block text-xs font-bold text-[#1B133C] sm:text-sm">{latestSource?.date.slice(5).replace('.', '/')}</strong>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 md:col-span-2 md:justify-end">
          <span className="text-xs font-bold text-[#4D4666] sm:text-sm">전체 이력</span>
          <ChevronDown className="archive-chevron text-[#1B133C]" size={22} aria-hidden="true" />
        </div>
      </summary>

      <div className="border-t border-[#1B133C]/10 px-5 pb-6 pt-5 sm:px-6 md:px-8 md:pb-8 md:pt-7">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-base leading-[1.8] text-[#4D4666] sm:text-lg">{repository.summary}</p>
            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-[#1B133C]/10 bg-white/55 p-4">
                <dt className="text-xs font-bold text-[#4D4666]">시작</dt>
                <dd className="mt-1 font-semibold text-[#1B133C]">{repository.startedAt}</dd>
              </div>
              <div className="rounded-xl border border-[#1B133C]/10 bg-white/55 p-4">
                <dt className="text-xs font-bold text-[#4D4666]">페이지 상태</dt>
                <dd className="mt-1 font-semibold leading-relaxed text-[#1B133C]">{repository.pageNote}</dd>
              </div>
            </dl>

            {repository.status === 'review' ? (
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#9B4238]/20 bg-[#F9E8E4]/85 p-4 text-sm leading-relaxed text-[#77352E]">
                <ShieldAlert size={19} className="mt-0.5 shrink-0" aria-hidden="true" />
                <p>데모 데이터와 공개 소스를 재검토하는 저장소입니다. 검토를 마치기 전까지 홈페이지에서 외부 링크를 제공하지 않습니다.</p>
              </div>
            ) : (
              <div className="mt-5 flex flex-wrap gap-2">
                {repository.repositoryUrl ? (
                  <a
                    href={repository.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#1B133C]/15 bg-white/65 px-4 py-2.5 text-sm font-bold text-[#1B133C] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B133C]"
                  >
                    <Github size={15} aria-hidden="true" />
                    저장소
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ) : null}
                {repository.liveUrl ? (
                  <a
                    href={repository.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#355E9C] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#1B133C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B133C]"
                  >
                    <Globe2 size={15} aria-hidden="true" />
                    라이브 Pages
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            )}
          </div>

          <div className="lg:col-span-7">
            <CommitList
              title="기본 브랜치 · 작업 이력"
              branch="main"
              repository={repository}
              commits={sourceCommits}
              linksEnabled={linksEnabled}
            />
            {deployCommits.length > 0 ? (
              <div className="mt-6">
                <CommitList
                  title="gh-pages · 배포 이력"
                  branch="gh-pages"
                  repository={repository}
                  commits={deployCommits}
                  linksEnabled={linksEnabled}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </details>
  )
}

function CommitList({
  title,
  branch,
  repository,
  commits,
  linksEnabled,
}: {
  title: string
  branch: 'main' | 'gh-pages'
  repository: RepositoryRecord
  commits: RepositoryRecord['commits']
  linksEnabled: boolean
}) {
  return (
    <section aria-label={`${repository.name} ${title}`}>
      <div className="flex items-center justify-between gap-3">
        <h5 className="text-sm font-bold text-[#1B133C] sm:text-base">{title}</h5>
        <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold sm:text-xs ${branch === 'main' ? 'bg-[#E4ECFA] text-[#294F87]' : 'bg-[#EEE4FA] text-[#60408C]'}`}>
          {commits.length}
        </span>
      </div>
      <ol className="mt-3 overflow-hidden rounded-xl border border-[#1B133C]/10 bg-white/55">
        {commits.map((commit) => (
          <li
            key={`${commit.branch}-${commit.sha}`}
            className="grid gap-2 border-b border-[#1B133C]/10 p-4 last:border-b-0 sm:grid-cols-[96px_minmax(0,1fr)_68px] sm:items-start sm:gap-4"
          >
            <time dateTime={commit.date} className="text-xs font-bold tabular-nums text-[#4D4666] sm:text-sm">
              {commit.date.slice(5).replace('.', '/')}
            </time>
            <p className="min-w-0 break-words text-sm font-medium leading-[1.65] text-[#1B133C] sm:text-base">
              {commit.message}
            </p>
            {linksEnabled ? (
              <a
                href={commitUrl(repository, commit)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-1 font-mono text-xs font-bold text-[#355E9C] hover:text-[#1B133C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B133C]"
                aria-label={`${repository.name} ${commit.sha} 커밋 보기 (새 창)`}
              >
                {commit.sha}
                <ArrowUpRight size={12} aria-hidden="true" />
              </a>
            ) : (
              <span className="font-mono text-xs font-bold text-[#4D4666]">{commit.sha}</span>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}

function WorkHistory() {
  const archiveMethod = [
    {
      number: '01',
      title: '작업으로 읽기',
      body: '저장소를 교육·업무·미디어·플랫폼 네 분야로 묶어 먼저 결과를 이해합니다.',
    },
    {
      number: '02',
      title: '소스와 배포 분리',
      body: `기본 브랜치의 ${archiveSnapshot.sourceCommits}건은 작업 이력으로, gh-pages ${archiveSnapshot.deployCommits}건은 배포 이력으로 따로 집계합니다.`,
    },
    {
      number: '03',
      title: '상태까지 확인',
      body: '라이브, 소스 전용, 행사 기록, 공개 정리 검토를 구분해 열 수 있는 링크만 제공합니다.',
    },
  ]

  return (
    <details
      id="archive"
      className="repository-details mt-16 scroll-mt-6 overflow-hidden rounded-[1.5rem] border border-[#1B133C]/15 bg-[#DCECF3]/80 shadow-[0_18px_45px_rgba(27,19,60,0.08)] md:mt-20 md:rounded-[1.75rem]"
    >
      <summary className="grid cursor-pointer list-none items-center gap-5 px-5 py-7 marker:hidden sm:px-7 md:grid-cols-12 md:px-9 md:py-9 [&::-webkit-details-marker]:hidden">
        <div className="md:col-span-8">
          <p className="section-kicker text-xs font-bold uppercase tracking-[0.12em] sm:text-sm sm:tracking-[0.16em]">
            Work history · {archiveSnapshot.capturedAt}
          </p>
          <h2 id="archive-title" className="mt-3 text-[clamp(2.25rem,9vw,3.5rem)] font-normal leading-[1.02] tracking-[-0.045em] text-[#1B133C] md:text-6xl">
            작업 이력 전체 보기
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-[1.75] text-[#4D4666] sm:text-base md:text-lg">
            인덱스에 소개한 결과물과 공개 저장소 {archiveSnapshot.publicRepositories}개의 작업·배포 이력을 한 번에 펼쳐 확인합니다.
          </p>
        </div>
        <div className="flex items-center justify-between gap-5 md:col-span-4 md:justify-end">
          <div className="text-left md:text-right">
            <strong className="block text-4xl font-light tracking-[-0.05em] text-[#1B133C] sm:text-5xl">
              {archiveSnapshot.sourceCommits + archiveSnapshot.deployCommits}
            </strong>
            <span className="text-xs font-bold text-[#4D4666] sm:text-sm">전체 공개 커밋</span>
          </div>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1B133C] text-white sm:h-14 sm:w-14">
            <ChevronDown className="archive-chevron" size={24} aria-hidden="true" />
          </span>
        </div>
      </summary>

      <div className="border-t border-[#1B133C]/10 px-5 pb-8 pt-8 sm:px-7 md:px-9 md:pb-10 md:pt-10">

        <ol className="mt-10 grid gap-2 md:grid-cols-3">
          {archiveMethod.map((item) => (
            <li key={item.number} className="section-glass-card rounded-xl p-6 sm:p-7">
              <span className="text-xs font-bold tracking-[0.14em] text-[#355E9C] sm:text-sm">({item.number})</span>
              <h3 className="mt-8 text-2xl font-normal tracking-[-0.035em] text-[#1B133C] sm:text-3xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-[1.8] text-[#4D4666] sm:text-base">{item.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 space-y-12">
          {workAreas.map((area) => {
            const areaRepositories = repositories.filter((repository) => repository.area === area.id)
            return (
              <section key={area.id} aria-labelledby={`archive-area-${area.id}`}>
                <header className="mb-5 grid gap-3 border-b border-[#1B133C]/10 pb-5 md:grid-cols-12 md:items-end">
                  <div className="md:col-span-8">
                    <span className="text-xs font-bold tracking-[0.14em] text-[#355E9C] sm:text-sm">({area.number}) {area.english}</span>
                    <h3 id={`archive-area-${area.id}`} className="mt-2 text-3xl font-normal tracking-[-0.04em] text-[#1B133C] sm:text-4xl lg:text-5xl">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-sm font-bold text-[#4D4666] md:col-span-4 md:text-right sm:text-base">
                    {areaRepositories.length}개 저장소 · {areaRepositories.reduce((total, repository) => total + sourceCommitCount(repository), 0)}건 작업
                  </p>
                </header>
                <div className="space-y-3">
                  {areaRepositories.map((repository) => (
                    <RepositoryDetails key={repository.id} repository={repository} expanded />
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        <div className="mt-10 rounded-xl border border-[#1B133C]/10 bg-white/55 px-5 py-4 text-xs leading-relaxed text-[#4D4666] sm:text-sm">
          공개 저장소만 집계했으며, 비공개 작업과 개인 정보가 포함될 수 있는 자료는 화면과 통계에서 제외합니다. 라이선스가 명시되지 않은 저장소는 ‘오픈 소스’가 아닌 ‘공개 저장소’로 표기합니다.
        </div>
      </div>
    </details>
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
            { text: '빠르게 만들되,', className: 'text-[#1B133C]' },
            { text: '책임을 생략하지 않습니다.', className: 'text-[#514A69]', breakBefore: true },
          ]}
        />

        <ol className="mt-10 grid gap-2 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
          {principles.map((principle) => (
            <li
              key={principle.number}
              className="section-glass-card principle-card min-h-[280px] rounded-xl p-6 sm:min-h-[300px] sm:p-8 lg:min-h-[340px]"
            >
              <span className="text-xs font-bold tracking-[0.14em] text-[#4D4666] sm:text-sm">({principle.number})</span>
              <h3 className="mt-16 text-2xl font-normal tracking-[-0.035em] text-[#1B133C] sm:text-3xl lg:text-4xl">
                {principle.title}
              </h3>
              <p className="mt-4 text-sm leading-[1.8] text-[#4D4666] sm:text-base lg:text-lg">{principle.body}</p>
            </li>
          ))}
        </ol>

        <div
          id="contact"
          className="mt-10 overflow-hidden rounded-[1.5rem] border border-white/20 bg-[#1B133C] p-6 text-white shadow-[0_24px_60px_rgba(27,19,60,0.22)] sm:p-10 md:mt-12 md:rounded-[1.75rem] md:p-14"
          style={{ backgroundImage: 'linear-gradient(135deg, #1B133C 0%, #302458 68%, #46376A 100%)' }}
        >
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/65 sm:text-sm sm:tracking-[0.16em]">
                Open work archive · {archiveSnapshot.capturedAt}
              </p>
              <h2 className="mt-5 max-w-5xl text-[clamp(3rem,14vw,3.75rem)] font-normal leading-[1] tracking-[-0.04em] sm:leading-[0.95] md:text-7xl lg:text-8xl">
                결과물과 변경 이력을, 한곳에서.
              </h2>
            </div>
            <div className="flex flex-col items-start gap-5 lg:col-span-4">
              <p className="text-base leading-[1.7] text-white/75 sm:text-lg lg:text-xl">
                공개 가능한 소스와 라이브 데모는 GitHub에서 계속 갱신합니다.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={GITHUB_PROFILE}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-white py-1 pl-5 pr-1 text-base font-medium text-[#1B133C] transition-[gap] duration-300 motion-safe:hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-lg"
                >
                  <Github size={16} aria-hidden="true" />
                  GitHub 보기
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1B133C] text-white transition-transform duration-300 motion-safe:group-hover:scale-110 sm:h-10 sm:w-10">
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </a>
                <a
                  href="#archive"
                  onClick={openWorkHistory}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
                >
                  전체 이력
                  <ArrowRight size={14} aria-hidden="true" />
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
    <footer className="border-t border-[#1B133C]/10 bg-[#E8E4F4] px-4 py-10 text-[#1B133C]/75 md:px-6">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-base font-bold text-[#1B133C] sm:text-lg">국민대학교 디지털AI혁신센터</p>
          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-[#4D4666] sm:text-sm">
            공개 GitHub 스냅샷은 {archiveSnapshot.capturedAt} 기준입니다. 생성·복원 콘텐츠와 프로토타입의 상태는 각 작업에 별도로 표시합니다.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-bold tracking-[0.1em] sm:text-sm">
          <a href="#hero" className="transition-colors hover:text-[#1B133C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B133C]">
            TOP
          </a>
          <a href="#projects" className="transition-colors hover:text-[#1B133C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B133C]">
            작업 분야
          </a>
          <a href="#archive" onClick={openWorkHistory} className="transition-colors hover:text-[#1B133C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B133C]">
            작업 이력
          </a>
          <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#1B133C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B133C]">
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
      <main id="main-content" className="overflow-x-hidden bg-[#EEEBF7]">
        <Hero />
        <About />
        <Projects />
        <Principles />
      </main>
      <Footer />
    </>
  )
}
