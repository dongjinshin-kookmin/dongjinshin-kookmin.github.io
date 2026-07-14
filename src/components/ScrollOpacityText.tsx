import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { useRef } from 'react'

type ScrollCharacterProps = {
  character: string
  index: number
  totalChars: number
  progress: MotionValue<number>
  reducedMotion: boolean
}

function ScrollCharacter({
  character,
  index,
  totalChars,
  progress,
  reducedMotion,
}: ScrollCharacterProps) {
  const opacity = useTransform(
    progress,
    [index / totalChars - 0.1, index / totalChars + 0.05],
    [0.2, 1],
  )

  return (
    <motion.span style={{ opacity: reducedMotion ? 1 : opacity }}>
      {character}
    </motion.span>
  )
}

type ScrollOpacityTextProps = {
  text: string
  className?: string
}

export function ScrollOpacityText({ text, className = '' }: ScrollOpacityTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })
  const characters = Array.from(text)

  return (
    <p ref={ref} className={className}>
      {characters.map((character, index) => (
        <ScrollCharacter
          key={`${character}-${index}`}
          character={character}
          index={index}
          totalChars={characters.length}
          progress={scrollYProgress}
          reducedMotion={Boolean(shouldReduceMotion)}
        />
      ))}
    </p>
  )
}
