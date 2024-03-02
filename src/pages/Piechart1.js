import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Foods", 11],
  ["Travel", 2],
  ["Loans", 2],
  ["Subscription", 2],
  ["Transport", 7],
];

export const options = {
  title: "Expenses",
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

export function PieChart1() {
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
