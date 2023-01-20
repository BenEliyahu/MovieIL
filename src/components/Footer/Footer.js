import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <div className="footer">
      <p className="footer-name">Ben Eliyahu</p>
      <p className="footer-contact">
        <a target="_blank" 
        href="https://github.com/BenEliyahu">
          <box-icon
            color="white"
            size="md"
            type="logo"
            name="github"
          ></box-icon>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ben-eliyahu/"
        >
          <box-icon
            color="#0abde3"
            size="md"
            type="logo"
            name="linkedin"
          ></box-icon>
        </a>
        <a
          target="_blank"
          href="mailto:beneliyahu15@gmail.com"
        >
          <box-icon
          color="white"
            size="md"
            type="solid"
            name="envelope"
          ></box-icon>
        </a>
      </p>
    </div>
  );
}

export default Footer;
