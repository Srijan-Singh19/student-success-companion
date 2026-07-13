export default function TaskStats({ tasks }) {

  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const remaining = total - completed;

  return (
    <div className="task-stats">

      <div className="stat-card">
        <h2>📋</h2>
        <h3>{total}</h3>
        <p>Total</p>
      </div>

      <div className="stat-card">
        <h2>✅</h2>
        <h3>{completed}</h3>
        <p>Completed</p>
      </div>

      <div className="stat-card">
        <h2>⏳</h2>
        <h3>{remaining}</h3>
        <p>Remaining</p>
      </div>

    </div>
  );
}