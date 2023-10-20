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

const CSRAddCategory = () => {
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
          display: "block",
          backgroundColor: "white",
          maxHeight: "450px",
          overflowY: "auto",
        }}
        className="fade-in"
      >
        <Typography variant="h6">Add New Category</Typography>
        <TextField
          label="Add Category Details"
          fullWidth
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          margin="normal"
        />
        <p>Contact the Developer</p>
          <Button
            variant="contained"
            component="span"
            color="primary"
            style={{ backgroundColor: "#FFCF70", color: "black" }}
          >
            Send Message
          </Button>

        {/*<Typography variant="subtitle1">Questions:</Typography>*/}
        {/*{questions.map((question, index) => (*/}
        {/*  <TextField*/}
        {/*    key={index}*/}
        {/*    label={`Question ${index + 1}`}*/}
        {/*    fullWidth*/}
        {/*    value={question}*/}
        {/*    onChange={(e) => handleQuestionChange(index, e.target.value)}*/}
        {/*    margin="normal"*/}
        {/*  />*/}
        {/*))}*/}
        {/*<div*/}
        {/*  style={{*/}
        {/*    display: "inline-block",*/}
        {/*    marginRight: "10px",*/}
        {/*    marginLeft: "auto",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <IconButton onClick={handleAddQuestion} color="primary">*/}
        {/*    <AddIcon />*/}
        {/*  </IconButton>*/}
        {/*  <Button*/}
        {/*    variant="contained"*/}
        {/*    color="primary"*/}
        {/*    style={{ backgroundColor: "#FFCF70", color: "black" }}*/}
        {/*  >*/}
        {/*    Add*/}
        {/*  </Button>*/}
        {/*</div>*/}
        {/*<div style={{ display: "inline-block" }}>*/}
        {/*  <Link to="/csrcategory">*/}
        {/*    <Button*/}
        {/*      variant="contained"*/}
        {/*      color="secondary"*/}
        {/*      style={{ backgroundColor: "#FFCF70", color: "black" }}*/}
        {/*    >*/}
        {/*      Discard*/}
        {/*    </Button>*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </Paper>
    </div>
  );
};

export default CSRAddCategory;
