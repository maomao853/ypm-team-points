import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { COLOURS } from "../utils/colours";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Donut({ pointsData }: { pointsData: Points }) {
  const data = {
    labels: ["Deputy Speaker", "Deputy Premier", "House Leader"],
    datasets: [
      {
        label: "Points",
        data: [
          pointsData.teamDS,
          pointsData.teamDP,
          pointsData.teamHL,
        ],
        backgroundColor: [
          COLOURS.dsLight,
          COLOURS.dpLight,
          COLOURS.hlLight,
        ],
        borderColor: [
          COLOURS.ds,
          COLOURS.dp,
          COLOURS.hl,
        ],
        borderWidth: 1
      },
    ],
  };

  const options = {
    responsive: true,
    aspectRatio: 1,
    maintainAspectRatio: true,
    animation: true
  };

  return(
    <Doughnut data={data} options={options} />
  );
}
