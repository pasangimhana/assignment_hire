import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Card from "./Card";
import FinanceNavbar from "./FinanceNavbar";
import Stat1 from "./Stat1";
import Stat2 from "./Stat2";

const Finance = () => {
  return (
    <div className="dashboard">
      <div className="slideBar">
        <img src="logo.png" alt="logo" className="dashboard--logo" />
        <ul className="ulContent">
          <Link to="/dashboard">
            <li>
              <ld>
                <ld>
                  <img src="dashboard--icon1.png" alt="icon" />
                </ld>
              </ld>
              <ld>Dashboard</ld>
            </li>
          </Link>
          <Link to="/finance">
            <li>
              <div className="active--link">
                <div className="yellow--mark"></div>
                <ld>
                  <ld>
                    <img src="dashboard--icon2.png" alt="icon" />
                  </ld>
                </ld>
                <ld className="active1">Finance</ld>
              </div>
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
        <FinanceNavbar
          firstName="Kaveen"
          avatar="Avatar.png"
          name="Kaveen Kalhara"
          role="Manager"
        />
      </div>
      <div className="cards fade-in">
        <Card
          icon="income-icon.png"
          heading="Total Income"
          amount="75000"
          percentage="10%"
          icon2="up.png"
          money="true"
          dif="+100"
          date="Today"
        />
        <Card
          icon="income-icon.png"
          heading="This Month Income"
          amount="51250"
          percentage="10%"
          icon2="up.png"
          money="true"
          dif="+100"
          date="Today"
        />
        <Card
          icon="income-icon.png"
          heading="This Week Income"
          amount="31500"
          percentage="10%"
          icon2="up.png"
          money="true"
          dif="+100"
          date="Today"
        />
        <Card
          icon="income-icon.png"
          heading="Monthly Revenue"
          amount="11300"
          percentage="10%"
          money="true"
          icon2="up.png"
          dif="+100"
          date="Today"
        />
      </div>
      <div className="stat fade-in">
        <Stat1 />
        <Stat2 />
      </div>
    </div>
  );
};

export default Finance;
