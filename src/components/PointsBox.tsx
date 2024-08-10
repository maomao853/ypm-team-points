import { COLOURS } from "../utils/colours";

export function PointsBox({ pointsData }: { pointsData: Points }) {
  return(
    <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
      <div style={styleDS}>{pointsData.teamDS}</div>
      <div style={styleDP}>{pointsData.teamDP}</div>
      <div style={styleHL}>{pointsData.teamHL}</div>
    </div>
  )
}

const styleBox = {
  width: '33%',
  height: '6vw',
  margin: '0.5vw',
  borderStyle: 'solid',
  borderWidth: '1px',
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center',
  fontWeight: 'bold',
}

const styleDS = Object.assign({
  'backgroundColor': COLOURS.dsLight,
  'border': COLOURS.ds,
  'color': COLOURS.ds,
}, styleBox)

const styleDP = Object.assign({
  'backgroundColor': COLOURS.dpLight,
  'border': COLOURS.dp,
  'color': COLOURS.dp,
}, styleBox)

const styleHL = Object.assign({
  'backgroundColor': COLOURS.hlLight,
  'border': COLOURS.hl,
  'color': COLOURS.hl,
}, styleBox)