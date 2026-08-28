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
                I am a Full Stack Developer with <span className="text-foreground font-semibold">3+ years of experience</span> building enterprise SaaS applications, utility billing systems, and e-commerce platforms using React, Next.js, Node.js, MongoDB, MySQL, and TypeScript.
              </p>
              <p>
                My expertise lies in designing scalable admin portals, REST APIs, reporting modules, and cloud deployments. I am deeply passionate about building responsive web applications, optimizing application performance, and integrating third-party APIs.
              </p>
              <p>
                Currently, I am a Software Developer at <span className="text-foreground font-semibold">Honeycomb Technologies Ltd</span>, working full-time with our client <span className="text-foreground font-semibold">Aquametricas</span> to deliver scalable, production-ready software solutions.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass p-2 relative z-10">
                <img 
                  src="https://i.postimg.cc/vBcXRtfK/Marcus-King.jpg" 
                  alt="Marcus Mathuram" 
                  className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                />
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
