import ClockCard from "../components/study/ClockCard";
import CountdownTimer from "../components/study/CountdownTimer";
import Stopwatch from "../components/study/Stopwatch";
import GoalCard from "../components/study/GoalCard";

import "../components/study/StudyCenter.css";

export default function StudyCenter() {
  return (
    <div className="study-page">

      <div className="study-header">
        <h1>📚 Study Center</h1>
        <p>Stay Focused • Stay Consistent • Keep Learning</p>
      </div>

      <div className="study-grid">

        <ClockCard />

        <CountdownTimer />

        <Stopwatch />

        <GoalCard />

      </div>

    </div>
  );
}