import { useEffect, useState } from "react";

export default function CountdownTimer() {

  const [seconds,setSeconds] = useState(1500);

  const [running,setRunning] = useState(false);

  useEffect(()=>{

    let interval;

    if(running && seconds>0){

      interval = setInterval(()=>{

        setSeconds(prev=>prev-1);

      },1000);

    }

    return ()=> clearInterval(interval);

  },[running,seconds]);

  const mins = String(Math.floor(seconds/60)).padStart(2,"0");

  const secs = String(seconds%60).padStart(2,"0");

  return(

    <div className="countdown-card">

      <h2>🍅 Study Timer</h2>

      <h1>{mins}:{secs}</h1>

      <div className="buttons">

        <button
        className="start-btn"
        onClick={()=>setRunning(true)}
        >
          Start
        </button>

        <button
        className="pause-btn"
        onClick={()=>setRunning(false)}
        >
          Pause
        </button>

        <button
        className="reset-btn"
        onClick={()=>{
          setRunning(false);
          setSeconds(1500);
        }}
        >
          Reset
        </button>

      </div>

    </div>

  );

}