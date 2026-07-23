import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-gradient-overlay"></div>
      
      <div className="footer-content">
        {/* Monospace Quote */}
        <p className="footer-quote">"Learning, Living, and Leveling Up."</p>
        
        {/* Interactive Method Style Heading */}
        <h3 className="footer-cta">GetInTouch();</h3>
        
        {/* Rounded Border Social Icons */}
        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-circle-btn">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-circle-btn">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="social-circle-btn">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:your-email@gmail.com" className="social-circle-btn">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>

        {/* Avatar/Memoji Placement Image */}
        <div className="footer-avatar-box">
          <img 
            src={new URL('../assets/Hacker.png', import.meta.url).href} 
            alt="Alfej Thumbs Up Avatar" 
            className="footer-avatar-img"
          />
        </div>
      </div>

      {/* Copyright Base Bar */}
      <div className="footer-bottom-bar">
        <p>Design & Built by Alfej Pathan &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}