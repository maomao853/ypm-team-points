import { COLOURS } from "../utils/colours";

export function Progress({ pointsData }: { pointsData: Points }) {
  const ratioDS = pointsData.teamDS / pointsData.total;
  const ratioDP = pointsData.teamDP / pointsData.total;
  const ratioHL = pointsData.teamHL / pointsData.total;

  const styleDS = Object.assign({
    'backgroundColor': COLOURS.ds,
    'borderColor': COLOURS.ds,
    'width': `${ratioDS * 100}%`
  }, styleBar);

  const styleDP = Object.assign({
    'backgroundColor': COLOURS.dp,
    'borderColor': COLOURS.dp,
    'width': `${ratioDP * 100}%`
  }, styleBar);

  const styleHL = Object.assign({
    'backgroundColor': COLOURS.hl,
    'borderColor': COLOURS.hl,
    'width': `${ratioHL * 100}%`
  }, styleBar);

  return (
    <div>
      <div style={styleDS}></div>
      <div style={styleDP}></div>
      <div style={styleHL}></div>
    </div>
  );
}

const styleBar = {
  height: '1.5vh',
  margin: '0vh 1vw',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '5px'
};