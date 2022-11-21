import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  return (
    <div className="footer-main">
      <div>
        Copyright © {date.getFullYear()} NayanBhakhar, Designed By Nayan
        Bhakhar.
      </div>
    </div>
  );
};

export default Footer;
