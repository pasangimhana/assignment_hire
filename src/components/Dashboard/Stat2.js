import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import "./index.css";

const Stat2 = () => {
  const data = [
    { month: "January", category: "Revenue", value: 1000 },
    { month: "February", category: "Revenue", value: 1200 },
    { month: "March", category: "Revenue", value: 1500 },
    { month: "April", category: "Revenue", value: 1300 },
    { month: "May", category: "Revenue", value: 1600 },
    // Add data for the remaining months
  ];

  return (
    <div className="stat2">
      <div className="stat-heading">Statistics</div>
      <div className="stat-subheading">Revenue</div>
      <ResponsiveBar
        height={250}
        data={data}
        keys={["value"]}
        indexBy="month"
        groupMode="grouped"
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: "nivo" }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
      />
    </div>
  );
};

export default Stat2;
