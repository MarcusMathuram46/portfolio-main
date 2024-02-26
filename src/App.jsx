import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Intro from './components/Intro/Intro';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Education />
    </div>    
  )
}

export default App
