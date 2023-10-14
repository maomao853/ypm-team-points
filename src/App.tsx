import { useState, useEffect } from 'react';
import { Feed } from "./components/Feed.tsx";
import { Donut } from "./components/Donut.tsx";
import { useViewport } from "./hooks/useViewport.tsx";


export default function App() {
  const breakpoint: number = 620;
  const isMobile: boolean = useViewport() < breakpoint;

  const [data,setData]=useState([]);

  async function getData() {
    const response = await fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response) => {
        console.log(response);
        return(response.json())
      })
      .then((myJson) => {
        console.log(myJson.Events);
        setData(myJson.Events);
      });
  }
  
  useEffect(()=>{
    getData()
  },[]);

  return (
    <div style={{ display: "flex", flexFlow: "column", alignItems: "center" }}>
      <Donut isMobile={isMobile} />
      <Feed activityLog={data} />
    </div>
  );
}
