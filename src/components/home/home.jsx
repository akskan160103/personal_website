import React from "react";
import "@/components/home/Home.css"; // Link to the CSS for this component
import {ReactTyped} from "react-typed";


const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <h2>Hello, I'm</h2>
        <h1>Akshay Kannan</h1>
        <h2>And I'm a</h2>
        <h1>
        <ReactTyped
            strings={[
              "Software Engineer.",
              "Innovator.",
              "Cybersecurity Enthusiast.",
              "Geopolitical Enthusiast.",
            ]}
            typeSpeed={50} // Speed of typing
            backSpeed={30} // Speed of deleting
            loop // Keeps looping through the strings
          />
        </h1>
      </div>
    </section>
  );
};

export default Home;
