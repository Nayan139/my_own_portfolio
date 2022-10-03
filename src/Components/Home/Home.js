import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-main-conatiner">
      <div className="home-container">
        <div className="home-header">
          <Navbar variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                <div className="header-name">
                  <p>
                    Nayan<span>Bhakhar</span>
                  </p>
                </div>
              </Navbar.Brand>
              <Nav className="me-last">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Resume</Nav.Link>
                <Nav.Link href="#pricing1">Portfolio</Nav.Link>
                <Nav.Link href="#pricing2">Contact</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </div>
      <div className="home-main">
        <div className="home-section">
          <h1>I AM NAYAN BHAKHAR</h1>
          <p>FULL-STACK | REACT | NODE | JAVASCRIPT DEVELOPER</p>
          <div className="home-icon">
            <a href="https://www.udemy.com/certificate/UC-7b02833b-d6a1-487b-ab5c-d4df5a4a4bae/">
              <FaFacebookF />
            </a>
            <a href="https://www.udemy.com/certificate/UC-7b02833b-d6a1-487b-ab5c-d4df5a4a4bae/">
              <BsInstagram />
            </a>
            <a href="https://www.udemy.com/certificate/UC-7b02833b-d6a1-487b-ab5c-d4df5a4a4bae/">
              <FaLinkedinIn />
            </a>
            <a href="https://www.udemy.com/certificate/UC-7b02833b-d6a1-487b-ab5c-d4df5a4a4bae/">
              <AiOutlineGithub />
            </a>
          </div>
          <div className="home-button">
            <a href="#">Hire Me</a>
          </div>
        </div>
        <div className="home-picture"></div>
      </div>
    </div>
  );
};

export default Home;
