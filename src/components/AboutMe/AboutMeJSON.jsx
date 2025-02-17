import React from "react";
import { Typewriter } from "../../animations/Typewriter";
import { aboutMeData } from "./aboutData";
import "./AboutMeJSON.css"; // Import the CSS file

const AboutMeJSON = () => {
  const jsonString = JSON.stringify(aboutMeData, null, 2); // Pretty format JSON

  return (
    <div className="about-me-json">
      <pre>
        <code>
          <Typewriter text={jsonString} speed={0.01} />
        </code>
      </pre>
    </div>
  );
};

export default AboutMeJSON;