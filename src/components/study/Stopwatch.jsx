import { useContext, useEffect, useState } from "react";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";
import { StudyContext } from "../../context/StudyContext";

export default function Stopwatch() {

  const { studySeconds, setStudySeconds } = useContext(StudyContext);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {

    let interval;

    if (isRunning) {

      interval = setInterval(() => {

        setStudySeconds(prev => prev + 1);

      }, 1000);

    }

    return () => clearInterval(interval);

  }, [isRunning, setStudySeconds]);

  const hrs = String(Math.floor(studySeconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((studySeconds % 3600) / 60)).padStart(2, "0");
  const secs = String(studySeconds % 60).padStart(2, "0");

  return (

    <div className="stopwatch-card">

      <h2>⏱ Stopwatch</h2>

      <h1>{hrs}:{mins}:{secs}</h1>

      <div className="buttons">

        <button
          className="start-btn"
          onClick={() => setIsRunning(true)}
        >
          <FaPlay />
          Start
        </button>

        <button
          className="pause-btn"
          onClick={() => setIsRunning(false)}
        >
          <FaPause />
          Pause
        </button>

        <button
          className="reset-btn"
          onClick={() => {
            setIsRunning(false);
            setStudySeconds(0);
          }}
        >
          <FaRedo />
          Reset
        </button>

      </div>

    </div>

  );

}