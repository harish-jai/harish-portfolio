import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from '../../context/ThemeContext';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
    const { lightMode, setLightMode } = useContext(ThemeContext);

    return (
        <nav className={`navbar ${lightMode ? "light-mode" : ""}`}>
            <div className="navbar-container">
                <button
                    className="light-mode-toggle"
                    onClick={() => setLightMode(!lightMode)}
                >
                    {lightMode ? <FaSun /> : <FaMoon />}
                </button>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/" className={`navbar-link ${lightMode ? "light-mode" : ""}`}>Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/education" className={`navbar-link ${lightMode ? "light-mode" : ""}`}>Education</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/experience" className={`navbar-link ${lightMode ? "light-mode" : ""}`}>Experience</Link>
                    </li>
                    {/* <li className="navbar-item">
                        <Link to="/projects" className={`navbar-link ${lightMode ? "light-mode" : ""}`}>Projects</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/leadership" className={`navbar-link ${lightMode ? "light-mode" : ""}`}>Leadership</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;