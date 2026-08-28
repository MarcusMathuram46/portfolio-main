import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [text, setText] = useState("INITIALIZING SYSTEM...")

  useEffect(() => {
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5
      if (currentProgress >= 100) {
        currentProgress = 100
        setProgress(100)
        setText("SYSTEM READY")
        clearInterval(interval)
        setTimeout(() => {
          onComplete()
        }, 800)
      } else {
        setProgress(currentProgress)
        if (currentProgress > 30) setText("LOADING ASSETS...")
        if (currentProgress > 60) setText("ESTABLISHING CONNECTION...")
        if (currentProgress > 80) setText("DECRYPTING PORTFOLIO...")
      }
    }, 150)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] text-primary font-mono"
      >
        <div className="w-64 max-w-full px-4">
          <div className="flex justify-between mb-2 text-sm tracking-widest text-[#a1a1aa]">
            <span>{text}</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1 w-full bg-[#27272a] overflow-hidden rounded-full">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.2 }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
