import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, FolderGit2, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { Badge } from "../ui/badge"

const projects = [
  {
    title: "Aquametricas",
    description: "Utility submetering and property management ecosystem with Admin Portal and Resident Portal, automating financial workflows and high-volume data management.",
    features: [
      "Financial Reporting Engine: Rent Roll, Community Ledger, Payouts, Payment Summaries, Billing Summaries",
      "Automated Billing Architecture: 'Setup Billing Parameters' module (global + unit-level config), Bulk Import feature",
      "Physical Mail Integration: High-complexity 'PostGrid' integration for API-driven 'Send Letters' feature (automated printing/mailing of statements)",
      "Data Management & Imports: Multi-community AMR (Automated Meter Reading) data, units, meters, resident/owner records",
      "Administrative Control Tools: 'Bill Unlock', custom 'Query Reports'",
      "Resident Portal: Secure authentication, password reset workflows, account management"
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL (Neon)", "Drizzle ORM", "MUI Data Grid", "Charts", "REST API"],
    link: "https://aquametricas.com/"
  },
  {
    title: "Bestingems",
    description: "High-traffic e-commerce ecosystem, complex back-office operations and frontend performance.",
    features: [
      "Integrated administrative tools with Azure pipelines for deployment and data sync",
      "End-to-End Order Management: Full order lifecycle, real-time tracking of orders/refunds/shipments",
      "Advanced Data Processing: Complex filtering/sorting logic for centralized dashboard handling large-scale transactional data",
      "Automated Customer Communication: Nodemailer for order confirmations, shipping updates, refund processing",
      "Inventory Control Systems: Stock tracking, warehouse operations",
      "Frontend Performance Optimization: Reduced latency, improved core web vitals"
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "Azure", "Nodemailer", "MongoDB"],
    link: "https://bestingems.com/"
  },
  {
    title: "Mackinlay Learning Hub",
    description: "Fully responsive, production-ready educational platform.",
    features: [
      "Role-based authentication (Admin, User, Recruiter) using JWT",
      "Integrated payment gateway for real-time course transactions/enrollment",
      "Automated email workflows (auth, marketing, scheduled/delayed notifications) via NodeMailer",
      "Clean, modern UI using React-Bootstrap, Framer Motion, custom CSS"
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    link: "https://edulearning-hub.netlify.app/"
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

  const [selectedProject, setSelectedProject] = useState(null)

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
              <Card 
                className="h-full flex flex-col glass hover:border-primary/50 transition-all hover:-translate-y-2 group overflow-hidden relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <FolderGit2 className="w-8 h-8 text-primary" />
                    <div className="flex gap-3">
                      <a href={project.link} onClick={e => e.stopPropagation()} className="text-muted-foreground hover:text-foreground transition-colors z-10" target="_blank" rel="noopener noreferrer">
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
                    {project.features.slice(0, 3).map((feature, fIdx) => {
                      const parts = feature.split(":");
                      return (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="line-clamp-2">
                            {parts.length > 1 ? (
                              <><strong className="text-foreground">{parts[0]}:</strong>{parts.slice(1).join(":")}</>
                            ) : (
                              feature
                            )}
                          </span>
                        </li>
                      );
                    })}
                    {project.features.length > 3 && (
                      <li className="text-primary font-medium text-xs pt-2">Click to view full case study →</li>
                    )}
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

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-card border border-border shadow-2xl rounded-2xl z-50 p-6 md:p-8 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>
                <button onClick={() => setSelectedProject(null)} className="p-2 bg-secondary rounded-full hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-primary">Technical Implementation</h4>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {selectedProject.features.map((feature, fIdx) => {
                    const parts = feature.split(":");
                    return (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="leading-relaxed">
                          {parts.length > 1 ? (
                            <><strong className="text-foreground">{parts[0]}:</strong>{parts.slice(1).join(":")}</>
                          ) : (
                            feature
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Tech Stack</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map((t, tIdx) => (
                    <Badge key={tIdx} variant="secondary" className="px-3 py-1">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 border-t border-border pt-6">
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="w-full inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-lg hover:bg-primary/90 transition-colors font-medium">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
