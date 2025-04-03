import React from 'react';
import { motion } from 'framer-motion';
import "./Contact.css";
import '@fortawesome/fontawesome-free/css/all.css'; 

function Contact() {
  return (
    <motion.section 
      id='contact'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div>
        <motion.h1 
          id='contact-title'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Get in Touch
        </motion.h1>
        
        <motion.div 
          className='card'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >

          {/** Social Icons with animation */}
          {[
            { href: "https://github.com/MarcusMathuram46?tab=repositories", icon: "github" },
            { href: "mailto:marcus.mathuram7@gmail.com", icon: "envelope" },
            { href: "https://www.linkedin.com/in/marcus-mathuram46/", icon: "linkedin" },
            { href: "https://wa.me/+919688597790", icon: "whatsapp" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className={`social-link${index + 2}`}
              target='_blank'
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            >
              <i className={`fab fa-${item.icon}`} style={{ fontSize: "1.5rem", color: "#fff" }}></i>
            </motion.a>
          ))}
          
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
