import React from "react";
import { BsCloudDownload } from "react-icons/bs";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div className="about-container">
        <div className="about-section">
          <h1>ABOUT ME</h1>
        </div>
        <div className="about-info">
          <div className="about-left">
            <h2>I’m Nayan Bhakhar, a Full Stack Developer</h2>
            <p className="article">
              I'm professional JavaScript Developer based in Gujarat, INDIA. I
              have completed my graduation in computer science, and currently
              I’m working as full-stack developer at globalia soft llp. I'm a
              self taught programmer and very passionate and dedicated to my
              work .With 2+ year experience as a professional Full stack
              Developer, I have acquired the skills necessary to build great,
              modern and premium websites.
            </p>
          </div>
          <div className="about-right">
            <div className="about-main">
              <div className="about-heading">Name:</div>
              <div className="about-value">Nayan Bhakhar</div>
            </div>
            <div className="about-main">
              <div className="about-heading">Email:</div>
              <div className="about-value">nayanbhakhar7075@gmail.com</div>
            </div>
            <div className="about-main">
              <div className="about-heading">Age:</div>
              <div className="about-value">22</div>
            </div>
            <div className="about-main">
              <div className="about-heading">Phone:</div>
              <div className="about-value">+919664906331</div>
            </div>
            <div className="about-main">
              <div className="about-heading">From:</div>
              <div className="about-value">Gujrat,India.</div>
            </div>
            <div className="about-main">
              <div className="about-heading">Freelance :</div>
              <div className="about-value">Available</div>
            </div>
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/1bDKvL4mrhGDBtky94TCnpZPpSU8YfyIv/view?usp=sharing"
          className="about-button"
        >
          <span className="about-btn-name">DOWNLOAD CV</span>
          <BsCloudDownload />
        </a>
      </div>
    </div>
  );
};

export default About;
