import { useState, useEffect, useCallback } from 'react';
import * as Papa from 'papaparse';

import { Feed } from "./components/Feed.tsx";
import { Donut } from "./components/Donut.tsx";
import { useViewport } from "./hooks/useViewport.tsx";

const parseEntryCSV = (csvData: string): Entry[] => {
    const parsed = Papa.parse<Entry>(csvData, {
      header: true,
      dynamicTyping: true
    });
    return parsed.data;
  };

export default function App() {
  const breakpoint: number = 620;
  const isMobile: boolean = useViewport() < breakpoint;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<Entry[] | any>(undefined);

  const fetchData = useCallback(async () => {
    const response = await fetch('/data.csv')
      .then((response) => response.text())
      .then((responseText) => {
        let data = parseEntryCSV(responseText);
        // console.log(data);
        setData(data);
        setIsLoading(false);
      });
  }, [])

  useEffect(() => {
    fetchData();
  }, [])

  if (isLoading) {
    return (
      <div>LOADING...</div>
    )
  }

  return (
    <div style={{ display: "flex", flexFlow: "column", alignItems: "center" }}>
      <Donut isMobile={isMobile} entries={data} />
      <Feed entries={data} />
    </div>
  );
}
