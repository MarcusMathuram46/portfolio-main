import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Calendar, ChevronRight } from "lucide-react"
import { Card, CardContent } from "../ui/card"

const experiences = [
  {
    role: "Software Developer",
    company: "Honeycomb Technologies Ltd",
    period: "09/2025 – Present",
    type: "Remote",
    description: "Honeycomb Technologies Ltd is a dynamic professional organization committed to delivering innovative, collaborative digital solutions through high-quality software development and maintenance.",
    achievements: [
      "Developing comprehensive admin and tenant portals for a large-scale utility submetering system using Next.js and TypeScript",
      "Architecting complex billing cycle engines and automated reporting modules to streamline utility management and data accuracy",
      "Managing backend data structures and queries using MySQL for high-performance handling of submetering records",
      "Engineered a robust Admin Portal featuring advanced Order Management and Inventory Management systems for an e-commerce platform",
      "Optimized full-stack performance for the frontend website to enhance user experience and site speed",
      "Deployed and maintained application infrastructure using Vercel for seamless continuous integration"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Texspire Solution Private Limited",
    period: "07/2025 – 08/2025",
    type: "Remote",
    description: "Texspire delivers end-to-end digital solutions in UI/UX design, website development, and data science to empower businesses through innovative, AI-driven products.",
    achievements: [
      "Developed a responsive hospital website using the MERN stack and Framer Motion, enhancing user engagement with smooth UI animations",
      "Successfully architected and deployed the complete platform within an accelerated 4-week development sprint"
    ]
  },
  {
    role: "MERN Full Stack Developer",
    company: "MackinLay Enterprise",
    period: "03/2025 – 06/2025",
    type: "Remote",
    description: "Mackinlay Learning Hub is an innovative educational platform delivering industry-focused programs in HR, Business, Finance, Marketing and Sales.",
    achievements: [
      "Designed and developed a fully responsive educational platform using the MERN stack (MongoDB, Express.js, React.js, Node.js)",
      "Crafted high-performance, visually engaging, mobile-responsive UIs using React.js, Bootstrap, and Framer Motion",
      "Built robust backend systems and managed scalable databases using Node.js, Express.js, and MongoDB",
      "Ensured cross-browser compatibility and mobile responsiveness"
    ]
  },
  {
    role: "MERN Full Stack Developer",
    company: "Elshaddai IT Education and Development",
    period: "12/2023 – 02/2025",
    type: "Madurai",
    description: "A premier IT education and development company providing industry-acclaimed courses and certifications that drive career growth.",
    achievements: [
      "Reviewed code, debugged problems, and corrected issues",
      "Discussed project progress with customers, collected feedback, addressed concerns directly",
      "Used JavaScript, C, C++ for problem solving"
    ]
  },
  {
    role: "Full-stack Developer",
    company: "Freelance",
    period: "09/2022 – 12/2023",
    type: "Madurai, Tamil Nadu, India",
    description: "Independent freelance work focusing on end-to-end web development solutions for various clients.",
    achievements: [
      "Delivered web development services as a freelancer using Bootstrap, HTML, CSS, JavaScript"
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg">My professional journey and career progression.</p>
        </div>

        <div className="relative border-l-2 border-primary/20 md:border-l-0">
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <TimelineItem key={idx} exp={exp} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ exp, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const isEven = index % 2 === 0

  return (
    <div ref={ref} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline Dot */}
      <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10 mt-6 md:mt-0"></div>
      
      <div className={`pl-8 md:pl-0 w-full md:w-1/2 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="glass hover:border-primary/30 transition-all">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
              <div className="text-primary font-medium mb-3 flex items-center gap-2 justify-start md:justify-start">
                <Briefcase className="w-4 h-4" /> {exp.company}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4 justify-start md:justify-start">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {exp.period}</span>
                <span className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">{exp.type}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed text-left mb-4 italic">
                {exp.description}
              </p>
              <ul className="space-y-2 text-left">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
