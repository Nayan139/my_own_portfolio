import React from "react";
import "./Portfolio.css";
import covidTracker from "../../Assets/Images/covidTracker.png";
import portfolioSite from "../../Assets/Images/portfolioSite.png";

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio-section">
        <div className="portfolio-header"></div>
        <h1 className="header-title">PORTFOLIO</h1>
        <div className="portfolio-cards">
          <div className="portfolio-card">
            <a
              href="https://covid-tracker-nb.netlify.app/"
              className="portfolio-link"
            >
              <div className="card" data-category="SEE LIVE">
                <img src={covidTracker} className="card-img" />
              </div>
              <div className="card-desc">
                <h5 className="desc">
                  Responsive Covid Trcker API using React Hooks,Material-UI
                </h5>
              </div>
            </a>
          </div>
          <div className="portfolio-card">
            <a
              href="https://nayan-bhakhar-fullstack.netlify.app/"
              className="portfolio-link"
            >
              <div className="card" data-category="SEE LIVE">
                <img src={portfolioSite} className="card-img" />
              </div>
              <div className="card-desc">
                <h5 className="desc">
                  Portfolio Site using ReactJS and Styled Components
                </h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
