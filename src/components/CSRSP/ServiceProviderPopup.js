import React from "react";
import { Button } from "@mantine/core";
import "./index.css";

const ServiceProviderPopup = ({ serviceProvider, onClose, onAccept, onReject }) => {
    return (
        <div className="popup">

            <h2>{serviceProvider.name}</h2>
            <img src={serviceProvider.image} alt="service provider" />

            <p>Timestamp: {serviceProvider.timestamp}</p>

            <p>Email: {serviceProvider.email}</p>

            <p>Mobile: {serviceProvider.mobile}</p>
            <p>NIC: {serviceProvider.nic}</p>

            <p>Driving License</p>
            <img src={serviceProvider.drivinglicense} alt="driving license" />

            <p>Proof of Service</p>
            <div className="proofofservice">
                <img src={serviceProvider.proofofservice1} alt="proof of service" />
                <img src={serviceProvider.proofofservice2} alt="proof of service" />
                <img src={serviceProvider.proofofservice3} alt="proof of service" />
                <img src={serviceProvider.proofofservice4} alt="proof of service" />
                <img src={serviceProvider.proofofservice5} alt="proof of service" />
            </div>

            <div className="buttondiv">
            <Button variant="outline" color="green" onClick={onAccept}>
                Accept
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
