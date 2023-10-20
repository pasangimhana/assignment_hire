import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Card2 from "./Card-2";
import DashNavbar from "./DashNavbar";
import { Rating } from "@mui/material";

import Review from "./Review";
import Complain from "./Complain";

const SPDashboard = (rating) => {
  return (
    <div className="dashboard">
      <div className="slideBar">
        <img src="logo.png" alt="logo" className="dashboard--logo" />
        <ul className="ulContent">
          <Link to="/dashboard">
            <li>
              <div className="active--link">
                <div className="yellow--mark"></div>
                <ld>
                  <ld>
                    <img src="dashboard--icon1.png" alt="icon" />
                  </ld>
                </ld>
                <ld className="active1">Dashboard</ld>
              </div>
            </li>
          </Link>
          <Link to="/finance">
            <li>
              <ld>
                <ld>
                  <img src="dashboard--icon2.png" alt="icon" />
                </ld>
              </ld>
              <ld>Finance</ld>
            </li>
          </Link>
          <Link to="/complaints">
            <li>
              <ld>
                <ld>
                  <img src="dashboard--icon3.png" alt="icon" />
                </ld>
              </ld>
              <ld>Complaints</ld>
            </li>
          </Link>
          <Link to="/csr">
            <li>
              <ld>
                <ld>
                  <img src="dashboard--icon4.png" alt="icon" />
                </ld>
              </ld>
              <ld>CSR</ld>
            </li>
          </Link>
        </ul>
      </div>
      <div className="dashboard-navbar">
        <DashNavbar
          firstName="Kaveen"
          avatar="Avatar.png"
          name="Kaveen Kalhara"
          role="Manager"
        />
      </div>
      <div className="cards-2">
        <Link to="/serviceprovider">
          <Card2 heading="Service Provider" active="card-2-active" />
        </Link>
        <Link to="/customer">
          <Card2 heading="Customer" active="card-2" />
        </Link>
        <Card2 heading="Category" active="card-2" />
      </div>
      <div className="sp-profile fade-in">
        <img
          className="sp-img1"
          src="profile-avatar.png"
          alt="profile-avatar"
        />
        <div>
          <div className="sp-name">Tharushka Madusara</div>
          <Rating value="3.5" precision={0.1} readOnly />
          <div className="sp-description">
            I am an electrician based in Moratuwa with 10 years of experience.
            Lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </div>
        </div>
      </div>
      <div className="sp-reviews fade-in">
        <div className="sp-heading">Reviews</div>
        <Review
          avatar="sp-avatar1.png"
          name="Madusara Alwis"
          date="1 day ago"
          rating="4.5"
          description="K. Ranathunga is a good man. He is really focusing on his job and performed very well. Actually I should thanks HirePro app to giving me the chance to find the best out of best."
        />
        <Review
          avatar="sp-avatar1.png"
          name="Madusara Alwis"
          date="1 day ago"
          rating="4.5"
          description="K. Ranathunga is a good man. He is really focusing on his job and performed very well. Actually I should thanks HirePro app to giving me the chance to find the best out of best."
        />
      </div>
      <div className="sp-complains fade-in">
        <div className="sp-heading-complains">Complains</div>
        <Complain
          avatar="sp-avatar1.png"
          name="Madusara Alwis"
          date="1 day ago"
          rating="1"
          description="K. Ranathunga is a good man. He is really focusing on his job and performed very well. Actually I should thanks HirePro app to giving me the chance to find the best out of best."
        />
        <Complain
          avatar="sp-avatar1.png"
          name="Madusara Alwis"
          date="1 day ago"
          rating="2.5"
          description="K. Ranathunga is a good man. He is really focusing on his job and performed very well. Actually I should thanks HirePro app to giving me the chance to find the best out of best."
        />
      </div>
      <div className="sp-separator"></div>
    </div>
  );
};

export default SPDashboard;
