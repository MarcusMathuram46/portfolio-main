import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Certifications.css";

function Certification() {
  const certificates = [
    "https://i.postimg.cc/q74pkjzc/Guvi-Certification-HTML.png",
    "https://i.postimg.cc/9XnXGdnV/Guvi-Certification-CSS.png",
    "https://i.postimg.cc/C53V943q/Guvi-Certification-BOOTSTRAP.png",
    "https://i.postimg.cc/Dy4v5S9G/Guvi-Certification-JAVASCRIPT.png",
    "https://i.postimg.cc/V6HwWw44/Guvi-Certification-REACTJS.png",
    "https://i.postimg.cc/Nj1gqWff/Guvi-Certification-MYSQL.png",
    "https://i.postimg.cc/YSRMjYW5/Guvi-Certification-MONGODB.png",
    "https://i.postimg.cc/pTdxjrQp/Guvi-Certification-NODEJS.png",
    "https://i.postimg.cc/FHt969vB/Guvi-Certification-MERN-FULL-STACK.png",
  ];

  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false); // Flag to track animation pause

  const totalCards = certificates.length;
  const screenWidth = window.innerWidth;

  let cardsToShow, numIndicators;
  if (screenWidth < 755) {
    cardsToShow = 1;
    numIndicators = totalCards;
  } else if (screenWidth >= 755 && screenWidth < 1140) {
    cardsToShow = 2;
    numIndicators = Math.ceil(totalCards / cardsToShow);
  } else {
    cardsToShow = 3;
    numIndicators = Math.ceil(totalCards / cardsToShow);
  }

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

  // useEffect(() => {
  //   const container = containerRef.current;

  //   const handleMouseEnter = () => {
  //     setIsPaused(true); // Pause animation on mouse enter
  //   };

  //   const handleMouseLeave = () => {
  //     setIsPaused(false); // Resume animation on mouse leave
  //   };

  //   container.addEventListener("mouseenter", handleMouseEnter);
  //   container.addEventListener("mouseleave", handleMouseLeave);

  //   return () => {
  //     container.removeEventListener("mouseenter", handleMouseEnter);
  //     container.removeEventListener("mouseleave", handleMouseLeave);
  //   };
  // }, []);

  // useEffect(() => {
  //   const container = containerRef.current;

  //   const startAnimation = () => {
  //     if (!isPaused) {
  //       // Check if animation is paused
  //       nextSlide();
  //       animationRef.current = requestAnimationFrame(startAnimation);
  //     }
  //   };

  //   const handle = setTimeout(startAnimation, 3000);

  //   return () => {
  //     clearTimeout(handle);
  //     cancelAnimationFrame(animationRef.current);
  //   };
  // }, [startIndex, isPaused]);

  return (
    <section id="certification">
      <div>
        <h1 id="conttitle">Certification</h1>
        <div id="cert-cont">
          <p>
            Proficient in MongoDB, Express.js, React.js, and Node.js (MERN)
            stack showcased through hands-on projects.
          </p>
          <p>
            Applied MERN stack knowledge to develop dynamic and responsive web
            applications.
          </p>
          <p>
            Demonstrated effective problem-solving skills in addressing
            development challenges.
          </p>
          <p>
            Equipped with industry-relevant skills, poised to contribute to
            dynamic development teams with a focus on collaborative success.
          </p>
        </div>
      </div>

      <div className="sliderContainer" ref={containerRef}>
        <div className="containerProject">
          {Array.from({ length: cardsToShow }).map((_, index) => (
            <div key={index} className="cardCertificate">
              <div className="BoxCertificate">
                <img
                  src={certificates[(startIndex + index) % totalCards]}
                  alt={`Certificates ${startIndex + index + 1}`}
                />
                <div className="detailsCertificate">
                  <button
                    className="custom-btn btn-7"
                    onClick={() =>
                      window.open(
                        certificates[(startIndex + index) % totalCards],
                        "_blank"
                      )
                    }
                  >
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {totalCards > 1 && (
          <>
            <button className="sliderButton left1" onClick={prevSlide}>
              <FaArrowLeft />
            </button>
            <button className="sliderButton right1" onClick={nextSlide}>
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
}

export default Certification;
