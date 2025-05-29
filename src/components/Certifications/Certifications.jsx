import React, { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Certifications.css';

function Certification() {
  const certificates = [
    'https://i.postimg.cc/q74pkjzc/Guvi-Certification-HTML.png',
    'https://i.postimg.cc/9XnXGdnV/Guvi-Certification-CSS.png',
    'https://i.postimg.cc/C53V943q/Guvi-Certification-BOOTSTRAP.png',
    'https://i.postimg.cc/Dy4v5S9G/Guvi-Certification-JAVASCRIPT.png',
    'https://i.postimg.cc/V6HwWw44/Guvi-Certification-REACTJS.png',
    'https://i.postimg.cc/Nj1gqWff/Guvi-Certification-MYSQL.png',
    'https://i.postimg.cc/YSRMjYW5/Guvi-Certification-MONGODB.png',
    'https://i.postimg.cc/pTdxjrQp/Guvi-Certification-NODEJS.png',
    'https://i.postimg.cc/FHt969vB/Guvi-Certification-MERN-FULL-STACK.png',
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());
  const totalCards = certificates.length;
  const containerRef = useRef(null);

  function getCardsToShow() {
    const width = window.innerWidth;
    return width < 755 ? 1 : width < 1140 ? 2 : 3;
  }

  useEffect(() => {
    const handleResize = () => setCardsToShow(getCardsToShow());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setStartIndex((prev) => (prev + 1) % totalCards);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, totalCards]);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % totalCards);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };
  useEffect(() => {
    window.scrollTo({ top: 100, behavior: 'smooth' });
  }, []);

  return (
    <section id="certification">
      {/* Title */}
      <motion.div
        className="certification-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="certification-title">Certification</h1>
        <div className="certification-description">
          <p>
            Expertise in the MERN stack: MongoDB, Express.js, React.js, and
            Node.js.
          </p>
          <p>
            Proven ability to design and deliver scalable, responsive web apps.
          </p>
          <p>Strong problem-solving skills applied to real-world challenges.</p>
          <p>Committed to innovation and effective team collaboration.</p>
        </div>
      </motion.div>

      {/* Slider */}
      <div
        className="certification-slider-container"
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="certification-slider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {Array.from({ length: cardsToShow }).map((_, i) => {
            const currentIndex = (startIndex + i) % totalCards;
            return (
              <motion.div
                key={i}
                className="certification-card"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="certification-card-inner">
                  <img
                    src={certificates[currentIndex]}
                    alt={`Certificate ${currentIndex + 1}`}
                  />
                  <motion.button
                    className="certification-btn"
                    whileHover={{ scale: 1.1 }}
                    onClick={() =>
                      window.open(certificates[currentIndex], '_blank')
                    }
                  >
                    <span>View Certificate</span>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Arrows */}
        {totalCards > 1 && (
          <>
            <motion.button
              className="certification-arrow certification-left"
              onClick={prevSlide}
              whileHover={{ scale: 1.2 }}
            >
              <FaArrowLeft />
            </motion.button>
            <motion.button
              className="certification-arrow certification-right"
              onClick={nextSlide}
              whileHover={{ scale: 1.2 }}
            >
              <FaArrowRight />
            </motion.button>
          </>
        )}

        {/* Indicators - One dot per certificate */}
        <div className="certification-indicators">
          {certificates.map((_, index) => (
            <motion.span
              key={index}
              className={`certification-dot ${
                index === startIndex ? 'active' : ''
              }`}
              onClick={() => setStartIndex(index)}
              whileHover={{ scale: 1.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;
