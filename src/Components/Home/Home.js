import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Facebook from "../../Assets/svg/Facebook";
import Github from "../../Assets/svg/Github";
import Instagram from "../../Assets/svg/Instagram";
import Linkedin from "../../Assets/svg/Linkedin";
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
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Linkedin />
            </a>
            <a href="#">
              <Github />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
