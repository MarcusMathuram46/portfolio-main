import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Intro.css";

function Intro() {
  const [titleText, setTitleText] = useState("");
  const [fsdText, setFsdText] = useState("");
  const fullName = "MARCUS";
  const fullRole = "FULL STACK DEVELOPER (MERN)";

  const animateText = (text, setter) => {
    setter("");
    text.split("").forEach((char, i) => {
      setTimeout(() => {
        setter(prev => prev + char);
      }, i * 100);
    });
  };

  useEffect(() => {
    animateText(fullName, setTitleText);
    animateText(fullRole, setFsdText);

    const intervalId = setInterval(() => {
      animateText(fullName, setTitleText);
      animateText(fullRole, setFsdText);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1Se54VnngeaCiCHKompExIXE2Dc4HAqbq/view", "_blank");
  };

  return (
    <motion.section
      id="intro"
      className="intro-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="intro-background-glow"></div>

      <div className="intro-content-container">
        <motion.h1
          className="intro-greeting"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hello, I'm{" "}
          <motion.span key={titleText} className="intro-highlighted">
            {titleText}
            <span className="intro-cursor">|</span>
          </motion.span>
        </motion.h1>

        <motion.h2
          className="intro-role"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {fsdText}
        </motion.h2>

        <motion.p
          className="intro-text"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Passionate about building full-stack applications using MongoDB, Express.js, React, and Node.js.
        </motion.p>

        <motion.button
          className="intro-resume-button"
          onClick={handleResumeClick}
          whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#111" }}
          whileTap={{ scale: 0.95 }}
        >
          View / Download Resume
        </motion.button>
      </div>
    </motion.section>
  );
}

export default Intro;
