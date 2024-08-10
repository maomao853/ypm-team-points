import { ReactTicker } from "@guna81/react-ticker";
import { getTeamColour } from "../utils/colours";

export function Tick({ pointsData }: { pointsData: Points }) {
  const renderItem = (item: Task) => {
    return (
      <div style={{ display: "flex", width: "max-content" }}>
        <div style={{ borderLeft: "5px solid #001b56", marginLeft: 5 }} />
        <div style={{ marginLeft: 5 }}>
          <p style={{ marginBottom: "0" }}>{item.event}</p>
          <p>
            <span style={{ float: "left", color: "green" }}>▲ {item.points} pts</span>
            <span style={{ float: "right", color: getTeamColour(item.team) }}>{item.team}</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <ReactTicker
      data={pointsData.completedTasks}
      component={renderItem}
      speed={55}
      keyName="_id"
      tickerStyle={{
        width: "100%",
        height: "50px",
        backgroundColor: "#fff",
        zIndex: 99,
        borderTop: "1px solid #e0e0e0"
      }}
      tickerClassName="news-ticker"
    />
  );
}
