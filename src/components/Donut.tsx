import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Deputy Speaker", "Deputy Premier", "House Leader"],
  datasets: [
    {
      label: "Points",
      data: [150, 425, 200],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
  /*
  options: {
      responsive: false
  }
  */
};

export function Donut({isMobile}: {isMobile: boolean}) {
  const mobileWidth = "60%";
  const desktopWidth = "40%";

  return (
    <div style={{ width: isMobile ? mobileWidth : desktopWidth }}>
      <Doughnut data={data} />
    </div>
  );
}
