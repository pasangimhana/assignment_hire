import React from "react";
import "./index.css";
import Navbar from "../Navbar/Navbar";
import HomeContent from "./HomeContent";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="label">
      <Navbar home="active" back_page="text-wrappr-home" />
      <div className="fade-in">
        <div className="page-image">
          <img src="home-image.png" alt="PageImage" />
        </div>
        <div>
          <HomeContent />
        </div>
        <Link to="/download">
          <div className="download">
            <div className="text-wrapper5">Download App</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
