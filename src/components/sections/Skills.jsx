import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiFramer, SiMui,
  SiNodedotjs, SiExpress, SiJsonwebtokens, SiCplusplus,
  SiMongodb, SiMysql, SiPostgresql, SiDrizzle,
  SiAmazonwebservices, SiGit, SiGithub, SiPostman, SiVercel, SiNetlify, SiRender, SiSendgrid
} from "react-icons/si"
import { Cloud, Mail, ServerCog } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: SiReact, color: "hover:border-[#61DAFB] hover:shadow-[0_0_15px_rgba(97,218,251,0.5)] hover:text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:text-white" },
      { name: "TypeScript", icon: SiTypescript, color: "hover:border-[#3178C6] hover:shadow-[0_0_15px_rgba(49,120,198,0.5)] hover:text-[#3178C6]" },
      { name: "JavaScript", icon: SiJavascript, color: "hover:border-[#F7DF1E] hover:shadow-[0_0_15px_rgba(247,223,30,0.5)] hover:text-[#F7DF1E]" },
      { name: "HTML", icon: SiHtml5, color: "hover:border-[#E34F26] hover:shadow-[0_0_15px_rgba(227,79,38,0.5)] hover:text-[#E34F26]" },
      { name: "CSS", icon: SiCss3, color: "hover:border-[#1572B6] hover:shadow-[0_0_15px_rgba(21,114,182,0.5)] hover:text-[#1572B6]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:border-[#06B6D4] hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:text-[#06B6D4]" },
      { name: "Bootstrap", icon: SiBootstrap, color: "hover:border-[#7952B3] hover:shadow-[0_0_15px_rgba(121,82,179,0.5)] hover:text-[#7952B3]" },
      { name: "Framer Motion", icon: SiFramer, color: "hover:border-[#0055FF] hover:shadow-[0_0_15px_rgba(0,85,255,0.5)] hover:text-[#0055FF]" },
      { name: "Material UI", icon: SiMui, color: "hover:border-[#007FFF] hover:shadow-[0_0_15px_rgba(0,127,255,0.5)] hover:text-[#007FFF]" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "hover:border-[#339933] hover:shadow-[0_0_15px_rgba(51,153,51,0.5)] hover:text-[#339933]" },
      { name: "Express.js", icon: SiExpress, color: "hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:text-white" },
      { name: "REST APIs", icon: ServerCog, color: "hover:border-primary hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] hover:text-primary" },
      { name: "JWT", icon: SiJsonwebtokens, color: "hover:border-[#FF00FF] hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] hover:text-[#FF00FF]" },
      { name: "Nodemailer", icon: Mail, color: "hover:border-green-400 hover:shadow-[0_0_15px_rgba(74,222,128,0.5)] hover:text-green-400" },
      { name: "C++", icon: SiCplusplus, color: "hover:border-[#00599C] hover:shadow-[0_0_15px_rgba(0,89,156,0.5)] hover:text-[#00599C]" }
    ]
  },
  {
    title: "Database Technologies",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "hover:border-[#47A248] hover:shadow-[0_0_15px_rgba(71,162,72,0.5)] hover:text-[#47A248]" },
      { name: "MySQL", icon: SiMysql, color: "hover:border-[#4479A1] hover:shadow-[0_0_15px_rgba(68,121,161,0.5)] hover:text-[#4479A1]" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "hover:border-[#4169E1] hover:shadow-[0_0_15px_rgba(65,105,225,0.5)] hover:text-[#4169E1]" },
      { name: "Drizzle ORM", icon: SiDrizzle, color: "hover:border-[#C5F74F] hover:shadow-[0_0_15px_rgba(197,247,79,0.5)] hover:text-[#C5F74F]" }
    ]
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "AWS", icon: SiAmazonwebservices, color: "hover:border-[#FF9900] hover:shadow-[0_0_15px_rgba(255,153,0,0.5)] hover:text-[#FF9900]" },
      { name: "Git", icon: SiGit, color: "hover:border-[#F05032] hover:shadow-[0_0_15px_rgba(240,80,50,0.5)] hover:text-[#F05032]" },
      { name: "GitHub", icon: SiGithub, color: "hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:text-white" },
      { name: "Postman", icon: SiPostman, color: "hover:border-[#FF6C37] hover:shadow-[0_0_15px_rgba(255,108,55,0.5)] hover:text-[#FF6C37]" },
      { name: "Vercel", icon: SiVercel, color: "hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:text-white" },
      { name: "Netlify", icon: SiNetlify, color: "hover:border-[#00C7B7] hover:shadow-[0_0_15px_rgba(0,199,183,0.5)] hover:text-[#00C7B7]" },
      { name: "Render", icon: SiRender, color: "hover:border-[#46E3B7] hover:shadow-[0_0_15px_rgba(70,227,183,0.5)] hover:text-[#46E3B7]" },
      { name: "SendGrid", icon: SiSendgrid, color: "hover:border-[#51A9E3] hover:shadow-[0_0_15px_rgba(81,169,227,0.5)] hover:text-[#51A9E3]" },
      { name: "PostGrid", icon: Mail, color: "hover:border-[#FF4500] hover:shadow-[0_0_15px_rgba(255,69,0,0.5)] hover:text-[#FF4500]" }
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

export function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/10 -z-10"></div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Ecosystem</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive suite of technologies and tools I leverage to build scalable, modern applications.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-2xl font-semibold border-b border-border pb-4">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    variants={itemVariants}
                    className={`flex items-center gap-3 p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm cursor-pointer transition-all duration-300 ${skill.color}`}
                  >
                    <skill.icon className="w-6 h-6 shrink-0 transition-colors duration-300" />
                    <span className="font-medium text-sm transition-colors duration-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
