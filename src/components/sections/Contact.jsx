import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

export function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      e.target.reset()
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:marcus.mathuram7@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="p-3 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p>marcus.mathuram7@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:9688597790" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="p-3 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p>+91 96885 97790</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 text-muted-foreground group">
                  <div className="p-3 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p>Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a href="https://drive.google.com/file/d/1-BuJBHxZRThvtzGTdhHcuMC1qidIXakW/view" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 glass p-8 rounded-2xl">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" required placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" required placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" required placeholder="Hello Marcus..." className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
              {submitStatus === "success" && (
                <p className="text-green-500 text-sm text-center mt-4">Message sent successfully!</p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
