import React from "react";
import "./about.css";
import ME from "../../assets/pfp.jpg";
import ARROW from "../../assets/arrow.svg"

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
            Greetings! I'm a 20-year-old Java wizard who's also a Spring Boot
            aficionado. Some might call me laid-back, but I prefer the term
            "efficiency enthusiast." You'll often find me diving headfirst into
            Data Structures and Algorithms puzzles on LeetCode. Right now, I'm
            on the hunt for internships to put my coding skills to the test and
            continue this wild journey of self-improvement. If you're as stoked
            about coding and problem-solving as I am, let's connect – we might
            just create some tech magic together! 💻🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
