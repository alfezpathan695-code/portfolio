import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMoon, faSun, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [showControls, setShowControls] = useState(false); // Gear toggle state
  const [isDarkMode, setIsDarkMode] = useState(true);     // Dark/Light toggle
  const [isPlaying, setIsPlaying] = useState(false);       // Audio state
  
  const audioRef = useRef(null);

  // Audio initialize logic
  useEffect(() => {
    audioRef.current = new Audio('/bg-music.mp3');
    audioRef.current.loop = true; // Loop par chalta rahega
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Play / Pause handler
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Audio play error:", err));
    }
    setIsPlaying(!isPlaying);
  };

  // Dark / Light Mode handler
  const toggleDarkMode = () => {
    if (isDarkMode) {
      // Light Theme colors toggle
      document.documentElement.style.setProperty('--bg-main', '#f8fafc');
      document.documentElement.style.setProperty('--text-main', '#0f172a');
      document.documentElement.style.setProperty('--text-muted', '#64748b');
    } else {
      // Original Dark Theme colors
      document.documentElement.style.setProperty('--bg-main', '#0b0f19');
      document.documentElement.style.setProperty('--text-main', '#ffffff');
      document.documentElement.style.setProperty('--text-muted', '#94a3b8');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <section id="home" className="home-container">
      <div className="home-content">
        <p className="code-intro">Hello(); I'm</p>
        <h1 className="name-title">Alfej Pathan</h1>
        <h2 className="sub-heading">I design & code for web</h2>
        <p className="tagline">
          Creative Front-End Developer crafting modern, responsive, and user-friendly web experiences.
        </p>

        {/* --- BOTTOM ACTION CONTROLS ROW --- */}
        <div className="action-row">
          <a href="#about" className="talk-btn">Let's Talk!</a>
          
          {/* Main Setting Gear Button */}
          <button 
            className={`control-btn gear-btn ${showControls ? 'active' : ''}`}
            onClick={() => setShowControls(!showControls)}
          >
            <FontAwesomeIcon icon={faGear} spin={showControls} />
          </button>

          {/* Hidden Items Group जो Settings open hone par aayenge */}
          <div className={`hidden-controls ${showControls ? 'reveal' : ''}`}>
            
            {/* Dark Mode Moon Button */}
            <button className="control-btn toggle-item" onClick={toggleDarkMode}>
              <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
            </button>

            {/* Sound Toggle Box Button */}
            <button className="control-btn sound-box toggle-item" onClick={toggleMusic}>
              <FontAwesomeIcon icon={isPlaying ? faVolumeHigh : faVolumeXmark} style={{ color: isPlaying ? '#06b6d4' : '#ef4444' }} />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}