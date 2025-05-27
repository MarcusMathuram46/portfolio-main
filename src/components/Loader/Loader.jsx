// src/components/Loader/Loader.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="loader-ring"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "linear",
        }}
      />
      <motion.div
        className="loader-glow"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      />
      <motion.p
        className="loader-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        Marcus, Prepping the Ui...
      </motion.p>
    </div>
  );
};

export default Loader;
