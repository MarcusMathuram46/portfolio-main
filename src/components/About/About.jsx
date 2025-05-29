import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './About.css';

function About() {
  const socialLinks = [
    {
      href: 'https://github.com/MarcusMathuram46/',
      icon: <FaGithub />,
      label: 'GitHub',
    },
    {
      href: 'mailto:marcus.mathuram7@gmail.com',
      icon: <FaEnvelope />,
      label: 'Email',
    },
    {
      href: 'https://wa.me/+919688597790',
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
    },
    {
      href: 'https://www.linkedin.com/in/marcus-mathuram46/',
      icon: <FaLinkedin />,
      label: 'LinkedIn',
    },
  ];

  return (
    <section id="about" className="about-section">
      {/* Content Section */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="about-section-title">About Me</h2>

        <p className="about-lightning-text">
          Welcome to my portfolio — I'm <span>Marcus</span>, a driven and
          versatile <span>Full Stack Developer</span> with a foundation in{' '}
          <span>Electronics and Instrumentation Engineering</span>. I specialize
          in transforming complex ideas into elegant, functional, and
          user-friendly digital solutions.
        </p>

        <p className="about-paragraph">
          My mission is to build technology that not only performs but
          impresses. I bring a blend of engineering logic and design thinking to
          every project, delivering solutions that are fast, responsive, and
          future-ready.
        </p>

        <p className="about-paragraph">
          I value clean code, scalable architecture, and seamless user
          experiences. Whether it's frontend magic or backend logic, I thrive on
          solving real-world problems through code.
        </p>

        <p className="about-paragraph">
          I believe great software is built through collaboration. I take pride
          in being a strong communicator and a reliable team player who always
          puts the project's success first.
        </p>

        <p className="about-paragraph">
          In the ever-evolving world of <span>Full Stack Development</span>, I’m
          committed to continuous learning and staying ahead of the curve. Every
          line of code is an opportunity to grow and innovate.
        </p>
      </motion.div>

      {/* Image & Social Links */}
      <motion.div
        className="about-image-area"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 70 }}
      >
        <div className="about-img-wrapper">
          <img
            src="https://i.postimg.cc/vBcXRtfK/Marcus-King.jpg"
            alt="marcus"
            loading="lazy"
            className="about-img"
          />
        </div>
        <h2 className="about-name">Marcus</h2>

        {/* Social Icons */}
        <motion.ul
          className="about-social-links"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 1 },
            },
          }}
        >
          {socialLinks.map((link, index) => (
            <motion.li
              key={index}
              className="about-social-item"
              whileHover={{ scale: 1.3, color: '#6366F1' }}
              transition={{ type: 'spring', stiffness: 300 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="about-social-link"
              >
                {link.icon}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}

export default About;
