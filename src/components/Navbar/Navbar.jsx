import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.css";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 id="portfolio">Portfolio</h1>

      {/* Animated Menu List */}
      <AnimatePresence>
        {menu && (
          <motion.ul
            className="menu"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {[
              { name: "Intro", link: "/" },
              { name: "About", link: "#about" },
              { name: "Projects", link: "#projects" },
              { name: "Skills", link: "#skills" },
              { name: "Certifications", link: "#certifications" },
              { name: "Education", link: "#education" },
              { name: "Contact", link: "#contact" },
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
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

      {/* Animated Menu Button */}
      <motion.div
        id="drop-down"
        initial={{ rotate: 0 }}
        animate={{ rotate: menu ? 90 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <input id="checkbox" type="checkbox" checked={menu} onChange={toggleMenu} />
        <label className="toggle" htmlFor="checkbox">
          <motion.div
            id="drop1"
            className="drops"
            animate={{ rotate: menu ? 45 : 0, y: menu ? 6 : 0 }}
          ></motion.div>
          <motion.div
            id="drop2"
            className="drops"
            animate={{ opacity: menu ? 0 : 1 }}
          ></motion.div>
          <motion.div
            id="drop3"
            className="drops"
            animate={{ rotate: menu ? -45 : 0, y: menu ? -6 : 0 }}
          ></motion.div>
        </label>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;
