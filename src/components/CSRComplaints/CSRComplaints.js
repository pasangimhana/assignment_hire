import React from "react";
import {Link} from "react-router-dom";
import "./index.css";
import ComplaintsNavbar from "./ComplaintsNavbar";
import {
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    Paper,
    Avatar,
    Button,
} from "@mui/material";

const CSRComplaints = () => {
    const tableData = [
        {
            name: "Complaint 1",
            description: "This is the description of Complaint 1.",
            date: "2023-09-15",
            iscustomer: true,
        },
        {
            name: "Complaint 2",
            description: "This is the description of Complaint 2.",
            date: "2023-09-14",
            iscustomer: false,
        },
        {
            name: "Complaint 3",
            description: "This is the description of Complaint 3.",
            date: "2023-09-13",
            iscustomer: true,
        },
        {
            name: "Complaint 4",
            description: "This is the description of Complaint 4.",
            date: "2023-09-12",
            iscustomer: false,
        },
        {
            name: "Complaint 5",
            description: "This is the description of Complaint 5.",
            date: "2023-09-11",
            iscustomer: true,
        },
        {
            name: "Complaint 6",
            description: "This is the description of Complaint 6.",
            date: "2023-09-10",
            iscustomer: false,
        },
        {
            name: "Complaint 7",
            description: "This is the description of Complaint 7.",
            date: "2023-09-09",
            iscustomer: true,
        },
        {
            name: "Complaint 8",
            description: "This is the description of Complaint 8.",
            date: "2023-09-08",
            iscustomer: false,
        },
        // Add more data as needed
    ];

    return (
        <div className="dashboard">
            <div className="slideBar">
                <img src="logo.png" alt="logo" className="dashboard--logo"/>
                <ul className="ulContent">
                    <Link to="/csrdashboard">
                        <li>
                            <ld>
                                <ld>
                                    <img src="dashboard--icon1.png" alt="icon"/>
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
                                        <img src="dashboard--icon3.png" alt="icon"/>
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
                                    <img src="dashboard--icon4.png" alt="icon"/>
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
            <Button
                elevation={0}
                variant="contained"
                style={{
                    marginLeft: "350px",
                    backgroundColor: "#FFCF70",
                    color: "black",
                }}
            >
                Customer
            </Button>
            <Button
                elevation={0}
                variant="contained"
                style={{
                    marginLeft: "20px",
                    backgroundColor: "white",
                    color: "black",
                }}
            >
                Service Provider
            </Button>
            <Button
                elevation={0}
                variant="contained"
                style={{
                    marginLeft: "20px",
                    backgroundColor: "gray",
                    color: "white",
                }}
            >
                Solved
            </Button>
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
                            <TableCell>Description</TableCell>
                            <TableCell>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row, index) => (
                            <TableRow
                                key={index}
                                className={row.iscustomer ? "customer-row" : ""}
                            >
                                <TableCell
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "20px",
                                    }}
                                >
                                    <Avatar src={`avatar-${index}.png`} alt={row.name}/>
                                    <Link to="/csrcomplaint">{row.name}</Link>
                                </TableCell>
                                <TableCell>{row.description}</TableCell>
                                <TableCell>{row.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
};

export default CSRComplaints;
