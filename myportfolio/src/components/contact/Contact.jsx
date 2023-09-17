import React from "react";
import "./contact.css";
import COFFEE from "../../assets/coffee-cup.png";
import { FiArrowUpRight } from "react-icons/fi";
import GALAXY from "../../assets/galaxy.png";

const Contact = () => {
  return (
    <section id="contact">
      {/* <h1 className='contact-heading'>CONTACT</h1> */}
      <div className="main-subheading">
        <h1 className="subheading-text">grab a coffee and chat with me</h1>
        <img src={COFFEE} alt=""></img>
      </div>
      <div className="contact-container container grid">
        <div className="contact-data">
          <h4 className="socials-title">socials.</h4>
          <div className="socials-content">
            {/* INSTAGRAM */}
            <div className="social-items">
              <p>Instagram</p>
              <a href="https://www.instagram.com/dhanrajwho/">dhanrajwho</a>
              <FiArrowUpRight />
            </div>
            {/* GITHUB */}
            <div className="social-items">
              <p>Github</p>
              <a href="https://github.com/dgangrade05">@dgangrade05</a>
              <FiArrowUpRight />
            </div>
            {/* TWITTER */}
            <div className="social-items">
              <p>Twitter</p>
              <a href="https://twitter.com/baniyapromax">@baniyapromax</a>
              <FiArrowUpRight />
            </div>
            {/* LINKEDIN */}
            <div className="social-items">
              <p>LinkedIN</p>
              <a href="https://www.linkedin.com/in/dhanrajgangrade/">dhanrajgangrade</a>
              <FiArrowUpRight />
            </div>
            {/* EMAIL */}
            <div className="social-items">
              <p>Email</p>
              <a href="www.gmail.com">dhanrajwork05@gmail.com</a>
              <FiArrowUpRight />
            </div>
          </div>
        </div>
        <form className="contact-form">
          <div className="form-input-group">
            {/* NAME */}
            <div className="form-input-div">
              <input
                type="text"
                placeholder="your name"
                className="form-control"
              ></input>
            </div>
            {/* EMAIL */}
            <div className="form-input-div">
              <input
                type="email"
                placeholder="your email"
                className="form-control"
              ></input>
            </div>
            {/* MESSAGE */}
            <div className="form-input-div">
              <textarea
                placeholder="your message"
                className="form-control textarea"
              ></textarea>
            </div>
          </div>
          <button className="form-button">
            <div>
              <p>SEND MESSAGE</p>
              <img src={GALAXY} alt=""></img>
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
