import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Intro.css";

function Intro() {
  const [titleText, setTitleText] = useState("");
  const [fsdText, setFsdText] = useState("");

  const animateTitle = (text, setText) => {
    setText("");
    text.split("").forEach((letter, index) => {
      setTimeout(() => {
        setText((prevText) => prevText + letter);
      }, index * 150);
    });
  };

  useEffect(() => {
    animateTitle("MARCUS", setTitleText);
    animateTitle("FULL STACK DEVELOPER (MERN)", setFsdText);

    const intervalId = setInterval(() => {
      animateTitle("MARCUS", setTitleText);
      animateTitle("FULL STACK DEVELOPER (MERN)", setFsdText);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const handleResumeClick = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1Y5Z1uLkJpj-B13PCoyigxyWs_UEMGuO3/view?usp=sharing";
    window.open(resumeUrl, "_blank");
  };

  return (
    <motion.section
      id="intro"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div id="left-content">
        <motion.h1
          id="title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hello, I'm{" "}
          <motion.span
            key={titleText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {titleText}
          </motion.span>
        </motion.h1>
        <br />
        <motion.h1
          id="fsd"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {fsdText}
        </motion.h1>
        <motion.p
          id="para"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I'm very much interested in creating websites and apps using the
          technology stack called MERN (MongoDB, Express.js, React, Node.js).
        </motion.p>
        <div style={{ display: "flex" }}>
          <motion.button
            className="resume glow-on-hover"
            onClick={handleResumeClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View / Download Resume
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}

export default Intro;
