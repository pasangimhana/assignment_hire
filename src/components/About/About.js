import React from "react";
import "./index.css";
import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <div className="about-label">
      <Navbar about="active" back_page="text-wrappr-about" />
      <div className="fade-in">
        <div className="about-page-image">
          <img src="about-image.png" alt="PageImage" />
        </div>
        <div className="about-text-wrapper">ABOUT</div>
        <div className="about-text-wrapper2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{" "}
        </div>
      </div>
    </div>
  );
};

export default About;
