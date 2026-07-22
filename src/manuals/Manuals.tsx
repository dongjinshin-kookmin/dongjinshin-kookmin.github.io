import {
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  Clock3,
  Github,
  Keyboard,
  ListChecks,
  Menu,
  Monitor,
  ShieldCheck,
  Wrench,
  X,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { manualById, manuals } from './data'

function hashId() {
  return decodeURIComponent(window.location.hash.replace(/^#/, ''))
}

export function Manuals() {
  const [selectedId, setSelectedId] = useState(() => hashId())
  const [menuOpen, setMenuOpen] = useState(false)
  const manual = useMemo(() => manualById(selectedId), [selectedId])

  useEffect(() => {
    const handleHashChange = () => {
      setSelectedId(hashId())
      setMenuOpen(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    document.title = `${manual.title} 사용 매뉴얼 · 디지털AI혁신센터`
  }, [manual.title])

  return (
    <div className="manual-app">
      <a className="skip-link" href="#manual-content">매뉴얼 본문 바로가기</a>

      <header className="manual-topbar">
        <a className="manual-brand" href="/" aria-label="디지털AI혁신센터 홈페이지">
          <span className="manual-brand-mark" aria-hidden="true">AI</span>
          <span>
            <strong>앱·시스템 사용 매뉴얼</strong>
            <small>국민대학교 디지털AI혁신센터</small>
          </span>
        </a>
        <div className="manual-top-actions">
          <a className="manual-home-link" href="/">
            <ArrowLeft size={17} aria-hidden="true" />
            홈페이지
          </a>
          <button
            className="manual-menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="manual-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
            매뉴얼 목록
          </button>
        </div>
      </header>

      <div className="manual-layout">
        <nav
          id="manual-navigation"
          aria-label="앱·시스템 매뉴얼 목록"
          className={`manual-sidebar ${menuOpen ? 'is-open' : ''}`}
        >
          <div className="manual-sidebar-intro">
            <p>Manual library</p>
            <strong>{manuals.length}개 공개 매뉴얼</strong>
            <span>가상·공개 데이터를 기준으로 작성했습니다.</span>
          </div>
          <ol>
            {manuals.map((item, index) => {
              const selected = manual.id === item.id
              return (
                <li key={item.id}>
                  <a href={`#${item.id}`} aria-current={selected ? 'page' : undefined}>
                    <span className="manual-nav-number">{String(index + 1).padStart(2, '0')}</span>
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.category}</small>
                    </span>
                    <ChevronRight size={17} aria-hidden="true" />
                  </a>
                </li>
              )
            })}
          </ol>
        </nav>

        <main id="manual-content" className="manual-content">
          <section className="manual-hero" aria-labelledby="manual-title">
            <div className="manual-hero-copy">
              <div className="manual-badges">
                <span>{manual.category}</span>
                <span className="manual-status"><ShieldCheck size={15} />{manual.status}</span>
              </div>
              <p className="manual-eyebrow">Detailed operation guide</p>
              <h1 id="manual-title">{manual.title}<br /><em>사용 매뉴얼</em></h1>
              <p className="manual-lead">{manual.summary}</p>
              <dl className="manual-meta">
                <div>
                  <dt>권장 사용자</dt>
                  <dd>{manual.audience}</dd>
                </div>
                <div>
                  <dt><Clock3 size={16} /> 예상 시간</dt>
                  <dd>{manual.estimatedTime}</dd>
                </div>
              </dl>
              <div className="manual-hero-actions">
                {manual.liveUrl ? (
                  <a className="manual-primary-button" href={manual.liveUrl} target="_blank" rel="noreferrer">
                    {manual.liveLabel ?? '도구 열기'} <ArrowUpRight size={17} />
                  </a>
                ) : null}
                {manual.repositoryUrl ? (
                  <a className="manual-secondary-button" href={manual.repositoryUrl} target="_blank" rel="noreferrer">
                    <Github size={17} /> 저장소 보기 <ArrowUpRight size={15} />
                  </a>
                ) : null}
              </div>
            </div>
            <aside className="manual-data-notice" aria-label="데이터 안내">
              <AlertTriangle size={25} aria-hidden="true" />
              <div>
                <strong>공개 이용 전 확인</strong>
                <p>{manual.dataNotice}</p>
              </div>
            </aside>
          </section>

          <section className="manual-section" aria-labelledby="quick-start-title">
            <SectionHeading icon={<ListChecks />} kicker="First run" title="처음 5분, 이렇게 시작하세요" id="quick-start-title" />
            <ol className="quick-start-grid">
              {manual.quickStart.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><h3>{step.title}</h3><p>{step.description}</p></div>
                </li>
              ))}
            </ol>
          </section>

          <section className="manual-section" aria-labelledby="screen-map-title">
            <SectionHeading icon={<Monitor />} kicker="Screen map" title="화면과 메뉴 구조" id="screen-map-title" />
            <div className="screen-map-grid">
              {manual.screenMap.map((item) => (
                <article key={item.title}>
                  <span aria-hidden="true"><Monitor size={18} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="manual-section" aria-labelledby="workflow-title">
            <SectionHeading icon={<BookOpen />} kicker="Workflows" title="업무별 상세 조작법" id="workflow-title" />
            <div className="workflow-list">
              {manual.workflows.map((workflow, index) => (
                <article key={workflow.title} className="workflow-card">
                  <header>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div><h3>{workflow.title}</h3><p>{workflow.purpose}</p></div>
                  </header>
                  <ol>
                    {workflow.steps.map((step) => <li key={step}><Check size={17} aria-hidden="true" /><span>{step}</span></li>)}
                  </ol>
                  <div className="workflow-complete"><strong>완료 기준</strong><p>{workflow.complete}</p></div>
                  {workflow.caution ? <div className="workflow-caution"><AlertTriangle size={18} /><p>{workflow.caution}</p></div> : null}
                </article>
              ))}
            </div>
          </section>

          {manual.shortcuts?.length ? (
            <section className="manual-section" aria-labelledby="shortcut-title">
              <SectionHeading icon={<Keyboard />} kicker="Shortcuts" title="키보드 단축키" id="shortcut-title" />
              <dl className="shortcut-list">
                {manual.shortcuts.map((shortcut) => (
                  <div key={`${shortcut.key}-${shortcut.action}`}><dt><kbd>{shortcut.key}</kbd></dt><dd>{shortcut.action}</dd></div>
                ))}
              </dl>
            </section>
          ) : null}

          <section className="manual-section manual-safety-section" aria-labelledby="safety-title">
            <SectionHeading icon={<ShieldCheck />} kicker="Safety" title="개인정보·공개 이용 원칙" id="safety-title" />
            <ul>
              {manual.safety.map((item) => <li key={item}><ShieldCheck size={18} /><span>{item}</span></li>)}
            </ul>
          </section>

          <section className="manual-section" aria-labelledby="trouble-title">
            <SectionHeading icon={<Wrench />} kicker="Troubleshooting" title="문제가 생겼을 때" id="trouble-title" />
            <div className="trouble-list">
              {manual.troubleshooting.map((item) => (
                <details key={item.issue}>
                  <summary><span>{item.issue}</span><ChevronRight size={19} /></summary>
                  <p>{item.solution}</p>
                </details>
              ))}
            </div>
          </section>

          <nav className="manual-next-nav" aria-label="다른 매뉴얼">
            <p>다른 도구도 확인하세요</p>
            <div>
              {manuals.filter((item) => item.id !== manual.id).slice(0, 3).map((item) => (
                <a key={item.id} href={`#${item.id}`}>{item.title}<ChevronRight size={16} /></a>
              ))}
            </div>
          </nav>
        </main>
      </div>
    </div>
  )
}

function SectionHeading({ icon, kicker, title, id }: { icon: React.ReactNode; kicker: string; title: string; id: string }) {
  return (
    <header className="manual-section-heading">
      <span className="manual-heading-icon" aria-hidden="true">{icon}</span>
      <div><p>{kicker}</p><h2 id={id}>{title}</h2></div>
    </header>
  )
}
