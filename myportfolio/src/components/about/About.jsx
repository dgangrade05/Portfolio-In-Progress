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
            I am the 20-year-old Java necromancer,
            wielding the dark arts of Spring Boot, web development, Python, and
            the relentless hustle of the underworld. My coding skills are a
            cursed force that chills the very souls of bugs and glitches.
            Solving puzzles on LeetCode, especially those that descend into the
            abyss of Data Structures and Algorithms, is my sinister pleasure.
            🔮<br />
            Amidst the shadows, I weave my dark melodies, for music is my
            otherworldly companion. Presently, I haunt the realms of
            internships, seeking to test and sharpen my coding skills while
            conjuring eerie harmonies. Beware, for my journey of
            self-improvement is relentless and foreboding. 🖤✨<br />
            Should you dare to walk this accursed path, sharing my thirst for
            coding and problem-solving, consider this ominous invitation: Our
            collaboration may unleash digital horrors that will forever haunt
            the tech world. If you dare to proceed, we shall forge a pact that
            even the darkest spirits of the digital realm would fear. 💻🚀
          </p>
        </div>
      </div>
      <h2 className="education-heading">EDUCATION</h2>
      <div className="timeline">
        <div className="checkpoint">
          <div>
            <h3 className="school-heading">Medi-Caps University, Indore&nbsp;&nbsp;<span>2020-2023</span></h3>
            <p className="degree">Bachelor of Computer Applications</p>
            <p className="school-about">
              <ul>
                <li>
                  <br></br>
                  • participated in various hackathons. 
                </li>
                <li>
                • got invited to IIT bombay techfest 2022.
                </li>
                <li>
                • secured a rank under 10 in codecode hackathon organized &nbsp;&nbsp;&nbsp;by IIT bombay.
                </li>
              </ul>
              </p>
          </div>
        </div>
        <div className="checkpoint">
          <div>
            <h3 className="school-heading">Devi Ahilya Vishwavidyalaya, Indore&nbsp;&nbsp;<span>2023-present.</span></h3>
            <p className="degree">Master of Computer Applications</p>
            <p className="school-about"><br></br> yet to come!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
