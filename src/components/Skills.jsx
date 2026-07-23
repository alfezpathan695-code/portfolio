import React from 'react';
import './Skills.css';

export default function Skills() {
  // Saare screenshot wale tech stack icons ka data array
  const techStack = [
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
     { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
     { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' }
  ];

  return (
    <section id="skills" className="skills-container">
      <div className="skills-wrapper">
        
        {/* Top Header Row */}
        <div className="skills-heading-row">
          <h2 className="skills-title">&lt;/Skills&gt;</h2>
          <div className="heading-line"></div>
        </div>

        {/* Section Subtitle */}
        <h3 className="tech-stack-subtitle">Tech Stack</h3>

        {/* Dynamic Grid Grid */}
        <div className="skills-grid">
          {techStack.map((tech, index) => (
            <div className="tech-card" key={index} title={tech.name}>
              <img src={tech.logo} alt={tech.name} className="tech-icon" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}