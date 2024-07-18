import Table from "react-bootstrap/Table";

const teamColors: {[key: string]: string} = {
  "DS": "red",
  "DP": "blue",
  "HL": "gold",
}

function getTeamColor(val: string) {
  return Object.keys(teamColors).find(key => teamColors[key] === val);
}

function Rows({ date, event, points, team }: { date: string, event: string, points: string, team: string }) {
  return (
    <tr>
      <td>{date}</td>
      <td>{event}</td>
      <td style={{ color: "green" }}>+{points}</td>
      <td style={{ color: getTeamColor(team) }}>{team}</td>
    </tr>
  );
}

export function Feed({ entries }: { entries: Entry[] }) {
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
          {entries.map(e => (
            <Rows
              date={e.Date}
              event={e.Event}
              points={e.Points}
              team={e.Team}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
