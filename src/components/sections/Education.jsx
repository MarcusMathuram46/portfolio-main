import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Award } from "lucide-react"
import { Card, CardContent } from "../ui/card"

export function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Education & Certifications</h2>
          <p className="text-muted-foreground text-lg">My academic background and professional training.</p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Card className="glass hover:border-primary/50 transition-colors">
            <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="p-4 rounded-full bg-primary/10 text-primary">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Full Stack Developer (MERN)</h3>
                <p className="text-foreground font-medium mb-1">
                  GUVI Geek Private Limited (IIMA & IIT Madras incubated)
                </p>
                <p className="text-muted-foreground text-sm">
                  In partnership with Google for Education | 08/2023 - 01/2024
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass hover:border-primary/50 transition-colors">
            <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="p-4 rounded-full bg-primary/10 text-primary">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Bachelor of Engineering - BE</h3>
                <p className="text-foreground font-medium mb-1">
                  Jeppiaar Engineering College
                </p>
                <p className="text-muted-foreground text-sm">
                  Chennai, India | 2018 - 2022
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
