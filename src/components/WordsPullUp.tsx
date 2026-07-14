import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, type Ref } from 'react'

type WordsPullUpProps = {
  text: string
  className?: string
  showAsterisk?: boolean
  as?: 'h1' | 'h2' | 'p' | 'div'
  id?: string
}

export function WordsPullUp({
  text,
  className = '',
  showAsterisk = false,
  as = 'div',
  id,
}: WordsPullUpProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const shouldReduceMotion = useReducedMotion()
  const words = text.split(' ')

  const content = (
    <>
      {words.map((word, index) => {
        const isFinalWord = index === words.length - 1

        return (
          <motion.span
            key={`${word}-${index}`}
            className="relative inline-block"
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.65,
              delay: shouldReduceMotion ? 0 : index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {showAsterisk && isFinalWord ? (
              <sup
                className="absolute -right-[0.3em] top-[0.65em] text-[0.31em] font-light leading-none tracking-normal"
                aria-hidden="true"
              >
                *
              </sup>
            ) : null}
            {isFinalWord ? null : '\u00a0'}
          </motion.span>
        )
      })}
    </>
  )

  if (as === 'h1') {
    return <h1 id={id} ref={ref as Ref<HTMLHeadingElement>} className={className}>{content}</h1>
  }

  if (as === 'h2') {
    return <h2 id={id} ref={ref as Ref<HTMLHeadingElement>} className={className}>{content}</h2>
  }

  if (as === 'p') {
    return <p id={id} ref={ref as Ref<HTMLParagraphElement>} className={className}>{content}</p>
  }

  return <div id={id} ref={ref as Ref<HTMLDivElement>} className={className}>{content}</div>
}

export type WordStyleSegment = {
  text: string
  className?: string
  breakBefore?: boolean
}

type WordsPullUpMultiStyleProps = {
  segments: WordStyleSegment[]
  className?: string
  as?: 'h2' | 'p' | 'div'
  id?: string
}

export function WordsPullUpMultiStyle({
  segments,
  className = '',
  as = 'div',
  id,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const shouldReduceMotion = useReducedMotion()
  let wordIndex = 0

  const content = segments.flatMap((segment, segmentIndex) => {
    const animatedWords = segment.text.split(' ').map((word, index, words) => {
      const animationIndex = wordIndex++
      const needsSpace = index < words.length - 1 || segmentIndex < segments.length - 1

      return (
        <motion.span
          key={`${segmentIndex}-${word}-${index}`}
          className={`inline-flex whitespace-pre ${segment.className ?? ''}`}
          initial={{
            opacity: shouldReduceMotion ? 1 : 0,
            y: shouldReduceMotion ? 0 : 20,
          }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.65,
            delay: shouldReduceMotion ? 0 : animationIndex * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
          {needsSpace ? '\u00a0' : ''}
        </motion.span>
      )
    })

    return segment.breakBefore && segmentIndex > 0
      ? [<span key={`break-${segmentIndex}`} className="basis-full" aria-hidden="true" />, ...animatedWords]
      : animatedWords
  })

  const combinedClassName = `flex flex-wrap items-baseline justify-center ${className}`

  if (as === 'h2') {
    return (
      <h2 id={id} ref={ref as Ref<HTMLHeadingElement>} className={combinedClassName}>
        {content}
      </h2>
    )
  }

  if (as === 'p') {
    return (
      <p id={id} ref={ref as Ref<HTMLParagraphElement>} className={combinedClassName}>
        {content}
      </p>
    )
  }

  return (
    <div id={id} ref={ref as Ref<HTMLDivElement>} className={combinedClassName}>
      {content}
    </div>
  )
}
