import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skillsData = {
  "frontend.js": [
    "React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Framer Motion", "Material UI (MUI)"
  ],
  "backend.js": [
    "Node.js", "Express.js", "REST APIs", "JWT", "Nodemailer", "C++"
  ],
  "database.sql": [
    "MongoDB", "MySQL", "PostgreSQL (Neon)", "Drizzle ORM"
  ],
  "tools.sh": [
    "AWS", "Azure", "Git", "GitHub", "Postman", "Vercel", "Netlify", "Render", "SendGrid", "PostGrid"
  ]
}

export function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeTab, setActiveTab] = useState("frontend.js")

  const tabs = Object.keys(skillsData)

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable web applications.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden border border-border bg-[#1e1e1e] shadow-2xl font-mono text-sm"
        >
          {/* macOS window controls */}
          <div className="flex items-center px-4 py-3 bg-[#2d2d2d] border-b border-[#404040]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="mx-auto text-[#858585] text-xs">portfolio-skills - VS Code</div>
          </div>

          {/* Tabs */}
          <div className="flex overflow-x-auto bg-[#252526] scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 flex items-center gap-2 border-t-2 transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-[#1e1e1e] border-primary text-[#e0e0e0]"
                    : "border-transparent text-[#858585] hover:bg-[#2a2d2e] hover:text-[#cccccc]"
                }`}
              >
                {tab.endsWith('.js') && <span className="text-yellow-400">JS</span>}
                {tab.endsWith('.sql') && <span className="text-blue-400">SQL</span>}
                {tab.endsWith('.sh') && <span className="text-green-400">$_</span>}
                {tab}
              </button>
            ))}
          </div>

          {/* Code Area */}
          <div className="p-6 h-[300px] overflow-y-auto bg-[#1e1e1e] text-[#d4d4d4]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="space-y-1"
              >
                <div className="flex">
                  <span className="w-8 inline-block text-[#858585] select-none text-right pr-4">1</span>
                  <span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">{activeTab.split('.')[0]}</span> = [
                </div>
                {skillsData[activeTab].map((skill, idx) => (
                  <div key={idx} className="flex">
                    <span className="w-8 inline-block text-[#858585] select-none text-right pr-4">{idx + 2}</span>
                    <span className="pl-4">
                      <span className="text-[#ce9178]">"{skill}"</span>{idx < skillsData[activeTab].length - 1 ? ',' : ''}
                    </span>
                  </div>
                ))}
                <div className="flex">
                  <span className="w-8 inline-block text-[#858585] select-none text-right pr-4">{skillsData[activeTab].length + 2}</span>
                  ];
                </div>
                <div className="flex">
                  <span className="w-8 inline-block text-[#858585] select-none text-right pr-4">{skillsData[activeTab].length + 3}</span>
                  <span className="text-[#c586c0]">export</span> <span className="text-[#c586c0]">default</span> <span className="text-[#4fc1ff]">{activeTab.split('.')[0]}</span>;
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
