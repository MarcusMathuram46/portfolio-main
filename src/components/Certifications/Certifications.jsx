import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
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
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  const totalCards = certificates.length;
  const screenWidth = window.innerWidth;
  const cardsToShow = screenWidth < 755 ? 1 : screenWidth < 1140 ? 2 : 3;
  const numIndicators = Math.ceil(totalCards / cardsToShow);

  const nextSlide = () => setStartIndex((prevIndex) => (prevIndex + 1) % totalCards);
  const prevSlide = () => setStartIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (!isPaused) nextSlide();
    }, 3000);
    
    return () => clearInterval(autoSlide);
  }, [startIndex, isPaused]);

  return (
    <section id="certification">
      {/* Title & Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 id="cert-title">Certification</h1>
        <div id="cert-cont">
          <p>
            Proficient in MongoDB, Express.js, React.js, and Node.js (MERN)
            stack showcased through hands-on projects.
          </p>
          <p>
            Applied MERN stack knowledge to develop dynamic and responsive web applications.
          </p>
          <p>
            Demonstrated effective problem-solving skills in addressing development challenges.
          </p>
          <p>
            Equipped with industry-relevant skills, poised to contribute to dynamic development teams.
          </p>
        </div>
      </motion.div>

      {/* Slider */}
      <div
        className="sliderContainer"
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="containerProject"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {Array.from({ length: cardsToShow }).map((_, index) => (
            <motion.div
              key={index}
              className="cardCertificate"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="BoxCertificate">
                <img
                  src={certificates[(startIndex + index) % totalCards]}
                  alt={`Certificate ${startIndex + index + 1}`}
                />
                <div className="detailsCertificate">
                  <motion.button
                    className="custom-btn btn-7"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={() => window.open(certificates[(startIndex + index) % totalCards], "_blank")}
                  >
                    <span>View Certificate</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Buttons */}
        {totalCards > 1 && (
          <>
            <motion.button
              className="sliderButton left1"
              onClick={prevSlide}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaArrowLeft />
            </motion.button>
            <motion.button
              className="sliderButton right1"
              onClick={nextSlide}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaArrowRight />
            </motion.button>
          </>
        )}

        {/* Indicators */}
        <div className="indicators">
          {Array.from({ length: numIndicators }).map((_, index) => (
            <motion.span
              key={index}
              className={`indicator ${index === Math.floor(startIndex / cardsToShow) ? "active" : ""}`}
              onClick={() => setStartIndex(index * cardsToShow)}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;
