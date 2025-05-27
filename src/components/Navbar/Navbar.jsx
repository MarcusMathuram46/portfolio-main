import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navLinks = [
    { name: "Intro", link: "/" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Certifications", link: "#certification" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];

  const toggleMenu = () => setMenu((prev) => !prev);
  const closeMenu = () => setMenu(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="logo" onClick={closeMenu}>Portfolio</h1>

      {/* Desktop Nav */}
      <ul className="nav-links desktop">
        {navLinks.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        <motion.div
          className="bar"
          animate={{ rotate: menu ? 45 : 0, y: menu ? 6 : 0 }}
        />
        <motion.div
          className="bar"
          animate={{ opacity: menu ? 0 : 1 }}
        />
        <motion.div
          className="bar"
          animate={{ rotate: menu ? -45 : 0, y: menu ? -6 : 0 }}
        />
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menu && (
          <motion.ul
            className="nav-links mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {navLinks.map((item, index) => (
              <motion.li
                key={index}
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
