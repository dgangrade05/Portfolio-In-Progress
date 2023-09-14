import React from "react";
import coffee from "../../assets/coffee.png"
import "./projects.css";
const Projects = () => {
  return (
    <section id="projects">
      <h1 className="projects-heading">PROJECTS</h1>
      <div className="projects-container">
        <div className="projects-content">
          <h2 className="coming-soon">
            coming soon!
            <img src={coffee} alt=""></img>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Projects;
