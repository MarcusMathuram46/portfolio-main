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

function Education() {
  return (
    <motion.section
      id="education"
      className="edu-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        id="edu-title"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        STUDIES
      </motion.h2>

      <div className="edu-card-container">
        {education.map((data, i) => (
          <motion.div
            className="edu-card"
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="edu-card__image">
              <img src={data.img} alt={data.title} />
              <motion.h1 className="educ-title">{data.level}</motion.h1>
            </div>
            <div className="edu-card__content">
              <p className="edu-card__title">{data.title}</p>
              <p className="edu-card__description">{data.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Education;
