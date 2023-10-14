import Table from "react-bootstrap/Table";

function Rows({date, event, points, team}: {date: number, event: String, points: number, team: String}) {
  let teamColour = "";
  switch (team) {
    case "DS":
      teamColour = "red";
      break;
    case "DP":
      teamColour = "blue";
      break;
    case "HL":
      teamColour = "gold";
      break;
  }

  function getDate(date: number): string {
    let dateString: string = new Date(date).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    if(dateString.match("Invalid Date")) {
      return "In Progress..."
    }

    return(dateString);
  }

  // Date format
  // https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/
  return (
    <tr>
      <td>
        {getDate(date)}
      </td>
      <td>{event}</td>
      <td style={{ color: "green" }}>+{points}</td>
      <td style={{ color: teamColour }}>{team}</td>
    </tr>
  );
}

export function Feed({activityLog}: {activityLog: Entry[]}) {
  return (
    <div style={{ maxWidth: "1000px", width: "80%" }}>
      <Table striped hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Event</th>
            <th>Points</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {activityLog.map((e) => (
            <Rows date={e.date}
              event={e.event}
              points={e.points}
              team={e.team}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
