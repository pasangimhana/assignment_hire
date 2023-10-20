import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import CSRNavbar from "./CSRNavbar";
import { Paper, TextField, Button, Avatar } from "@mui/material";
const AddCSR = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    image: null, // You can store the uploaded image file here
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({
      ...formData,
      image: imageFile,
    });
  };

  const handleAdd = () => {
    // Handle the form submission here, e.g., send the formData to the server
    console.log(formData);
  };

  const handleDiscard = () => {
    // Handle discarding the form data or navigating to another page
    // Reset the form data if needed
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      image: null,
    });
  };

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
              <div className="active--link">
                <div className="yellow--mark"></div>
                <ld>
                  <ld>
                    <img src="dashboard--icon4.png" alt="icon" />
                  </ld>
                </ld>
                <ld className="active1">CSR</ld>
              </div>
            </li>
          </Link>
        </ul>
      </div>
      <div className="dashboard-navbar">
        <CSRNavbar
          firstName="Kaveen"
          avatar="Avatar.png"
          name="Kaveen Kalhara"
          role="Manager"
        />
      </div>
      <Paper
        elevation={0}
        className="fade-in"
        style={{
          width: "600px",
          margin: "20px auto",
          padding: "20px",
          backgroundColor: "white",
        }}
      >
        <h2>Add CSR</h2>
        <TextField
          label="First Name"
          name="firstName"
          fullWidth
          value={formData.firstName}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          label="Last Name"
          name="lastName"
          fullWidth
          value={formData.lastName}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          value={formData.email}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          label="Phone"
          name="phone"
          fullWidth
          value={formData.phone}
          onChange={handleInputChange}
          margin="normal"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ margin: "20px 0" }}
        />
        {formData.image && (
          <Avatar
            src={URL.createObjectURL(formData.image)}
            alt="Uploaded Image"
            style={{ width: "100px", height: "100px" }}
          />
        )}
        <div
          style={{
            marginTop: "20px",
            gap: "20px",
            display: "flex",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleAdd}
            style={{
              marginLeft: "auto",
              backgroundColor: "#FFCF70",
              color: "black",
            }}
          >
            Add
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDiscard}
            style={{
              backgroundColor: "#FFCF70",
              color: "black",
            }}
          >
            Discard
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default AddCSR;
