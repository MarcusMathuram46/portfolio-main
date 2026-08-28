import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, FolderGit2, CheckCircle2 } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { Badge } from "../ui/badge"

const projects = [
  {
    title: "Aquametricas / SubmeterUSA",
    description: "Developed a sophisticated utility submetering and property management ecosystem consisting of an extensive Admin Portal and a Resident Portal.",
    features: [
      "Financial Reporting Engine: Architected and implemented a comprehensive suite of financial reports (Rent Roll, Community Ledger, Payouts, Payment Summaries).",
      "Automated Billing Architecture: Developed the 'Setup Billing Parameters' module with a Bulk Import feature for rapid system onboarding.",
      "Physical Mail Integration: Engineered a high-complexity 'PostGrid' API integration to automate printing and physical mailing of resident statements.",
      "Data Management & Imports: Built robust import tools for Multi-community AMR data, units, meters, and resident records.",
      "Administrative Control Tools: Created advanced utility tools like 'Bill Unlock' and custom 'Query Reports'.",
      "Resident Portal Enhancements: Developed secure authentication, password resets, and account management."
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "PostGrid API"],
    link: "#",
    github: "#"
  },
  {
    title: "Bestingems E-commerce Admin",
    description: "Optimized and expanded a high-traffic e-commerce ecosystem, focusing on complex back-office operations and frontend performance.",
    features: [
      "End-to-End Order Management: Architected a comprehensive Admin Portal for real-time tracking of orders, refunds, and shipments.",
      "Advanced Data Processing: Developed complex filtering and sorting logic for a centralized dashboard to handle large-scale transactional data.",
      "Automated Customer Communication: Integrated Nodemailer for system-generated emails (confirmations, shipping, refunds).",
      "Inventory Control Systems: Engineered key modules to streamline stock tracking and warehouse operations.",
      "Frontend Performance Optimization: Executed performance tuning on the primary consumer-facing website."
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "Azure", "Nodemailer", "MongoDB"],
    link: "#",
    github: "#"
  },
  {
    title: "Mackinlay Learning Hub",
    description: "Engineered a fully responsive, production-ready educational platform for Mackinlay Learning Hub featuring dynamic content management and scalable architecture.",
    features: [
      "Implemented role-based authentication (Admin, User, Recruiter) using JWT.",
      "Integrated a payment gateway to enable seamless, real-time course transactions and enrollment.",
      "Built automated email workflows for authentication, marketing, and scheduled notifications using NodeMailer.",
      "Crafted a clean, modern UI using React-Bootstrap, Framer Motion, and custom CSS."
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Framer Motion"],
    link: "#",
    github: "#"
  }
]

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <div className="h-px bg-border flex-1"></div>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={item} className="h-full">
              <Card className="h-full flex flex-col glass hover:border-primary/50 transition-all hover:-translate-y-2 group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <FolderGit2 className="w-8 h-8 text-primary" />
                    <div className="flex gap-3">
                      <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors">
                        <FaGithub className="w-5 h-5" />
                      </a>
                      <a href={project.link} className="text-muted-foreground hover:text-foreground transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-sm mt-2 leading-relaxed font-medium">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
                    {project.features.map((feature, fIdx) => {
                      // Bold the first part (e.g. "Financial Reporting Engine:")
                      const parts = feature.split(":");
                      return (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            {parts.length > 1 ? (
                              <>
                                <strong className="text-foreground">{parts[0]}:</strong>
                                {parts.slice(1).join(":")}
                              </>
                            ) : (
                              feature
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, tIdx) => (
                      <Badge key={tIdx} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
