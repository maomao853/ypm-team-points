import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function sumPoints(entries: Entry[], team: string) {
  const list = entries.filter(e => {return(e.Team === team)});
  for (var i = 0, sum = 0; i < list.length; sum += parseInt(list[i++].Points));
  //console.log(team + ": " + sum);
  return sum;
}

export function Donut({ isMobile, entries }: { isMobile: boolean, entries: Entry[] }) {
  const mobileWidth = "60%";
  const desktopWidth = "40%";

  const data = {
    labels: ["Deputy Speaker", "Deputy Premier", "House Leader"],
    datasets: [
      {
        label: "Points",
        data: [
          sumPoints(entries, "DS"),
          sumPoints(entries, "DP"),
          sumPoints(entries, "HL")
        ],
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
        borderWidth: 1
      },
    ],
  };

  return (
    <div style={{ width: isMobile ? mobileWidth : desktopWidth }}>
      <Doughnut data={data} />
    </div>
  );
}
