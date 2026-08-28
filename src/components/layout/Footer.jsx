import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary/20 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <a href="#" className="text-xl font-bold tracking-tighter mb-2 block">
            MM<span className="text-primary">.</span>
          </a>
          <p className="text-muted-foreground text-sm">
            © {currentYear} Marcus Mathuram. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/MarcusMathuram46" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaGithub className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaLinkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:marcus.mathuram7@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
