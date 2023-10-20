import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import CSRNavbar from "./CSRNavbar";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  TextField,
  Avatar,
  Checkbox,
} from "@mui/material";

const CSRUser = () => {
  const [tableData, setTableData] = useState([
    {
      name: "John Doe",
      category: "john.doe@example.com",
      qualifications: "+1234567890",
      approval: true,
    },
    {
      name: "John Doe",
      category: "john.doe@example.com",
      qualifications: "+1234567890",
      approval: false,
    },
    {
      name: "John Doe",
      category: "john.doe@example.com",
      qualifications: "+1234567890",
      approval: false,
    },
    {
      name: "John Doe",
      category: "john.doe@example.com",
      qualifications: "+1234567890",
      approval: true,
    },
    {
      name: "John Doe",
      category: "john.doe@example.com",
      qualifications: "+1234567890",
      approval: false,
    },
    {
      name: "Jane Smith",
      category: "jane.smith@example.com",
      qualifications: "+9876543210",
      approval: true,
    },
    {
      name: "Jane Smith",
      category: "jane.smith@example.com",
      qualifications: "+9876543210",
      approval: false,
    },
    {
      name: "Jane Smith",
      category: "jane.smith@example.com",
      qualifications: "+9876543210",
      approval: false,
    },
    // Add more data as needed
  ]);

  const handleCheckboxChange = (index) => {
    const updatedData = [...tableData];
    updatedData[index].checked = !updatedData[index].checked;
    setTableData(updatedData);
  };
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
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
              <ld>
                <ld>
                  <img src="dashboard--icon3.png" alt="icon" />
                </ld>
              </ld>
              <ld>Complaints</ld>
            </li>
          </Link>
          <Link to="/csruser">
            <li>
              <div className="active--link">
                <div className="yellow--mark"></div>
                <ld>
                  <ld>
                    <img src="dashboard--icon4.png" alt="icon" />
                  </ld>
                </ld>
                <ld className="active1">Category Review</ld>
              </div>
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
        <CSRNavbar
          firstName="Kaveen"
          avatar="Avatar.png"
          name="Kaveen Kalhara"
          role="Manager"
        />
      </div>
      <div className="service-search-bar fade-in">
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          style={{marginBottom:"30px"}}
          value={searchQuery} // Set the value to the searchQuery state
          onChange={handleSearchChange} // Handle changes in the search input
        />
      </div>
      <Paper
        elevation={0}
        style={{
          width: "1014px",
          margin: "20px 0 0px 350px",
          padding: "10px",
          backgroundColor: "white",
          maxHeight: "500px",
          overflowY: "auto",
        }}
        className="fade-in"
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Qualifications</TableCell>
              <TableCell>Approval</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <Avatar src={`avatar-${index}.png`} alt={row.name} />
                  {row.name}
                </TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.qualifications}</TableCell>
                <TableCell
                  className={
                    row.approval === "Active"
                      ? "active-approval"
                      : "offline-approval"
                  }
                >
                  <Checkbox
                    checked={row.checked}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <span
                    className={
                      row.approval === "Active"
                        ? "approval-cell-active"
                        : "approval-cell-offline"
                    }
                  />
                  {row.approval}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default CSRUser;
