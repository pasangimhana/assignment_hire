import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Card from "./Card";
import Card2 from "./Card-2";
import DashNavbar from "./DashNavbar";
import Stat1 from "./Stat1";
import Stat2 from "./Stat2";

const Dashboard = () => {
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
          <Card2 heading="Service Provider" active="card-2" />
        </Link>
        <Link to="/customer">
          <Card2 heading="Customer" active="card-2" />
        </Link>
        <Link to="/category">
          <Card2 heading="Category" active="card-2" />
        </Link>
      </div>
      <div className="cards fade-in">
        <Card
          icon="income-icon.png"
          heading="Income"
          amount="75000"
          percentage="10%"
          icon2="up.png"
          money="true"
          dif="+100"
          date="Today"
        />
        <Card
          icon="profit-icon.png"
          heading="Profit"
          amount="51250"
          percentage="10%"
          icon2="up.png"
          money="true"
          dif="+100"
          date="Today"
        />
        <Card
          icon="rsp-icon.png"
          heading="Registered Service Providers"
          amount="31500"
          percentage="10%"
          icon2="up.png"
          money="false"
          dif="+100"
          date="Today"
        />
        <Card
          icon="customers-icon.png"
          heading="Customers"
          amount="11300"
          percentage="10%"
          money="false"
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

export default Dashboard;
