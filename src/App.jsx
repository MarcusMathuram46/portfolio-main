import { useState } from "react"
import { ReactLenis } from 'lenis/react'
import { ThemeProvider } from "./components/layout/ThemeProvider"
import { Navbar } from "./components/layout/Navbar"
import { CustomCursor } from "./components/layout/CustomCursor"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Skills } from "./components/sections/Skills"
import { Experience } from "./components/sections/Experience"
import { Projects } from "./components/sections/Projects"
import { Education } from "./components/sections/Education"
import { Contact } from "./components/sections/Contact"
import { Footer } from "./components/layout/Footer"
import { Preloader } from "./components/ui/preloader"
import { TerminalEasterEgg } from "./components/ui/terminal"

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <ReactLenis root>
        {loading ? (
          <Preloader onComplete={() => setLoading(false)} />
        ) : (
          <div className="min-h-screen selection:bg-primary/30">
            <CustomCursor />
            <Navbar />
            
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Education />
              <Contact />
            </main>
            
            <Footer />
            <TerminalEasterEgg />
          </div>
        )}
      </ReactLenis>
    </ThemeProvider>
  )
}

export default App
