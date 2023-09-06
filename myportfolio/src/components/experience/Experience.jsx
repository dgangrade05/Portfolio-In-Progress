import React from "react";
import "./experience.css";
import MUACM from "../../assets/muacm.png";
import MUIEEE from "../../assets/muieee.png";

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="experience-heading">EXPERIENCE</h1>
      <div className="experience-container">
        <div className="card">
          <div className="card-header">
            <img src={MUACM} alt="MUACM"></img>
            <h2 className="card-heading">
              MUACM <span>OCT'21 - DEC'22</span>
            </h2>
          </div>
          <h3 className="card-subheading">technical executive</h3>
          <p className="card-content">
            Being an Executive Member of the technical team, I designed and
            created the official website for the community. I was also active in
            other technical activities like organizing technical workshops,
            mentoring fellow students about various topics.
            <br></br>
            <br></br>
            Checkout the website here!👇
            <a href="https://medicaps.acm.org/">
              <br></br>medicaps.acm.org
            </a>
          </p>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={MUIEEE} alt="MUIEEE"></img>
            <h2 className="card-heading">
              MUIEEE <span>MAY'22 - MAY'23</span>
            </h2>
          </div>
          <h3 className="card-subheading">technical head</h3>
          <p className="card-content">
            Being the Technical Head, I looked after the technical management of
            the organization. I was responsible for conducting sessions as well
            as bringing Hackathons. I also represented the club at various
            Hackathons. Also, I acted as a mentor to fellow students and
            members. I aslo created the prototype version for the community website.
            <br></br>
            <br></br>
            Checkout the website here!👇
            <a href="https://muieee2.netlify.app/">
              <br></br>muieee2.netlify.app
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
