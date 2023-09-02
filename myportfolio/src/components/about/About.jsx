import React from "react";
import "./about.css";
import ME from "../../assets/pfp.jpg";
import ARROW from "../../assets/arrow.svg";

const About = () => {
  return (
    <section id="about">
      <h1 className="about-heading">About</h1>
      <div className="about-container">
        <div className="about-image">
          <img src={ME} alt="Profile"></img>
        </div>
        <div className="about-arrow">
          <img src={ARROW} alt="Arrow"></img>
        </div>
        <div className="about-content">
          <p>
            Listen closely, mortals. I am the 20-year-old Java necromancer,
            wielding the dark arts of Spring Boot, web development, Python, and
            the relentless hustle of the underworld. My coding skills are a
            cursed force that chills the very souls of bugs and glitches.
            Solving puzzles on LeetCode, especially those that descend into the
            abyss of Data Structures and Algorithms, is my sinister pleasure.
            💀🕸️ <br/>Amidst the shadows, I weave my dark melodies, for music is my
            otherworldly companion. Presently, I haunt the realms of
            internships, seeking to test and sharpen my coding skills while
            conjuring eerie harmonies. Beware, for my journey of
            self-improvement is relentless and foreboding. <br/>Should you dare to
            walk this accursed path, sharing my thirst for coding and
            problem-solving, consider this ominous invitation: Our collaboration
            may unleash digital horrors that will forever haunt the tech world.
            If you dare to proceed, we shall forge a pact that even the darkest
            spirits of the digital realm would fear. 💻🚀🔮
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
