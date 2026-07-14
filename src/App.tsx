import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { useRef } from 'react'
import { ScrollOpacityText } from './components/ScrollOpacityText'
import { WordsPullUp, WordsPullUpMultiStyle } from './components/WordsPullUp'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4'

const FEATURE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4'

const HERO_DESCRIPTION =
  'Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential through our unique perspectives.'

const navItems = [
  { label: 'Our story', href: '#about' },
  { label: 'Collective', href: '#features' },
  { label: 'Workshops', href: '#features' },
  { label: 'Programs', href: '#features' },
  { label: 'Inquiries', href: 'mailto:hello@prisma.art' },
]

const featureCards = [
  {
    number: '01',
    title: 'Project Storyboard.',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    checklist: [
      'Build visual storyboards',
      'Organize scenes and sequences',
      'Track every creative decision',
      'Share shot-ready direction',
    ],
  },
  {
    number: '02',
    title: 'Smart Critiques.',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    checklist: [
      'AI-powered visual analysis',
      'Actionable creative notes',
      'Integrated production tools',
    ],
  },
  {
    number: '03',
    title: 'Immersion Capsule.',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    checklist: [
      'Silence distracting notifications',
      'Generate ambient soundscapes',
      'Sync deep-work schedules',
    ],
  },
]

function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="hero-viewport h-screen bg-black p-4 md:p-6"
    >
      <div className="relative h-full overflow-hidden rounded-2xl bg-neutral-900 md:rounded-[2rem]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          autoPlay={!shouldReduceMotion}
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"
          aria-hidden="true"
        />
        <div
          className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay"
          aria-hidden="true"
        />

        <nav
          aria-label="Primary navigation"
          className="absolute left-1/2 top-0 z-20 w-max max-w-[calc(100%-1rem)] -translate-x-1/2 overflow-x-auto overscroll-x-contain rounded-b-2xl bg-black px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:rounded-b-3xl md:px-8"
        >
          <div className="flex items-center gap-3 whitespace-nowrap sm:gap-6 md:gap-12 lg:gap-14">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                className="rounded-sm text-[10px] transition-colors hover:!text-[#E1E0CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-xs md:text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-6 pt-24 md:px-8 md:pb-8 lg:px-10 lg:pb-10">
          <div className="grid w-full grid-cols-1 items-end gap-7 lg:grid-cols-12 lg:gap-4">
            <WordsPullUp
              text="Prisma"
              showAsterisk
              as="h1"
              id="hero-title"
              className="whitespace-nowrap text-[26vw] font-medium leading-[0.85] tracking-[-0.07em] text-[#E1E0CC] sm:text-[24vw] md:text-[22vw] lg:col-span-8 lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
            />

            <div className="flex max-w-md flex-col items-start gap-5 lg:col-span-4 lg:pb-1">
              <motion.p
                className="text-xs leading-[1.2] text-primary/70 sm:text-sm md:text-base"
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.65,
                  delay: shouldReduceMotion ? 0 : 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {HERO_DESCRIPTION}
              </motion.p>
              <motion.a
                href="mailto:hello@prisma.art"
                aria-label="Join the Prisma lab"
                className="group inline-flex items-center gap-2 rounded-full bg-primary py-1 pl-5 pr-1 text-sm font-medium text-black transition-[gap] duration-300 motion-safe:hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-base"
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.65,
                  delay: shouldReduceMotion ? 0 : 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                Join the lab
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-primary transition-transform duration-300 motion-safe:group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  const bodyCopy =
    'Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.'

  return (
    <section id="about" aria-labelledby="about-title" className="bg-black px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#101010] px-5 py-20 text-center md:rounded-[2rem] md:px-12 md:py-28">
        <p className="mb-9 text-[10px] text-primary sm:text-xs">
          Visual arts
        </p>

        <WordsPullUpMultiStyle
          as="h2"
          id="about-title"
          className="mx-auto max-w-3xl text-3xl font-normal leading-[0.95] text-primary sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
          segments={[
            { text: 'I am Marcus Chen,', className: 'font-normal' },
            { text: 'a self-taught director.', className: 'font-serif italic' },
            {
              text: 'I have skills in color grading, visual effects, and narrative design.',
              className: 'font-normal',
            },
          ]}
        />

        <ScrollOpacityText
          text={bodyCopy}
          className="mt-20 max-w-3xl text-xs leading-relaxed text-[#DEDBC8] sm:text-sm md:mt-24 md:text-base"
        />
      </div>
    </section>
  )
}

type AnimatedCardProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      ref={ref}
      className={className}
      initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.95 }}
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

function Features() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative min-h-screen overflow-hidden bg-black px-4 py-20 md:px-6 md:py-28"
    >
      <div
        className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1600px]">
        <WordsPullUpMultiStyle
          as="h2"
          id="features-title"
          className="mb-12 justify-start text-left text-xl font-normal leading-tight sm:text-2xl md:mb-16 md:text-3xl lg:text-4xl"
          segments={[
            { text: 'Studio-grade workflows for visionary creators.', className: 'text-[#E1E0CC]' },
            {
              text: 'Built for pure vision. Powered by art.',
              className: 'text-gray-500',
              breakBefore: true,
            },
          ]}
        />

        <div className="grid grid-cols-1 gap-3 sm:gap-2 md:grid-cols-2 md:gap-1 lg:h-[480px] lg:grid-cols-4">
          <AnimatedCard className="group relative min-h-[460px] overflow-hidden rounded-[1.75rem] bg-[#212121] sm:min-h-[480px] lg:min-h-0">
            <video
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025]"
              src={FEATURE_VIDEO}
              autoPlay={!shouldReduceMotion}
              loop
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
              <p className="text-xl font-normal tracking-[-0.03em] text-[#E1E0CC]">
                Your creative canvas.
              </p>
            </div>
          </AnimatedCard>

          {featureCards.map((card, cardIndex) => (
            <AnimatedCard
              key={card.number}
              delay={(cardIndex + 1) * 0.15}
              className="group relative flex min-h-[460px] flex-col overflow-hidden rounded-[1.75rem] bg-[#212121] p-6 sm:min-h-[480px] md:p-7 lg:min-h-0"
            >
              <img
                src={card.image}
                alt=""
                loading="lazy"
                className="h-10 w-10 rounded-lg object-cover sm:h-12 sm:w-12"
              />

              <div className="relative mt-auto">
                <div className="flex items-end justify-between gap-4">
                  <h3 className="text-2xl font-normal leading-tight tracking-[-0.045em] text-primary">
                    {card.title}
                  </h3>
                  <span className="shrink-0 text-[10px] font-bold tracking-[0.2em] text-gray-400">
                    ({card.number})
                  </span>
                </div>
                <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                  {card.checklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-[11px] font-light text-gray-400"
                    >
                      <Check
                        size={13}
                        strokeWidth={1.5}
                        className="shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#about"
                  className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary/80 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  aria-label={`Learn more about ${card.title}`}
                >
                  Learn more
                  <ArrowRight size={13} className="-rotate-45" aria-hidden="true" />
                </a>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <main className="overflow-x-hidden bg-black">
      <Hero />
      <About />
      <Features />
    </main>
  )
}
