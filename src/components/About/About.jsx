import React from "react";
import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      {/* Content Section */}
      <motion.div
        className="content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="lightning-text">
          Welcome to my portfolio! I'm <span>Marcus</span>, a passionate and
          dedicated <span>FULL STACK DEVELOPER</span>. With a background in{" "}
          <span>ELECTRONICS AND INSTRUMENTATION ENGINEERING</span>, I thrive on
          turning ideas into reality through creativity and innovation.
        </p>
        <p>
          I believe in going above and beyond to exceed expectations. I'm driven
          by a commitment to delivering work that not only meets but exceeds
          standards.
        </p>
        <p>
          I value collaboration and believe in the power of teamwork. Effective
          communication and cooperation are key to successful projects.
        </p>
        <p>
          In the fast-paced world of <span>FULL STACK DEVELOPER</span>, I
          understand the importance of staying updated with the latest trends
          and technologies. I am dedicated to continuous learning and
          improvement.
        </p>
      </motion.div>

      {/* Image & Social Links */}
      <motion.div
        className="image-area"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="img-wrapper">
          <img
            src="https://i.postimg.cc/vBcXRtfK/Marcus-King.jpg"
            alt="marcus"
          />
          <h2>Marcus</h2>

          {/* Social Icons */}
          <motion.ul>
            {[
              {
                href: "https://github.com/MarcusMathuram46?tab=repositories",
                icon: "fab fa-github",
              },
              {
                href: "mailto:marcus.mathuram7@gmail.com",
                icon: "fab fa-google",
              },
              {
                href: "https://wa.me/+919688597790",
                icon: "fab fa-whatsapp",
              },
              {
                href: "https://www.linkedin.com/in/marcus-mathuram-3a9701228/",
                icon: "fab fa-linkedin",
              },
            ].map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <i className={link.icon}></i>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
