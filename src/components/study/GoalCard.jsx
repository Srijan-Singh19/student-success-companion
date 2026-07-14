import { useContext } from "react";
import { StudyContext } from "../../context/StudyContext";

export default function GoalCard() {

  const {
    studySeconds,
    dailyGoal,
    percentage
  } = useContext(StudyContext);

  const hrs = Math.floor(studySeconds / 3600);
  const mins = Math.floor((studySeconds % 3600) / 60);

  return (
    <div className="goal-card">

      <h2>🎯 Today's Goal</h2>

      <div className="progress">

        <div
          className="progress-fill"
          style={{
            width: `${percentage}%`
          }}
        ></div>

      </div>

      <h3>
        {hrs}h {mins}m / {dailyGoal / 3600}h
      </h3>

      <span>
        {Math.floor(percentage)}%
      </span>

    </div>
  );
}