import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import ComplaintsNavbar from "./ComplaintsNavbar";
import { Paper, Button, Typography, Divider, TextField } from "@mui/material";

const CSRComplaint = () => {
  // Sample data for a single complaint
  const complaintData = {
    customer: "Customer Name",
    complaintAgainst: "Person Name",
    description: "This is the description of the complaint.",
    date: "2023-09-15",
    reply: "Reply",
  };

  const [reply, setReply] = useState(""); // State for the reply input

  const handleReplyChange = (event) => {
    setReply(event.target.value);
  };

  const handleSendReply = () => {
    // You can handle sending the reply here
    // For now, we'll just log the reply to the console
    console.log("Reply:", reply);
    setReply(""); // Clear the input field after sending
  };

  return (
    <div className="dashboard">
      <div className="slideBar">
        <img src="logo.png" alt="logo" className="dashboard--logo" />
        <ul className="ulContent">
          <Link to="/csrdashboard">
            <li>
              <ld>
                <ld>
                  <img src="dashboard--icon1.png" alt="icon" />
                </ld>
              </ld>
              <ld>Dashboard</ld>
            </li>
          </Link>
          <Link to="/csrcomplaints">
            <li>
              <div className="active--link">
                <div className="yellow--mark"></div>
                <ld>
                  <ld>
                    <img src="dashboard--icon3.png" alt="icon" />
                  </ld>
                </ld>
                <ld className="active1">Complaints</ld>
              </div>
            </li>
          </Link>
          <Link to="/csruser">
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
        <ComplaintsNavbar
          firstName="Kaveen"
          avatar="Avatar.png"
          name="Kaveen Kalhara"
          role="Manager"
        />
      </div>
      <div className="complaint-details-container">
        <Paper
          elevation={3}
          className="complaint-details-paper fade-in"
          style={{
            width: "1014px",
            margin: "20px 0 0px 350px",
            padding: "10px",
            backgroundColor: "white",
            maxHeight: "500px",
          }}
        >
          <Typography variant="h5" align="center">
            Complaint Details
          </Typography>
          <Divider />
          <div className="complaint-detail">
            <strong>Customer:</strong> {complaintData.customer}
          </div>
          <div className="complaint-detail">
            <strong>Complaint Against:</strong> {complaintData.complaintAgainst}
          </div>
          <div className="complaint-detail">
            <strong>Description:</strong> {complaintData.description}
          </div>
          <div className="complaint-detail">
            <strong>Date:</strong> {complaintData.date}
          </div>
          <div className="complaint-detail">
            <strong>Reply:</strong> {reply}
          </div>
          <div className="complaint-buttons" style={{ display: "flex" }}>
            <div className="reply-section">
              {/* Input field for reply */}
              <TextField
                label="Reply"
                variant="outlined"
                fullWidth
                multiline
                rows={1}
                value={reply}
                onChange={handleReplyChange}
                style={{ margin: "10px 0" }}
              />
              {/* Button to send reply */}
              <Button
                variant="contained"
                color="primary"
                className="complaint-button"
                onClick={handleSendReply}
                style={{
                  marginRight: 20,
                  backgroundColor: "#FFCF70",
                  color: "black",
                }}
              >
                Send Reply
              </Button>
              <Link to="/csrcomplainttd">
                <Button
                  variant="contained"
                  color="primary"
                  className="complaint-button"
                  style={{
                    marginRight: 20,
                    backgroundColor: "#FFCF70",
                    color: "black",
                  }}
                >
                  View Task Details
                </Button>
              </Link>
              <Link to="/csrcomplaints">
                <Button
                  variant="contained"
                  color="secondary"
                  className="complaint-button"
                  style={{ backgroundColor: "#FFCF70", color: "black" }}
                >
                  Back
                </Button>
              </Link>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default CSRComplaint;
