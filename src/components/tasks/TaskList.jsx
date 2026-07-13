import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  deleteTask,
  toggleComplete,
}) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No Tasks Yet!</h3>
        <p>Start by adding your first task.</p>
      </div>
    );
  }

  return (
    <div className="task-list">

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}

    </div>
  );
}