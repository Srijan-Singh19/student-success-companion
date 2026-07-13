export default function TaskItem({
  task,
  deleteTask,
  toggleComplete,
}) {

  const priorityIcon =
    task.priority === "High"
      ? "🔴"
      : task.priority === "Medium"
      ? "🟡"
      : "🟢";

  return (
    <div className="task-card">

      <h3 className={task.completed ? "completed" : ""}>
        {task.title}
      </h3>

      <p>
        {priorityIcon} {task.priority}
      </p>

      <button
        className="complete-btn"
        onClick={() => toggleComplete(task.id)}
      >
        {task.completed ? "✅ Completed" : "☐ Complete"}
      </button>

      <button
        className="delete-btn"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>

    </div>
  );
}