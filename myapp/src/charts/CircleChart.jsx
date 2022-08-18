import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [4, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderColor: [
        "rgba(255,255,255,1)",
        "rgba(255, 255,255,1)",
        "rgba(255,255,255,1)",
        "rgba(255, 255,255,1)",
        "rgba(255,255,255,1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function CircleChart() {
  return (
    <div className="col-4 my-5">
      <Pie data={data} />
    </div>
  );
}
