import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const chars = '!<>-_\\\\/[]{}—=+*^?#________'

export function TextScramble({ text, className, duration = 1500, delay = 0 }) {
  const [displayText, setDisplayText] = useState('')
  const [isScrambling, setIsScrambling] = useState(true)

  useEffect(() => {
    let frame
    let startTime
    let timeout

    const scramble = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      if (progress >= duration) {
        setDisplayText(text)
        setIsScrambling(false)
        return
      }

      let result = ''
      for (let i = 0; i < text.length; i++) {
        // As time goes on, reveal more actual characters
        if (progress / duration > i / text.length) {
          result += text[i]
        } else {
          result += chars[Math.floor(Math.random() * chars.length)]
        }
      }
      setDisplayText(result)
      frame = requestAnimationFrame(scramble)
    }

    timeout = setTimeout(() => {
      frame = requestAnimationFrame(scramble)
    }, delay)

    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(timeout)
    }
  }, [text, duration, delay])

  return (
    <motion.span className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay / 1000 }}>
      {displayText}
    </motion.span>
  )
}
