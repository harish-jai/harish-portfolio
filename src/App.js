import React from 'react';
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
