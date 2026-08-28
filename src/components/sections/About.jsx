import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a MERN Full Stack Developer with over <span className="text-foreground font-semibold">3 years of experience</span> building production-ready web applications. My expertise lies in architecting complex billing engines, financial reporting systems, and highly scalable admin portals.
              </p>
              <p>
                Currently, I am a Software Developer at <span className="text-foreground font-semibold">Honeycomb Technologies Ltd</span>, working full-time with our client <span className="text-foreground font-semibold">Aquametricas</span>. In this role, I architect critical submetering infrastructure, automated billing cycle engines, and comprehensive financial reporting modules to handle high-volume data management for property owners and tenants.
              </p>
              <p>
                I am deeply passionate about performance optimization, crafting intuitive user interfaces, and designing robust backend architectures that solve real-world enterprise problems.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass p-2">
                <div className="w-full h-full bg-secondary rounded-xl flex items-center justify-center">
                  <span className="text-9xl">👨‍💻</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
