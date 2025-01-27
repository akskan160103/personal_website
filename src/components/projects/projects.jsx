import React, { useState, useEffect } from "react";
import "@/components/projects/projects.css";

const projects = [
  {
    title: "NSEIT (US) Inc.",
    description: "Software Engineering Intern",
    bulletPoints: [
      "Performed LLM quantization on the Meta Llama 3 - 70B model for the customer service chatbot system using AWS SageMaker, improving inference speed by 20%",
      "Integrated guardrails with the LLM, reducing token usage by 12% and response time by 15%, while improving chatbot response accuracy by 8%",
      "Worked with engineers and system architects to analyze and optimize post-deployment model performance, leading to a 14% reduction in operational costs through improved server efficiency and resource management",
    ],
    tags: ["AWS Sagemaker", "Hugging Face"],
  },
  {
    title: "CLUES Project",
    description: "Research Assistant",
    bulletPoints: [
      "Engineered integration of the LearningClues tool, a platform designed to index and analyze spoken and visual content, with Canvas and D2L improving accessibility to over 1000 students spread across 8 courses",
      "Utilized AWS CDK for the scalable deployment and management of LearningClues, ensuring a 99.8% uptime",
      "Created an instructor support feature, providing real-time suggestions for supplementary content leading to a 4.7/5 satisfaction rating in early user testing",
    ],
    tags: [],
  },
  {
    title: "First Abu Dhabi Bank",
    description: "Software Engineering Intern",
    bulletPoints: [
      "Led the adoption of SOAR (Security Orchestration, Automation and Response) platform using Swimlane",
      "Wrote Python scripts that automated repetitive tasks, resulting in 27% fewer false positives and a 15% increase in productivity",
      "Designed a JavaScript-based IP information retrieval tool that enabled the Network Operations and Security Team to detect and block 82% of malicious IP traffic in real-time",
    ],
    tags: ["Swimlane", "Javascript", "Python"],
  },
  {
    title: "Yujiva",
    description: "Personal Project",
    bulletPoints: [
      "Developed a website for my mom's yoga business to support marketing and client engagement, leading to a 27% increase in inquiries within two weeks of launch",
    ],
    tags: ["Javascript", "React.js"],
  },
  {
    title: "Voz",
    description: "Personal Project",
    bulletPoints: [
      "Developed Voz, an AI-based language learning app using GPT-4 to simulate real-time conversations in Spanish, offering both predefined and custom scenarios",
      "Integrated voice recognition, text-to-speech, and an English translation feature, with the translation feature receiving the highest user satisfaction rating of 4.8/5.0",
    ],
    tags: ["GPT-4 API", "Web Speech API", "react-speech-recognition"],
  },
  {
    title: "SpotScope",
    description: "Personal Project",
    bulletPoints: [
      "Built a full-stack geolocation tool, using Express.js and React to translate IP addresses into geographical data",
      "Set up a MongoDB database storing 3.8 million records, optimizing query performance by converting IP ranges to numerical equivalents",
      "Integrated OpenStreetMap via react-leaflet on the frontend, rendering a map that pins the approximate location and offers interactive navigation",
    ],
    tags: ["Javascript", "Express.js", "React.js", "MongoDB"],
  },
  {
    title: "TableVision",
    description: "Personal Project",
    bulletPoints: [
      "Developed a flask-based API that uses a computer vision model (YOLOv5) to identify available study spaces in real-time",
      "Employed Roboflow for data annotation, which improved the model’s accuracy in identifying occupied and unoccupied tables to 65% and introduced me to performance evaluation of machine learning models",
    ],
    tags: ["Python", "Flask", "React", "YOLOv5"],
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
        <h1 className="section-title">Featured Projects</h1>
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
