import React, { useEffect, useContext } from 'react';
import skillsData from './skillsData';
import './SkillsSection.css';
import { ThemeContext } from "../../context/ThemeContext";

const SkillsSection = () => {
  const skills = skillsData;
  const { lightMode } = useContext(ThemeContext);

  useEffect(() => {
    const skillItems = document.querySelectorAll('.skill-item');

    const handleMouseEnter = (index) => {
      const cols = 15;

      const left = index % cols !== 0 ? skillItems[index - 1] : null;
      const right = (index + 1) % cols !== 0 ? skillItems[index + 1] : null;
      const top = index - cols >= 0 ? skillItems[index - cols] : null;
      const bottom = index + cols < skillItems.length ? skillItems[index + cols] : null;

      const topLeft =
        index % cols !== 0 && index - cols >= 0 ? skillItems[index - cols - 1] : null;
      const topRight =
        (index + 1) % cols !== 0 && index - cols >= 0 ? skillItems[index - cols + 1] : null;
      const bottomLeft =
        index % cols !== 0 && index + cols < skillItems.length ? skillItems[index + cols - 1] : null;
      const bottomRight =
        (index + 1) % cols !== 0 && index + cols < skillItems.length ? skillItems[index + cols + 1] : null;

      skillItems[index].classList.add('hovered');
      if (left) left.classList.add('adjacent');
      if (right) right.classList.add('adjacent');
      if (top) top.classList.add('adjacent');
      if (bottom) bottom.classList.add('adjacent');
      if (topLeft) topLeft.classList.add('adjacent');
      if (topRight) topRight.classList.add('adjacent');
      if (bottomLeft) bottomLeft.classList.add('adjacent');
      if (bottomRight) bottomRight.classList.add('adjacent');
    };

    const handleMouseLeave = (index) => {
      skillItems[index].classList.remove('hovered');
      skillItems.forEach((el) => el.classList.remove('adjacent'));
    };

    skillItems.forEach((item, index) => {
      item.addEventListener('mouseenter', () => handleMouseEnter(index));
      item.addEventListener('mouseleave', () => handleMouseLeave(index));
    });

    return () => {
      skillItems.forEach((item, index) => {
        item.removeEventListener('mouseenter', () => handleMouseEnter(index));
        item.removeEventListener('mouseleave', () => handleMouseLeave(index));
      });
    };
  }, []);

  return (
    <div className="skills-section">
      <h3>Skills Garden</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className={`skill-item ${lightMode ? "light-mode" : ""}`}>
              <div className={`skill-icon ${skill.toLowerCase()}`}>
                <img
                  src={`/icons/${skill.toLowerCase()}.png`}
                  alt={skill}
                  className="skill-image"
                />
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
