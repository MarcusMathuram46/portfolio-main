import React from "react";
import { motion } from "framer-motion";
import "./Education.css";

const education = [
  {
    school: "Jeppiaar Engineering College",
    level: "BE (EIE)",
    img: "https://i.postimg.cc/hG9SqNRJ/clg.jpg",
    title: "ELECTRONICS AND INSTRUMENTATION ENGINEERING",
    percentage: 79,
    description:
      "Completed Bachelor of Engineering in Electronics and Instrumentation Engineering (EIE) with a remarkable 79% from Jeppiaar Engineering College (Chennai).",
  },
  {
    school: "Mahatma Matriculation Higher Secondary School",
    level: "HSC (XII)",
    img: "https://i.postimg.cc/QC0TXH5y/school.jpg",
    title: "HIGHER SECONDARY",
    percentage: 70,
    description:
      "Completed HSC with a remarkable 70% from Mahatma Matriculation Higher Secondary School (Madurai).",
  },
  {
    school: "Mahatma Matriculation Higher Secondary School",
    level: "SSLC (X)",
    img: "https://i.postimg.cc/25Q3k1N7/tenth.jpg",
    title: "SECONDARY SCHOOL",
    percentage: 89,
    description:
      "Completed SSLC with a remarkable 89% from Mahatma Matriculation Higher Secondary School (Madurai).",
  },
];

// Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.3, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Education() {
  return (
    <motion.section
      id="education"
      className="edu-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        id="edu-title"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        STUDIES
      </motion.h2>

      <motion.div className="edu-card-container">
        {education.map((data, i) => (
          <motion.div
            className="edu-card"
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <motion.div className="edu-card__image">
              <motion.img
                src={data.img}
                alt={data.title}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.h1
                className="educ-title"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {data.level}
              </motion.h1>
            </motion.div>

            <motion.div className="edu-card__content">
              <motion.p
                className="edu-card__title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {data.title}
              </motion.p>
              <motion.p
                className="edu-card__description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {data.description}
              </motion.p>

              {/* Animated Progress Bar */}
              <motion.div className="edu-progress">
                <motion.div
                  className="edu-progress-bar"
                  initial={{ width: 0 }}
                  animate={{ width: `${data.percentage}%` }}
                  transition={{ duration: 1 }}
                />
                <motion.span className="edu-percent">{data.percentage}%</motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Education;
