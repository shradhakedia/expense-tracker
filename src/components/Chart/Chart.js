import React from "react";
import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = (props) => {

    let maxValue = 0;
    for (const dataPoint of props.dataPoints) {
        maxValue = Math.max(maxValue, dataPoint.value);
    }
    console.log(maxValue);

  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={maxValue}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
