import React, { useContext } from "react";
import "./ExperienceCard.css";
import { ThemeContext } from "../../context/ThemeContext";

const ExperienceCard = ({
  logoDark, logoLight, // Experience only
  company, role, team, duration, responsibilities, techStack, // Experience fields
  courseCode, title, topics, tools, blurb, projects, link, // Education fields
  image
}) => {
  const { lightMode } = useContext(ThemeContext);

  return (
    <div className={`experience-card ${lightMode ? "light-mode" : ""}`}>
      <div className="experience-header">
        <p className="institution">{company || courseCode}</p>
      </div>
      {(logoDark || logoLight) && (
        <div className={`experience-logo ${lightMode ? "light-mode" : ""}`}>
          <img src={lightMode ? logoLight : logoDark} alt="Logo" className="logo" />
          <div className={`separator ${lightMode ? "light-mode" : ""}`}></div>
          <span className={`team-name ${lightMode ? "light-mode" : ""}`}>{team}</span>
        </div>
      )}
      <h3 className="experience-title">{role || title}</h3>
      {duration || topics ? (
        <p className="experience-duration">{duration || topics}</p>
      ) : null}
      {(blurb || responsibilities) && <p className="experience-description">{blurb || responsibilities}</p>}
      {tools || techStack ? (
        <p className="experience-tools">
          <strong>Tools:</strong> {tools || techStack}
        </p>
      ) : null}
      {projects && (
        <>
          <p className="experience-subtitle" style={{ marginBottom: '0px' }}>
            <strong>{"Projects"}</strong>
          </p>
          <ul className="experience-list">
            {(projects).map((item, index) => (
              <li className="experience-item" key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
      {link && (
        <a href={link} className="learn-more" target="_blank" rel="noopener noreferrer">
          Learn more →
        </a>
      )}
      {image && <img src={image} alt={title || role} className="experience-image" />}
    </div>
  );
};

export default ExperienceCard;
