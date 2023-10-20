import React from "react";
import "./index.css";
import Navbar from "../Navbar/Navbar";
import DownloadContent from "./DownloadContent";

const Download = () => {
  return (
    <div className="label">
      <Navbar home="active" back_page="text-wrappr-home" />
      <div className="fade-in">
        <div className="page-image">
          <img src="home-image.png" alt="PageImage" />
        </div>
        <div>
          <DownloadContent />
        </div>
        <div className="download-icons">
          <img className="download-logo" src="logo.png" alt="logo" />
          <div className="download-icon">
            <img src="download1.png" alt="icon-download" />
            <img src="download2.png" alt="icon-download" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
