import ClockCard from "../components/study/ClockCard";
import Stopwatch from "../components/study/Stopwatch";
import CountdownTimer from "../components/study/CountdownTimer";

import "../components/study/StudyCenter.css";

export default function StudyCenter() {
  return (
    <div className="study-center">

      <h1>📚 Study Center</h1>

      <ClockCard />

      <Stopwatch />

      <CountdownTimer />

    </div>
  );
}