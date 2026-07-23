import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Projects() {
  const myProjects = [
    {
      title: "Movie Mania App",
      desc: "A slick dynamic movie database where users can instantly search details, filter ratings, and browse cinematic content seamlessly.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80",
      live: "https://alfezpathan695-code.github.io/movie-mania/",
      github: "https://github.com/alfezpathan695-code/movie-mania"
    },
    {
      title: "ZestyBites Restaurant Site",
      desc: "Premium, ultra-responsive dark luxury dining landing showcase configured with dynamic scroll reveals and sliding responsive controls.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80",
      live: "https://alfezpathan695-code.github.io/restaurant-portfolio/",
      github: "https://github.com/alfezpathan695-code/restaurant-portfolio"
    },
    {
      title: "TaskGrid Sticky Notes Layout",
      desc: "Advanced state-retaining note canvas engine engineered with custom modal pop-ups and flexible linear layouts using HTML5 Storage wrappers.",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=500&q=80",
      live: "https://alfezpathan695-code.github.io/sticky-notes-app/",
      github: "https://github.com/alfezpathan695-code/sticky-notes-app"
    }
  ];

  return (
    <section id="projects" className="projects-container">
      <div className="projects-wrapper">
        
        {/* Top Header Row Line Mapping */}
        <div className="projects-heading-row">
          <h2 className="projects-title">&lt;/Projects&gt;</h2>
          <div className="heading-line"></div>
        </div>

        {/* Vertical Stack List of Projects */}
        <div className="projects-list">
          {myProjects.map((proj, idx) => (
            <div className="project-card" key={idx}>
              
              {/* Left Box: Text Descriptions & Actions */}
              <div className="project-details">
                <h3 className="project-name">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
                
                {/* Action CTA Row */}
                <div className="project-actions">
                  <a href={proj.github} target="_blank" rel="noreferrer" className="proj-icon-btn" title="GitHub Repository">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href={proj.live} target="_blank" rel="noreferrer" className="live-view-btn">
                    Live view &rarr;
                  </a>
                </div>
              </div>

              {/* Right Box: Image Banner Graphic Sticky Frame */}
              <div className="project-image-box">
                <img src={proj.image} alt={proj.title} className="project-screenshot" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}