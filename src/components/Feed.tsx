import Table from "react-bootstrap/Table";
import { getTeamColour } from "../utils/colours";

function parseDate(date: string) {
  let sections = date.split('-');
  let y = parseInt(sections[0]);
  let m = parseInt(sections[1]) - 1;
  let d = parseInt(sections[2]);
  let datestring = new Date(y, m, d).toLocaleString(
    'en-us',
    {
      month: 'long',
      day: 'numeric'
    }
  );
  return(datestring);
}

function Rows({ date, event, points, team }: { date: string, event: string, points: string, team: string }) {
  return (
    <tr>
      <td>{date}</td>
      <td>{event}</td>
      <td style={{ color: "green" }}>+{points}</td>
      <td style={{ color: getTeamColour(team) }}>{team}</td>
    </tr>
  );
}

export function Feed({ pointsData }: { pointsData: Points }) {
  return (
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
        {pointsData.completedTasks.map(t => (
          <Rows
            date={parseDate(t.date)}
            event={t.event}
            points={t.points}
            team={t.team}
          />
        ))}
      </tbody>
    </Table>
  );
}
