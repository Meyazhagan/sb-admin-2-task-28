import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

function MyChart(props) {
  const { options, classes } = props;
  const chartRef = useRef();
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, options);
  }, [options]);
  return (
    <div className={`chart${classes || " "}`}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default MyChart;
