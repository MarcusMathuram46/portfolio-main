import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function TerminalEasterEgg() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [history, setHistory] = useState([
    { type: "system", text: "Welcome to MarcusOS v1.0.0." },
    { type: "system", text: "Type 'help' to see available commands." }
  ])
  
  const inputRef = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl + ` (backtick) or Ctrl + ~ to open terminal
      if (e.ctrlKey && e.key === "`") {
        setIsOpen(prev => !prev)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [history])

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase()
      const newHistory = [...history, { type: "user", text: `root@marcus:~$ ${cmd}` }]
      
      let response = ""
      switch (cmd) {
        case "help":
          response = "Available commands: help, whoami, clear, hire-marcus, cat resume.txt"
          break
        case "whoami":
          response = "Marcus Mathuram - MERN Full Stack Developer passionate about enterprise SaaS."
          break
        case "hire-marcus":
          response = "Excellent choice! Initiating hiring protocol... Please contact marcus.mathuram7@gmail.com."
          break
        case "cat resume.txt":
          response = "Loading resume... \nSkills: React, Next.js, Node.js, MongoDB\nExperience: 3+ Years building robust web apps."
          break
        case "clear":
          setHistory([])
          setInput("")
          return
        case "":
          break
        default:
          response = `Command not found: ${cmd}. Type 'help' for a list of commands.`
      }

      if (response) {
        newHistory.push({ type: "system", text: response })
      }
      
      setHistory(newHistory)
      setInput("")
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          className="fixed bottom-4 right-4 w-[90%] md:w-[500px] h-[350px] bg-[#1e1e1e] border border-[#333] shadow-2xl rounded-lg overflow-hidden flex flex-col z-[999]"
        >
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#404040] select-none">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] cursor-pointer" onClick={() => setIsOpen(false)}></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="mx-auto text-[#858585] text-xs font-mono">marcus@terminal ~ bash</div>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 p-4 font-mono text-sm overflow-y-auto bg-[#1e1e1e] text-[#d4d4d4]" onClick={() => inputRef.current?.focus()}>
            {history.map((line, i) => (
              <div key={i} className={`mb-1 whitespace-pre-wrap ${line.type === "user" ? "text-[#569cd6]" : "text-[#ce9178]"}`}>
                {line.text}
              </div>
            ))}
            <div className="flex items-center mt-2">
              <span className="text-[#27c93f] mr-2">root@marcus:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="flex-1 bg-transparent outline-none text-[#d4d4d4] caret-[#d4d4d4]"
                autoFocus
                spellCheck="false"
                autoComplete="off"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
