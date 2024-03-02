import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Salary", 11],
  ["Property Income", 2],
  ["Business", 2],
 
];

export const options = {
  title: "Income",
  is3D: true,
  backgroundColor: "transparent",
  titleTextStyle: {
    color: "#fff", 
    fontSize: 18,   
  },
  legend: {
    textStyle: {
      color: "#fff", 
      fontSize: 14,  
    },
  },
};

export function PieChart() {
  return (
    <div style={{ marginLeft: '-50px' }}> 
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"200px"}
      />
    </div>
  );
}
