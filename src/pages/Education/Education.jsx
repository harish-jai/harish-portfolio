import React, { useContext } from 'react';
import './Education.css';
import educationData from './educationData';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import { ThemeContext } from '../../context/ThemeContext';
import michiganFlag from '../../assets/michigan-flag.gif';
import { motion } from 'framer-motion';
import { Typewriter } from '../../animations/Typewriter';

const Education = () => {
  const { lightMode } = useContext(ThemeContext);

  return (
    <div className={`education-container ${lightMode ? 'light-mode' : ''}`}>
      <div className={`education-header-block ${lightMode ? 'light-mode' : ''}`}>
        <div className={`education-header-text ${lightMode ? 'light-mode' : ''}`}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="title"
          >
            <Typewriter text="Education" />
          </motion.h1>
          <h2 className="umich-hover">
            {educationData.university.name}
            <img src={michiganFlag} alt="Go Blue!" className="umich-flag" />
          </h2>
          <h3>{educationData.university.degree}</h3>
          <h3>{"Minors in " + educationData.university.minors.join(" and ")}</h3>
        </div>
        <div className="education-header-image">
          <img src="big-house.jpg" alt="The Big House" />
        </div>
      </div>

      <div className={`courses ${lightMode ? 'light-mode' : ''}`}>
        <h2>Key Computer Science Coursework</h2>
        <p className={`pin ${lightMode ? 'light-mode' : ''}`}>📌 {educationData.university.pin}</p>
        <div className="highlighted-courses">
          {educationData.highlightedCourses.map((course, index) => (
            <ExperienceCard key={index} {...course} />
          ))}
        </div>
      </div>

      <div className={`other-courses ${lightMode ? 'light-mode' : ''}`}>
        <h2>Other Computer Science Courses</h2>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Skills</th>
              <th>Blurb</th>
            </tr>
          </thead>
          <tbody>
            {educationData.otherCourses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>{course.skills}</td>
                <td>{course.blurb}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`courses ${lightMode ? 'light-mode' : ''}`}>
        <h2>Math Minor</h2>
        <div className="highlighted-courses">
          {educationData.mathMinor.map((course, index) => (
            <ExperienceCard key={index} {...course} />
          ))}
        </div>
        <h2 style={{ paddingTop: '20px' }}>Multidisciplinary Design Minor</h2>
        <div className="highlighted-courses">
          {educationData.mdpMinor.map((course, index) => (
            <ExperienceCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
