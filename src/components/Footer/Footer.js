import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="first">
        <div>
          <img src="logo2.png" alt="logo" />
        </div>
        <div className="content"></div>
        <div className="content">Stay Tuned! We are Growing up your skills</div>
      </div>
      <div className="second">
        <div className="headline">COMPANY</div>
        <div className="content">Blog</div>
        <div className="content">Careers</div>
        <div className="content">Pricing</div>
      </div>
      <div className="third">
        <div className="headline">RESOURCES</div>
        <div className="content">Documentation</div>
      </div>
      <div className="forth">
        <div className="headline">LEGAL</div>
        <div className="content">Terms of Service</div>
        <div className="content">Privacy Policy</div>
        <div className="content">Cookies Policy</div>
      </div>

      <div className="break"></div>
      <div className="fifth">@ 2023 HirePro Inc. All rights reserved.</div>

      <div className="logos">
        <img src="fblogo.png" alt="logo" />
        <img src="fblogo.png" alt="logo" />
        <img src="fblogo.png" alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
