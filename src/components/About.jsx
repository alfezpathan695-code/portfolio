import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <section id="about" className="about-container">
      <div className="about-wrapper">
        
        {/* Left Side: Content Area */}
        <div className="about-left">
          <div className="about-heading-row">
            <h2 className="about-title">&lt;/AboutMe&gt;</h2>
            <div className="heading-line"></div>
          </div>
          
          <div className="about-text-content">
            <p>
              Hello! I'm <strong>Alfej Pathan</strong>, a Front-End Developer based in India. 
              I specialize in creating responsive and visually appealing web applications 
              using modern tools like React, Tailwind CSS, and JavaScript ecosystem.
            </p>
            <p>
              I enjoy transforming ideas into functional digital solutions, focusing on 
              user-friendly designs and seamless performance. My approach combines creativity 
              and attention to detail to deliver quality results.
            </p>
            <p>
              Beyond coding, I stay updated with the latest web trends and technologies, 
              constantly refining my skills to build innovative and effective solutions.
            </p>
          </div>

{/* Floating Download Resume Button */}
<a 
  href={`${import.meta.env.BASE_URL}resume.pdf`} 
  download="Alfez_Resume.pdf" 
  className="resume-download-btn" 
  title="Download Resume"
>
  <FontAwesomeIcon icon={faCloudArrowDown} />
</a>
        </div>

{/* Right Side: Image Showcase */}
        <div className="about-right">
          <div className="image-frame">
            <img 
              src={new URL('../assets/About.jpeg', import.meta.url).href} 
              alt="Alfej Pathan Profile" 
              className="profile-display-img"
            />
          </div>
        </div>

      </div>
    </section>
  );
}