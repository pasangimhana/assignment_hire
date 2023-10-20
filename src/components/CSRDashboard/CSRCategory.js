import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Card2 from "./Card-2";
import Card from "../Category/CCard";
import DashNavbar from "./DashNavbar";
import { Button, Paper, Typography } from "@mui/material";

const CSRCategory = () => {
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
          <Card2 heading="Category" active="card-2-active" />
        </Link>
      </div>
      <Paper
        elevation={0}
        style={{
          width: "1014px",
          margin: "20px 0 0px 350px",
          padding: "10px",
          display: "flex",
          backgroundColor: "white",
        }}
        className="fade-in"
      >
        <Typography variant="h6">Categories</Typography>
        <Link to="/csraddcategory" style={{ display: "flex", width: "1014px" }}>
          <Button
            variant="contained"
            color="primary"
            style={{
              marginLeft: "auto",
              backgroundColor: "#FFCF70",
              color: "black",
            }}
          >
            Add Category
          </Button>
        </Link>
      </Paper>
      <Paper
        className="fade-in"
        style={{
          width: "1014px",
          margin: "0 0 0px 350px",
          padding: "10px",
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "white",
          maxHeight: "400px",
          overflowY: "auto",
        }}
        elevation={0}
      >
        <Card heading="PLUMBING" image="category.png" />
        <Card heading="CLEANING" image="category.png" />
        <Card heading="MASONRY" image="category.png" />
        <Card heading="CARPENTRY" image="category.png" />
        <Card heading="TEST" image="category.png" />
        <Card heading="TEST" image="category.png" />
      </Paper>
    </div>
  );
};

export default CSRCategory;
