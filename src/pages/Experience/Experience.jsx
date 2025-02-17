import React, { useContext } from "react";
import "./Experience.css";
import { ThemeContext } from "../../context/ThemeContext";
import experienceData from "./experienceData";
import { motion } from "framer-motion";
import { Typewriter } from "../../animations/Typewriter";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

const Experience = () => {
  const { lightMode } = useContext(ThemeContext);

  return (
    <div className={`work-container ${lightMode ? 'light-mode' : ''}`}>
      <div style={{ textAlign: 'center' }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="title"
        >
          <Typewriter text="Work Experience" />
        </motion.h1>
      </div>
      <p className="work-subtitle">A look at my professional journey so far.</p>

      <div className="work-cards-container">
        <div className="work-cards">
          {experienceData.map((course, index) => (
            <ExperienceCard key={index} {...course} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Experience;
