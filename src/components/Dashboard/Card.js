import React from "react";
import CountUp from "react-countup";
import "./index.css";

const Card = ({
  icon,
  heading,
  amount,
  percentage,
  icon2,
  date,
  dif,
  money,
}) => {
  return (
    <div className="card">
      <div className="card-heading">
        <img src={icon} alt="Card Icon" />
        <div className="card-heading-wording">{heading}</div>
      </div>
      <div className="card-amount">
        {money === "true" ? "LKR " : ""}
        <CountUp start={0} end={parseFloat(amount)} duration={2} />
      </div>
      <div className="card-footer">
        <div className="card-percentage">{percentage}</div>
        <img src={icon2} alt="gain" />
        <div className="card-dif">
          {money === "true" ? "LKR " : ""}
          <CountUp start={0} end={parseFloat(dif)} duration={1} />
        </div>
        <div className="card-day">{date}</div>
      </div>
    </div>
  );
};

export default Card;
