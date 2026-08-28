import { motion } from "framer-motion"
import { Mail, FileText, ArrowRight } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Button } from "../ui/button"
import { Magnetic } from "../ui/magnetic"
import { TextScramble } from "../ui/text-scramble"

import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"
import { useRef } from "react"

function AnimatedSphere() {
  const meshRef = useRef()
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.y = t * 0.1
    meshRef.current.rotation.z = t * 0.05
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.2
  })

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1.5}>
      <MeshDistortMaterial
        color="#a1a1aa"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.15}
      />
    </Sphere>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-20">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[2, 1, 1]} intensity={2} />
          <AnimatedSphere />
        </Canvas>
      </div>

      {/* Gradient decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background/80 to-background"></div>
      
      <div className="container mx-auto px-6 z-10 pointer-events-none">
        <motion.div
          className="max-w-4xl mx-auto text-center pointer-events-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              Available for new opportunities
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Hi, I'm <span className="text-primary">Marcus Mathuram</span>
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6"
          >
            <TextScramble text="Full Stack Developer (MERN/Next.js)" delay={500} />
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I specialize in architecting scalable enterprise SaaS applications, utility billing systems, and high-traffic e-commerce platforms. 
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Magnetic>
              <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
                <a href="#projects">
                  View Projects <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2" asChild>
                <a href="https://drive.google.com/file/d/1-BuJBHxZRThvtzGTdhHcuMC1qidIXakW/view" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4" /> Download Resume
                </a>
              </Button>
            </Magnetic>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-6">
            <a href="https://github.com/MarcusMathuram46" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaGithub className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:marcus.mathuram7@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
