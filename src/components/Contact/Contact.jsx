import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa';
import './Contact.css';

const socialLinks = [
  {
    href: 'https://github.com/MarcusMathuram46?tab=repositories',
    icon: <FaGithub />,
    label: 'GitHub'
  },
  {
    href: 'mailto:marcus.mathuram7@gmail.com',
    icon: <FaEnvelope />,
    label: 'Email'
  },
  {
    href: 'https://www.linkedin.com/in/marcus-mathuram46/',
    icon: <FaLinkedin />,
    label: 'LinkedIn'
  },
  {
    href: 'https://wa.me/+919688597790',
    icon: <FaWhatsapp />,
    label: 'WhatsApp'
  }
];

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div>
        <motion.h1
          id="contact-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          Get in Touch
        </motion.h1>

        <motion.div
          className="card"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        >
          {socialLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className={`social-link${index + 1}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              style={{
                color: '#fff',
                fontSize: '2rem',
                margin: '0 1rem',
              }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
