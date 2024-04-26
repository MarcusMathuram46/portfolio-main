import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Projects.css";

const Projects = ({ projects }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [category, setCategory] = useState("all");
  const containerRef = useRef(null);

  // const screenWidth = window.innerWidth;

  let cardsToShow = 1;
  // if (screenWidth < 755) {
  //   cardsToShow = 1;
  // }
  // else if (screenWidth >= 755 && screenWidth < 1140) {
  //   cardsToShow = 2;
  // }
  // else {
  //   cardsToShow = 2;
  // }

  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((project) => project.type === category);

  const totalCards = filteredProjects.length;
  const numIndicators = totalCards;

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  const updateIndexWithLoop = (newIndex) => {
    setStartIndex((prevIndex) => (newIndex + totalCards) % totalCards);
  };

  const handleIndicatorClick = (index) => {
    const newIndex = index * cardsToShow;
    updateIndexWithLoop(newIndex);
  };

  const isActive = (index) => {
    const start = index * cardsToShow;
    const end = start + cardsToShow;
    return startIndex >= start && startIndex < end;
  };

  return (
    <section id="projects">
      <h1 id="conttitle">Projects</h1>
      <div className="sliderContainer" ref={containerRef}>
        <div className="categories">
          <button
            className={category === "all" ? "active" : ""}
            onClick={() => setCategory("all")}
          >
            All
          </button>
          <button
            className={category === "fullstack" ? "active" : ""}
            onClick={() => setCategory("fullstack")}
          >
            Full Stack
          </button>
          <button
            className={category === "miniproject" ? "active" : ""}
            onClick={() => setCategory("miniproject")}
          >
            Mini Project
          </button>
        </div>

        <div className="containerProject">
          {Array.from({ length: cardsToShow }).map((_, index) => {
            const projectIndex = (startIndex + index) % totalCards;
            const project = filteredProjects[projectIndex];
            return (
              <div key={index} className="cardProject">
                <h2 style={{ textAlign: "center" }}>{project.title}</h2>
                <img
                  style={{ width: "250px", height: "150px", marginLeft: "13%" }}
                  src={project.image}
                  alt={`Project ${projectIndex + 1}`}
                  className="projectImage"
                />
                <div className="detailsProject">
                  <p>{project.description}</p>
                  <div>
                    <h3 style={{ marginBottom: "5px" }}>
                      <strong>Tools Used:</strong>
                    </h3>
                    {project.toolsUsed.join(", ")}
                  </div>
                  <div className="buttons">
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn1"
                    >
                      Source Code
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn1"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {totalCards > 1 && (
          <>
            <button className="sliderButton left" onClick={prevSlide}>
              <FaArrowLeft />
            </button>
            <button className="sliderButton right" onClick={nextSlide}>
              <FaArrowRight />
            </button>
          </>
        )}
        <div className="indicators">
          {Array.from({ length: numIndicators }).map((_, index) => (
            <span
              key={index}
              className={`indicator ${isActive(index) ? "active" : ""}`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
