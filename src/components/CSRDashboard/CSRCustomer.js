import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Card2 from "./Card-2";
import DashNavbar from "./DashNavbar";
import { Switch } from "@mui/material";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

const CSRCustomer = () => {
  // Define state to store service provider data
  const [customers, setCustomer] = useState([
    {
      name: "Yohan Buddhika",
      status: "Available",
      restrict: true,
    },
    {
      name: "Senuri Wickramasinghe",
      status: "Not Available",
      restrict: false,
    },
    {
      name: "Michelle Fernando",
      status: "Available",
      restrict: false,
    },
    {
      name: "Kushantha Alwis",
      status: "Not Available",
      restrict: false,
    },
    {
      name: "Avishka Fernando",
      status: "Available",
      restrict: false,
    },
  ]);

  // Function to handle changes in the "available" status
  const handleAvailabilityChange = (index) => {
    const updatedCustomers = [...customers];
    updatedCustomers[index].restrict = !updatedCustomers[index].restrict;
    setCustomer(updatedCustomers);
  };

  // Define state to store the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle changes in the search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter service providers based on the search query
  // const filteredServiceProviders = serviceProviders.filter((serviceProvider) =>
  //   serviceProvider.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

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
          <Card2 heading="Customer" active="card-2-active" />
        </Link>
        <Link to="/csrcategory">
          <Card2 heading="Category" active="card-2" />
        </Link>
      </div>

      <div className="service-search-bar fade-in">
        <TextField
          label="Search Customers"
          variant="outlined"
          fullWidth
          value={searchQuery} // Set the value to the searchQuery state
          onChange={handleSearchChange} // Handle changes in the search input
        />
      </div>
      <div className="service-table fade-in">
        <TableContainer style={{ maxHeight: "350px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Restrict User</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((customers, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField
                      value={customers.name}
                      variant="standard"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={customers.status}
                      variant="standard"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Switch
                      checked={customers.restrict}
                      onChange={() => handleAvailabilityChange(index)}
                      color="secondary"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default CSRCustomer;
