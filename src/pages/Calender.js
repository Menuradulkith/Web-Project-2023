import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    {
      type: "date",
      id: "Date",
    },
    {
      type: "number",
      id: "Won/Loss",
    },
  ],
  [new Date(2023, 3, 13), 37032],
  [new Date(2023, 3, 14), 38024],
  [new Date(2023, 3, 15), 38024],
  [new Date(2023, 3, 16), 38108],
  [new Date(2023, 3, 17), 38229],
  
  [new Date(2024, 9, 4), 38177],
  [new Date(2024, 9, 5), 38705],
  [new Date(2024, 9, 12), 38210],
  [new Date(2024, 9, 13), 38029],
  [new Date(2024, 9, 19), 38823],
  [new Date(2024, 9, 23), 38345],
  [new Date(2024, 9, 24), 38436],
  [new Date(2024, 9, 30), 38447],
];

export const options = {
  title: "Add Your Transactions",
  calendar: {
    cellColor: {
      stroke: "#76a7fa", 
      strokeOpacity: 0.5,
      strokeWidth: 1,
    },
    focusedCellColor: {
      stroke: "#a52714", 
      strokeOpacity: 1,
      strokeWidth: 2,
    },
    monthOutlineColor: {
      stroke: "#e6e6e6", 
      strokeOpacity: 0.8,
      strokeWidth: 1,
    },
    displayMode: "auto", 
  },
};

export function Calendar() {
  return (
    <Chart
      chartType="Calendar"
      width="90%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
