import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <Link to="/">Home</Link> | <Link to="/portfolio">Portfolio</Link> |{' '}
      <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
