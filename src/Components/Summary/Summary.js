import React from "react";
import { SiUdemy } from "react-icons/si";
import "./Summary.css";

const Summary = () => {
  return (
    <div className="summary-container">
      <div className="resume-container">
        <h1 className="heading">SUMMARY</h1>
      </div>
      <div className="education-main">
        <h2 className="education-title">EDUCATION</h2>
        <div className="education-box">
          <div>
            <div className="education-detail">2018-2021</div>
          </div>
          <div>
            <h3 className="education-degree">
              Bachelor in Computer Application
            </h3>
            <p className="education-uni">
              Veer Narmad South Gujarat University
            </p>
          </div>
        </div>
      </div>
      <div className="certificate-main">
        <h2>CERTIFICATION</h2>
        <div className="certificate-list">
          <div className="list-main">
            <div>
              <div className="list-top">
                <SiUdemy />
                <div className="list-name">Udemy</div>
              </div>
            </div>
            <div class="certificate-desc">
              The Complete JavaScript Course 2021: From Zero to Expert!
            </div>
            <a
              href="https://www.udemy.com/certificate/UC-7b02833b-d6a1-487b-ab5c-d4df5a4a4bae/"
              target="_blank"
              class="certificate-btn"
            >
              View Certificate
            </a>
          </div>
          <div className="list-main">
            <div>
              <div className="list-top">
                <SiUdemy />
                <div className="list-name">Udemy</div>
              </div>
            </div>
            <div class="certificate-desc">
              The Complete Node.js Developer Course 3rd Edition.
            </div>
            <a
              href="https://www.udemy.com/certificate/UC-5999d1a4-753a-448e-9d5b-2f07577df2a9/"
              target="_blank"
              class="certificate-btn"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
      <div className="skills-main">
        <h2 class="skill-title">SKILLS</h2>
        <div className="skill-box">
          <div>
            <div className="skill">
              <h4 class="skill-name">HTML | CSS | SCSS</h4>
              <div>
                <div
                  style={{
                    height: "25px",
                    backgroundColor: "rgb(224, 224, 222)",
                    borderRadius: "20px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      height: "25px",
                      width: "95%",
                      backgroundColor: "rgb(82, 95, 140)",
                      transition: "width 1s ease-in-out 0s",
                      borderRadius: "inherit",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        padding: "5px",
                        color: "rgb(255, 255, 255)",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      95%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill">
              <h4 class="skill-name">CSS FRAMEWORKS</h4>
              <div>
                <div
                  style={{
                    height: "25px",
                    backgroundColor: "rgb(224, 224, 222)",
                    borderRadius: "20px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      height: "25px",
                      width: "88%",
                      backgroundColor: "rgb(82, 95, 140)",
                      transition: "width 1s ease-in-out 0s",
                      borderRadius: "inherit",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        padding: "5px",
                        color: "rgb(255, 255, 255)",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      88%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill">
              <h4 class="skill-name">JAVASCRIPT | ECMASCRIPT</h4>
              <div>
                <div
                  style={{
                    height: "25px",
                    backgroundColor: "rgb(224, 224, 222)",
                    borderRadius: "20px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      height: "25px",
                      width: "92%",
                      backgroundColor: "rgb(82, 95, 140)",
                      transition: "width 1s ease-in-out 0s",
                      borderRadius: "inherit",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        padding: "5px",
                        color: "rgb(255, 255, 255)",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      92%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill">
              <h4 class="skill-name">REACTJS </h4>
              <div>
                <div
                  style={{
                    height: "25px",
                    backgroundColor: "rgb(224, 224, 222)",
                    borderRadius: "20px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      height: "25px",
                      width: "90%",
                      backgroundColor: "rgb(82, 95, 140)",
                      transition: "width 1s ease-in-out 0s",
                      borderRadius: "inherit",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        padding: "5px",
                        color: "rgb(255, 255, 255)",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      90%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="skill">
              <h4 class="skill-name">REDUX & CONTEXT API </h4>
              <div>
                <div
                  style={{
                    height: "25px",
                    backgroundColor: "rgb(224, 224, 222)",
                    borderRadius: "20px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      height: "25px",
                      width: "87%",
                      backgroundColor: "rgb(82, 95, 140)",
                      transition: "width 1s ease-in-out 0s",
                      borderRadius: "inherit",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        padding: "5px",
                        color: "rgb(255, 255, 255)",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      87%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill">
              <h4 class="skill-name">NODEJS </h4>
              <div>
                <div
                  style={{
                    height: "25px",
                    backgroundColor: "rgb(224, 224, 222)",
                    borderRadius: "20px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      height: "25px",
                      width: "85%",
                      backgroundColor: "rgb(82, 95, 140)",
                      transition: "width 1s ease-in-out 0s",
                      borderRadius: "inherit",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        padding: "5px",
                        color: "rgb(255, 255, 255)",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      85%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill">
              <h4 class="skill-name">MONGODB </h4>
              <div>
                <div
                  style={{
                    height: "25px",
                    backgroundColor: "rgb(224, 224, 222)",
                    borderRadius: "20px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      height: "25px",
                      width: "81%",
                      backgroundColor: "rgb(82, 95, 140)",
                      transition: "width 1s ease-in-out 0s",
                      borderRadius: "inherit",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        padding: "5px",
                        color: "rgb(255, 255, 255)",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      83%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill">
              <h4 class="skill-name">FIREBASE </h4>
              <div>
                <div
                  style={{
                    height: "25px",
                    backgroundColor: "rgb(224, 224, 222)",
                    borderRadius: "20px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      height: "25px",
                      width: "80%",
                      backgroundColor: "rgb(82, 95, 140)",
                      transition: "width 1s ease-in-out 0s",
                      borderRadius: "inherit",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        padding: "5px",
                        color: "rgb(255, 255, 255)",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      80%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
