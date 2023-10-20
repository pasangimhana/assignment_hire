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

const CSRServiceProvider = () => {
  // Define state to store service provider data
  const [serviceProviders, setServiceProviders] = useState([
    {
      name: "Yohan Buddhika",
      category: "Plumbing",
      restrict: true,
      complains: "2",
    },
    {
      name: "Senuri Wickramasinghe",
      category: "Gardening",
      restrict: false,
      complains: "2",
    },
    {
      name: "Michelle Fernando",
      category: "Cleaning",
      restrict: false,
      complains: "2",
    },
    {
      name: "Kushantha Alwis",
      category: "Plumbing",
      restrict: false,
      complains: "2",
    },
    {
      name: "Avishka Fernando",
      category: "Lawn Mowing",
      restrict: false,
      complains: "2",
    },
  ]);

  // Function to handle changes in the "available" status
  const handleAvailabilityChange = (index) => {
    const updatedServiceProviders = [...serviceProviders];
    updatedServiceProviders[index].restrict =
      !updatedServiceProviders[index].restrict;
    setServiceProviders(updatedServiceProviders);
  };

  // Define state to store the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle changes in the search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // // Filter service providers based on the search query
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
\      <div className="cards-2">
        <Link to="/csrserviceprovider">
          <Card2 heading="Service Provider" active="card-2-active" />
        </Link>
        <Link to="/csrcustomer">
          <Card2 heading="Customer" active="card-2" />
        </Link>
        <Link to="/csrcategory">
          <Card2 heading="Category" active="card-2" />
        </Link>
      </div>
      <div className="service-search-bar fade-in">
        <TextField
          label="Search Service Providers"
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
                <TableCell>Category</TableCell>
                <TableCell>Complains</TableCell>
                <TableCell>Restrict User</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {serviceProviders.map((serviceProvider, index) => (
                <TableRow key={index}>
                  <TableCell style={{ textDecoration: "none" }}>
                    {/* Use the Link component to navigate to the profile */}
                    <Link
                      to="/spdashboard"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {serviceProvider.name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={serviceProvider.category}
                      variant="standard"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={serviceProvider.complains}
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Switch
                      checked={serviceProvider.restrict}
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

export default CSRServiceProvider;
