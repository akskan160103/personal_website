import React, { useState } from "react";
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

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length); // Loop back to the first project
  };

  const handlePrevious = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length); // Loop back to the last project
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Featured Projects</h2>

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
