import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Card2 from "./Card-2";
import DashNavbar from "./DashNavbar";
import {
  Button,
  TextField,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = () => {
    // Add a new question to the questions array
    setQuestions([...questions, ""]);
  };

  const handleQuestionChange = (index, value) => {
    // Update the value of a question at a specific index
    const updatedQuestions = [...questions];
    updatedQuestions[index] = value;
    setQuestions(updatedQuestions);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Get the selected file
    // You can perform further actions with the uploaded file here, e.g., send it to a server or display it.
    console.log("Uploaded file:", file);
  };

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
          <Card2 heading="Category" active="card-2-active" />
        </Link>
      </div>
      <Paper
        elevation={0}
        style={{
          width: "1014px",
          margin: "20px 0 0px 350px",
          padding: "10px",
          display: "block",
          backgroundColor: "white",
          maxHeight: "450px",
          overflowY: "auto",
        }}
        className="fade-in"
      >
        Contact Development Team..
      </Paper>
    </div>
  );
};

export default AddCategory;
