import React from "react";
import "./ContactUS.css";

const ContactUS = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-title">
        <h1 className="title">TAKE A COFFEE & CHAT WITH ME</h1>
      </div>
      <div
        className="contact-main"
        style={{ width: "600px", marginTop: "1.25chrem" }}
      >
        <div className="app-footer-form">
          <div>
            <input type="text" placeholder="Your Name *" />
          </div>
          <div className="app-flex">
            <input type="text" placeholder="Your Email *" />
          </div>
          <div className="app-flex">
            <textarea type="text" placeholder="Write a message *" />
          </div>
          <div className="app-flex-btn">
            <button className="btn-submit">Submit</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ContactUS;
