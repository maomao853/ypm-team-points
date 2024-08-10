export const COLOURS: {[key: string]: string} = {
  ds: 'rgba(255, 99, 132, 1)',
  dp: 'rgba(54, 162, 235, 1)',
  hl: 'rgba(255, 206, 86, 1)',
  dsLight: 'rgba(255, 99, 132, 0.2)',
  dpLight: 'rgba(54, 162, 235, 0.2)',
  hlLight: 'rgba(255, 206, 86, 0.2)',
  navy: '#001b56',
}

export function getTeamColour(key: string) {
  return Object.values(COLOURS).find(value => COLOURS[key.toLowerCase()] === value);
}