import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import nayan from "../../Assets/Images/profile.jpg";
import "./Home.css";

const Home = () => {
  let listener = null;
  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (scrollState !== true) setScrollState(true);
      } else {
        if (scrollState !== false) setScrollState(false);
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);
  return (
    <>
      <Navbar
        className={scrollState ? "navbar-header" : ""}
        variant="light"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <div className={scrollState ? "navbar-header-logo" : "header-name"}>
              <p>
                Nayan<span>Bhakhar</span>
              </p>
            </div>
          </Navbar.Brand>
          <Nav className="me-last">
            <Nav.Link
              href="#home"
              className={scrollState ? "nav-link headder" : "me-last"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#features"
              className={scrollState ? "nav-link headder" : "me-last"}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              className={scrollState ? "nav-link headder" : "me-last"}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="#pricing1"
              className={scrollState ? "nav-link headder" : "me-last"}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#pricing2"
              className={scrollState ? "nav-link headder" : "me-last"}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="home-container">
        <div className="home-main-conatiner">
          <div className="home-section">
            <h1 className="home-name">I AM NAYAN BHAKHAR</h1>
            <p className="home-techno">
              FULL-STACK | REACT | NODE | JAVASCRIPT DEVELOPER
            </p>
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
              <a href="https://www.udemy.com/certificate/UC-7b02833b-d6a1-487b-ab5c-d4df5a4a4bae/">
                Hire Me
              </a>
            </div>
          </div>
        </div>
        <img src={nayan} alt="nayan" className="home-picture" />
      </div>
    </>
  );
};

export default Home;
