import { useState, useEffect, useCallback } from 'react';
import * as Papa from 'papaparse';

import { useViewport } from "./hooks/useViewport.tsx";
import { Feed } from "./components/Feed.tsx";
import { Donut } from "./components/Donut.tsx";
import { Tick } from "./components/Tick.tsx";
import { Tasks } from './components/Tasks.tsx';
import { Banner } from './components/Banner.tsx';
import { Progress } from './components/Progress.tsx';
import { PointsBox } from './components/PointsBox';

class PointsData implements Points {
  activeTasks: Task[] = [];
  completedTasks: Task[] = [];
  teamDS: number = 0;
  teamDP: number = 0;
  teamHL: number = 0;
  total: number = 0;

  constructor(tasks: Task[]) {
    if(tasks.length <= 0) {
      return;
    }
    
    this.activeTasks = tasks.filter(t => t.team === 'TBD');
    this.completedTasks = tasks.filter(t => t.team !== 'TBD');
    this.teamDS = this.sumPoints('DS');
    this.teamDP = this.sumPoints('DP');
    this.teamHL = this.sumPoints('HL');
    this.total = this.teamDS + this.teamDP + this.teamHL;
  }

  sumPoints(team: string): number {
    const list: Task[] = this.completedTasks.filter((t: Task) => {return(t.team === team)});
    for (var i = 0, sum = 0; i < list.length; sum += parseInt(list[i++].points));
    return sum;
  }
}

const parseEntryCSV = (csvData: string): Task[] => {
  const parsed = Papa.parse<Task>(csvData, {
    header: true,
    transformHeader: (h) => { return h.toLowerCase() },
    dynamicTyping: true
  });
  return parsed.data;
};

export default function App() {
  const breakpoint: number = 620;
  const isMobile: boolean = useViewport() < breakpoint;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pointsData, setPointsData] = useState<PointsData | any>();

  const fetchData = useCallback(async () => {
    fetch('/data.csv')
      .then((response) => response.text())
      .then((responseText) => parseEntryCSV(responseText))
      .then((data) => {
        setPointsData(new PointsData(data));
        setIsLoading(false);
      });
  }, []);

  useEffect(() => { fetchData() }, []);

  if(isLoading) { return(<div>LOADING...</div>) }

  const divStyleLeft = { 
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    minWidth: "100px",
    width: (isMobile ? '100vw' : '40vw'),
    height: "100%",
  }
  
  const divStyleRight = { 
    display: "flex",
    flexFlow: "column",
    width: (isMobile ? '100vw' : '60vw'),
    margin: '1vh 1vw'
  }

  return(
    <>
      {/* Ticker tape - scrolling */}
      <Tick pointsData={pointsData} />

      {/* Banner - Team Points */}
      <Banner />

      {/* Progress bar comparing teams */}
      <Progress pointsData={pointsData} />

      {/* Main div */}
      <div style={{ display: 'flex', flexFlow: (isMobile ? 'column' : 'row'), paddingTop: '16px' }}>

        {/* Left div */}
        <div style={divStyleLeft}>
          <PointsBox pointsData={pointsData} />
          <Donut pointsData={pointsData} />
        </div>

        {/* Right div */}
        <div style={divStyleRight}>
          <Tasks pointsData={pointsData} />
          <Feed pointsData={pointsData} />
        </div>

      </div>
    </>
  )
}