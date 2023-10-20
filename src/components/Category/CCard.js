import React from "react";
import "./index.css";

const Card = ({ heading, image }) => {
  return (
    <div className="category-card">
      <img className="category-img" src={image} alt="img" />
      <div className="category-card-heading">{heading}</div>
    </div>
  );
};

export default Card;
