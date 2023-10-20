import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Card2 from "./Card-2";
import DashNavbar from "./DashNavbar";
import {
  Switch,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

const Customer = () => {
  // Define state to store service provider data
  const [customers, setCustomer] = useState([
    {
      name: "Yohan Buddhika",
      status: "Available",
      restrict: false,
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

  // Define state for the confirmation dialog
  const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  const [selectedServiceProviderIndex, setSelectedServiceProviderIndex] =
    useState(null);

  // Function to open the confirmation dialog
  const openConfirmationDialog = (index) => {
    setSelectedServiceProviderIndex(index);
    setConfirmationDialogOpen(true);
  };

  // Function to close the confirmation dialog
  const closeConfirmationDialog = () => {
    setSelectedServiceProviderIndex(null);
    setConfirmationDialogOpen(false);
  };

  // Function to handle the confirmation and restrict user
  const handleConfirmRestrict = () => {
    if (selectedServiceProviderIndex !== null) {
      // Handle the restriction here (update state, send a request to the server, etc.)
      handleAvailabilityChange(selectedServiceProviderIndex);
      closeConfirmationDialog();
    }
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
          <Card2 heading="Customer" active="card-2-active" />
        </Link>
        <Link to="/category">
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
                      onChange={() => openConfirmationDialog(index)}
                      color="secondary"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Dialog
        open={isConfirmationDialogOpen}
        onClose={closeConfirmationDialog}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>Confirm Restriction</DialogTitle>
        <DialogContent>
          Are you sure you want to restrict this user?
        </DialogContent>
        <DialogActions>
          <Button onClick={closeConfirmationDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmRestrict} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Customer;
