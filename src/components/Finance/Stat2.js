import React, { useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import "./index.css";

const Stat2 = () => {
  const [displayMode, setDisplayMode] = useState("month"); // Initial display mode

  const data = [
    { month: "January", category: "Revenue", value: 1000 },
    { month: "February", category: "Revenue", value: 1200 },
    { month: "March", category: "Revenue", value: 1500 },
    { month: "April", category: "Revenue", value: 1300 },
    { month: "May", category: "Revenue", value: 1600 },
    // Add data for the remaining months
  ];

  // Filter data based on the display mode (month or year)
  const filteredData =
    displayMode === "year"
      ? [
          {
            month: "Yearly",
            category: "Revenue",
            value: data.reduce((sum, item) => sum + item.value, 0),
          },
        ]
      : data;

  return (
    <div className="stat2">
      <div className="stat-heading">Statistics</div>
      <div className="stat-subheading">
        {displayMode === "month" ? "Revenue by Month" : "Revenue by Year"}
      </div>
      <div>
        <label>
          Month
          <input
            type="radio"
            value="month"
            checked={displayMode === "month"}
            onChange={() => setDisplayMode("month")}
          />
        </label>
        <label>
          Year
          <input
            type="radio"
            value="year"
            checked={displayMode === "year"}
            onChange={() => setDisplayMode("year")}
          />
        </label>
      </div>
      <ResponsiveBar
        height={250}
        data={filteredData}
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
