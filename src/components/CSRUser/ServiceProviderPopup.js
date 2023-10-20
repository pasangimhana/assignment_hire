import React from "react";
import { Button } from "@mantine/core";
import "./index.css";

const ServiceProviderPopup = ({ serviceProvider, onClose, onAccept, onReject }) => {
    return (
        <div className="popup">

            <h1>Category Review Application</h1>

            <h2>{serviceProvider.name}</h2>
            <img src={serviceProvider.image} alt="service provider" />

            <p>Request Time: {serviceProvider.timestamp}</p>
            <p>Email: {serviceProvider.email}</p>
            <p>Mobile: {serviceProvider.mobile}</p>

            <p>Requesting Category: </p>
            <p>{serviceProvider.requestingcategories}</p>

            <p>Category Proofs</p>
            <div className="proofofservice">
                <img src={serviceProvider.proofofcategory1} alt="Category Proof" />
                <img src={serviceProvider.proofofcategory2} alt="Category Proof" />
                <img src={serviceProvider.proofofcategory3} alt="Category Proof" />
                <img src={serviceProvider.proofofcategory4} alt="Category Proof" />
                <img src={serviceProvider.proofofcategory5} alt="Category Proof" />
            </div>

            <br/>
            <br/>

            <div className="buttondiv">
            <Button variant="outline" color="green" onClick={onAccept}>
                Approve
            </Button>
            <Button variant="outline" color="red" onClick={onReject}>
                Reject
            </Button>
            <Button variant="outline" onClick={onClose}>
                Close
            </Button>
            </div>
        </div>
    );
};

export default ServiceProviderPopup;
