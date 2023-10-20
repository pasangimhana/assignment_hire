import React from "react";
import "./index.css";

const Card2 = ({ heading, active }) => {
  return (
    <div className={active}>
      <div className="card-2-heading">{heading}</div>
    </div>
  );
};

export default Card2;
