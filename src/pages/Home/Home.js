import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaFile } from "react-icons/fa";
import SkillsSection from "../../components/SkillsSection/SkillsSection";
import FakeTerminal from "../../components/AboutMe/FakeTerminal";
import { Typewriter } from "../../animations/Typewriter";
import { ThemeContext } from "../../context/ThemeContext";
import "./Home.css";

const Home = () => {
  const { lightMode } = useContext(ThemeContext);

  return (
    <div className={`home-container ${lightMode ? "light-mode" : ""}`}>
      <section className={`hud-container ${lightMode ? "light-mode" : ""}`}>
        <div className={`hud-overlay ${lightMode ? "light-mode" : ""}`}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="title"
          >
            <Typewriter text="Harish Jaisankar" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="subtitle"
          >
            University of <span className="highlight">M</span>ichigan | Software Engineer
          </motion.p>

          <div className="contact-links">
            <a href="https://linkedin.com/in/harishjai" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/harish-jai" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:harish.jaisankar@gmail.com">
              <FaEnvelope />
            </a>
            <a href="/resume.pdf">
              <FaFile />
            </a>
          </div>

          <motion.div
            className="scroll-down"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓ Scroll to Learn More ↓
          </motion.div>
        </div>
      </section>

      <section className={`bio-section ${lightMode ? "light-mode" : ""}`}>
        <h2>About Me</h2>
        <FakeTerminal />
      </section>

      <div className="currently-working">
        <h3>Currently Working On: <a href="/projects">75 Hard Tracker →</a></h3>
      </div>
      <SkillsSection />
    </div>
  );
};

export default Home; 