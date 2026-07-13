import { useEffect, useState } from "react";

export default function Stopwatch() {

  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {

    let interval;

    if (isRunning) {

      interval = setInterval(() => {

        setSeconds(prev => prev + 1);

      },1000);

    }

    return () => clearInterval(interval);

  },[isRunning]);

  const hrs = String(Math.floor(seconds/3600)).padStart(2,"0");
  const mins = String(Math.floor((seconds%3600)/60)).padStart(2,"0");
  const secs = String(seconds%60).padStart(2,"0");

  return(

    <div className="stopwatch-card">

      <h2>⏱ Stopwatch</h2>

      <h1>{hrs}:{mins}:{secs}</h1>

      <div className="buttons">

        <button
        className="start-btn"
        onClick={()=>setIsRunning(true)}
        >
          Start
        </button>

        <button
        className="pause-btn"
        onClick={()=>setIsRunning(false)}
        >
          Pause
        </button>

        <button
        className="reset-btn"
        onClick={()=>{
          setIsRunning(false);
          setSeconds(0);
        }}
        >
          Reset
        </button>

      </div>

    </div>

  );

}