import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        {/* Logo block with responsive smooth avatar */}
<div className="nav-logo">
          <img 
            src={new URL('../assets/hacker.png', import.meta.url).href} 
            alt="Alfej Avatar" 
            className="avatar-img"
          />
        </div>
        
        {/* Mobile Hamburger Toggle */}
        <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Nav Links formatted inside tag notations */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>&lt;/Home&gt;</a>
          <a href="#about" onClick={() => setIsOpen(false)}>&lt;/AboutMe&gt;</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>&lt;/Skills&gt;</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>&lt;/Projects&gt;</a>
        </div>
      </nav>
    </div>
  );
}