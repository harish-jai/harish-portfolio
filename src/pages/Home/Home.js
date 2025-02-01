import React, { useState } from "react";
import "./home.css";

function Home() {
  const gifs = [
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHhkMzdwZ2ZyOWIxbG1yMGZmNm1lc3J1MWpjZnVtdXEzZ2QwNnczeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KqpWODFJ4Fl452a0qr/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDhpb3hiZzZnYjVjeTZjY3A1b2QxNmNrOWgza3FjZGI2a3dmamhxdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3vQYe7l1TInypnYA/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExODMwZzEwZTNsbTA2cDl2anBpODVuejBkdXEyN3Q2YmJmMGZpZmw0YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OMeGDxdAsMPzW/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW51dHBjNXNmOGZnZ3UyemZ2NHpkZGxpemM1a2RybnVneG5ycDhhbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cfGmVRsJI6wq6noGxP/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWRsZTJsdWR6YnNsdjJ1ZmpmYXV0dmJtMmx3dWNuem9nZjJwdXh6MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3orif99qt7Qqkhlw4w/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjRnajgzc3lndjNpcm1ycHRyb3BpenRseWFvaXNubG4yMnIzaGd0OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fmkYSBlJt3XjNF6p9c/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWdodGQwNHozYXFqcG9hemV0MnZoMXZmaTBzczBld28xY2x2YWljYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PTBVMsYIOB0SBP4MVe/giphy-downsized-large.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjZrZ3h4bWt2OHdlbWo4YzA2dTI2MXYxbDhoeWp1NDh0bTBvYzkyZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L12ZXih8cd6YHZKLYi/giphy.gif"
  ];

  // State for current GIF
  const [currentGif, setCurrentGif] = useState(gifs[0]);

  // Function to randomly change GIF
  const changeGif = () => {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    setCurrentGif(gifs[randomIndex]);
  };

  return (
    <div className="construction-container">
      <h1>🚧 Under Construction 🚧</h1>
      <img
        src={currentGif}
        alt="Under Construction"
        className="construction-gif"
        onClick={changeGif}
      />
      <p>I'm working hard on updates to my portfolio. Stay tuned!</p>
      <p>Expected Launch: 2/2</p>
      <div className="links-container">
        <a
          href="https://www.linkedin.com/in/harishjai"
          target="_blank"
          rel="noopener noreferrer"
          className="tab-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/harish-jai"
          target="_blank"
          rel="noopener noreferrer"
          className="tab-link"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Home;
