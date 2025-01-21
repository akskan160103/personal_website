import React from "react";
import "@/components/about_me/about_me.css"; // Link to the CSS file
import myPicture from "@/images/Headshot.39920639520e37497162.jpg"; // Replace with the actual path to your image

const AboutMe = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left: Picture */}
        <div className="about-image">
          <img src={myPicture} alt="Akshay Kannan" />
        </div>

        {/* Right: About Text */}
        <div className="about-text">
          <p>
            Hey, My name is <b>Akshay Kannan</b>, and I'm currently pursuing my <b>Bachelor's in Computer Science</b> at the <b>University of Michigan - Ann Arbor</b>. 
            I’m passionate about <b>full-stack web development</b>, <b>cybersecurity</b>, and <b>artificial intelligence</b>, and I enjoy exploring diverse projects and internships that challenge my skills and creativity. 
            Feel free to <a href="#contact">reach out to me</a>—whether it’s to collaborate on <b>exciting projects</b>, discuss <b>potential opportunities</b>, or simply connect and share ideas. 
            I’d love to hear from you and explore how we can work together. <b>Thanks!</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;


