import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { name: 'Intro', link: '/' },
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Skills', link: '#skills' },
  { name: 'Certifications', link: '#certification' },
  { name: 'Education', link: '#education' },
  { name: 'Contact', link: '#contact' },
];

// Animation variants
const navVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut', staggerChildren: 0.08 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu(prev => !prev);
  const closeMenu = () => setMenu(false);

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : 'auto';
  }, [menu]);

  return (
    <motion.nav className="navbar" variants={navVariants} initial="hidden" animate="visible">
      <motion.h1
        className="logo"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={closeMenu}
      >
        Portfolio
      </motion.h1>

      <ul className="nav-links desktop">
        {navLinks.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <a href={item.link}>{item.name}</a>
          </motion.li>
        ))}
      </ul>

      {!menu ? (
        <motion.div
          className={`hamburger ${menu ? 'active' : ''}`}
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </motion.div>
      ) : (
        <motion.div
          className="close-icon"
          onClick={toggleMenu}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          whileTap={{ scale: 0.85 }}
        >
          ✖
        </motion.div>
      )}

      {/* Overlay */}
      <AnimatePresence>
        {menu && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menu && (
          <motion.ul
            className="nav-links mobile"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href={item.link} onClick={closeMenu}>
                  {item.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
