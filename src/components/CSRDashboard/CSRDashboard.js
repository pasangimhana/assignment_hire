import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Card from "./Card";
import Card2 from "./Card-2";
import DashNavbar from "./DashNavbar";
import Stat1 from "./Stat1";
import Stat2 from "./Stat2";

const CSRDashboard = () => {
  return (
    <div className="dashboard">
      <div className="slideBar">
        <img src="logo.png" alt="logo" className="dashboard--logo" />
        <ul className="ulContent">
          <Link to="/csrdashboard">
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
          <Link to="/csrcomplaints">
            <li>
              <ld>
                <ld>
                  <img src="dashboard--icon3.png" alt="icon" />
                </ld>
              </ld>
              <ld>Complaints</ld>
            </li>
          </Link>
          <Link to="/CSRUser">
            <li>
              <ld>
                <ld>
                  <img src="dashboard--icon4.png" alt="icon" />
                </ld>
              </ld>
              <ld>Category Review</ld>
            </li>
          </Link>
          <Link to="/CSRSPApprove">
            <li>
              <ld>
                <ld>
                  <img src="dashboard--icon3.png" alt="icon" />
                </ld>
              </ld>
              <ld>Service Providers</ld>
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
        <Link to="/csrserviceprovider">
          <Card2 heading="Service Provider" active="card-2" />
        </Link>
        <Link to="/csrcustomer">
          <Card2 heading="Customer" active="card-2" />
        </Link>
        <Link to="/csrcategory">
          <Card2 heading="Category" active="card-2" />
        </Link>
      </div>
      <div className="stat fade-in">
        <Stat1 />
        <Stat2 />
      </div>
    </div>
  );
};

export default CSRDashboard;
