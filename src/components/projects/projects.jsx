import React, { useState, useEffect } from "react";
import "@/components/projects/projects.css";

const projects = [
  {
    title: "Project Title 1",
    description: "Short description for project 1.",
    bulletPoints: [
      "Bullet point 1 for project 1",
      "Bullet point 2 for project 1",
      "Bullet point 3 for project 1",
    ],
    tags: ["Tag1", "Tag2", "Tag3"],
  },
  {
    title: "Project Title 2",
    description: "Short description for project 2.",
    bulletPoints: [
      "Bullet point 1 for project 2",
      "Bullet point 2 for project 2",
    ],
    tags: ["Tag1", "Tag2"],
  },
  {
    title: "Project Title 3",
    description: "Short description for project 3.",
    bulletPoints: [
      "Bullet point 1 for project 3",
      "Bullet point 2 for project 3",
      "Bullet point 3 for project 3",
    ],
    tags: ["Tag1", "Tag2", "Tag3"],
  },
  {
    title: "Project Title 4",
    description: "Short description for project 4.",
    bulletPoints: [
      "Bullet point 1 for project 4",
      "Bullet point 2 for project 4",
    ],
    tags: ["Tag1", "Tag2"],
  },
  {
    title: "Project Title 5",
    description: "Short description for project 5.",
    bulletPoints: [
      "Bullet point 1 for project 5",
      "Bullet point 2 for project 5",
      "Bullet point 3 for project 5",
    ],
    tags: ["Tag1", "Tag2", "Tag3"],
  },
  {
    title: "Project Title 6",
    description: "Short description for project 6.",
    bulletPoints: [
      "Bullet point 1 for project 6",
      "Bullet point 2 for project 6",
    ],
    tags: ["Tag1", "Tag2"],
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext(); // Move to the next project when progress reaches 100%
          return 0; // Reset progress
        }
        return prev + 10; // Increment progress by 10% every interval
      });
    }, 700); // Run every 1 second
  
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [progress]); // Re-run whenever progress changes
  
  

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length); // Loop back to the first project
    setProgress(0);
  };

  const handlePrevious = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length); // Loop back to the last project
    setProgress(0);
  };

  return (
    <section className="projects-section" id="projects">

      <div className="section-title-container">
        <h2 className="section-title">Featured Projects</h2>
        <a
          href="https://github.com/akskan160103"
          target="_blank"
          rel="noopener noreferrer"
          className="github-icon-link"
        >
          <ion-icon name="logo-github" className="github-icon"></ion-icon>
        </a>
      </div>

      <div className="project-display">
        
        {/* Left Arrow */}
        <button className="arrow left-arrow" onClick={handlePrevious}>
          &#8592;
        </button>

        {/* Project Card */}
        <div className="project-card">
          <h2 className="project-title">{projects[currentProject].title}</h2>
          <p className="project-description">{projects[currentProject].description}</p>
          <ul className="project-bullets">
            {projects[currentProject].bulletPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          <div className="project-tags">
            {projects[currentProject].tags.map((tag, idx) => (
              <span className="tag" key={idx}>
                {tag}
              </span>
            ))}
          </div>
          
          <div className="progress-bar">
              <div
                className="progress-indicator"
                style={{ width: `${progress}%` }}
              ></div>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="arrow right-arrow" onClick={handleNext}>
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Projects;
