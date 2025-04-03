import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

const Projects = ({ projects }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [category, setCategory] = useState("all");
  const containerRef = useRef(null);

  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((project) => project.type === category);

  const totalCards = filteredProjects.length;

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  const handleIndicatorClick = (index) => {
    setStartIndex(index);
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 id="project-title" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        Projects
      </motion.h1>

      <div className="sliderContainer" ref={containerRef}>
        {/* Category Buttons */}
        <motion.div className="categories">
          {["all", "fullstack", "miniproject"].map((type) => (
            <motion.button
              key={type}
              className={category === type ? "active" : ""}
              onClick={() => setCategory(type)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {type === "all" ? "All" : type.charAt(0).toUpperCase() + type.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            className="containerProject"
            key={startIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.length > 0 && (
              <motion.div className="cardProject">
                <h2 style={{ textAlign: "center" }}>{filteredProjects[startIndex].title}</h2>
                <motion.img
                  style={{ width: "250px", height: "150px", marginLeft: "13%" }}
                  src={filteredProjects[startIndex].image}
                  alt={`Project ${startIndex + 1}`}
                  className="projectImage"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div className="detailsProject">
                  <p>{filteredProjects[startIndex].description}</p>
                  <div>
                    <h3 style={{ marginBottom: "5px" }}>
                      <strong>Tools Used:</strong>
                    </h3>
                    {filteredProjects[startIndex].toolsUsed.join(", ")}
                  </div>
                  <div className="buttons">
                    <motion.a
                      href={filteredProjects[startIndex].sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn1"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Source Code
                    </motion.a>
                    <motion.a
                      href={filteredProjects[startIndex].liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn1"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Live Demo
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {totalCards > 1 && (
          <>
            <motion.button className="sliderButton left" onClick={prevSlide} whileHover={{ scale: 1.1 }}>
              <FaArrowLeft />
            </motion.button>
            <motion.button className="sliderButton right" onClick={nextSlide} whileHover={{ scale: 1.1 }}>
              <FaArrowRight />
            </motion.button>
          </>
        )}

        {/* Indicators */}
        <motion.div className="indicators">
          {Array.from({ length: totalCards }).map((_, index) => (
            <motion.span
              key={index}
              className={`indicator ${startIndex === index ? "active" : ""}`}
              onClick={() => handleIndicatorClick(index)}
              whileHover={{ scale: 1.3 }}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
