import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [2, 5],
      backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(255, 159, 64, 1)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(255, 159, 64, 1)"],
      borderWidth: 1,
    },
  ],
};

export function DoughnutChart() {
  return (
    <div className="col-4 my-5">
      <Doughnut data={data} />
    </div>
  );
}
