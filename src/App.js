import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Education from './pages/Education/Education';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import Leadership from './pages/Leadership/Leadership';
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <ThemeProvider>
      <Helmet>
        <title>Harish Jaisankar</title>
        <meta name="description" content="A showcase of Harish's education, experience, projects, and leadership roles." />
        <meta name="keywords" content="Harish, Jaisankar, Portfolio, Software Engineer, Web Developer, Intern" />
        <meta name="author" content="Harish Jaisankar" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Helmet>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/leadership" element={<Leadership />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
