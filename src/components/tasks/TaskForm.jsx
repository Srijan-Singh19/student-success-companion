import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");

  function handleAdd() {
    addTask(task, priority);

    setTask("");
    setPriority("Medium");
  }

  return (
    <div className="task-form">

      <input
        type="text"
        placeholder="Enter Task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">🔴 High</option>
        <option value="Medium">🟡 Medium</option>
        <option value="Low">🟢 Low</option>
      </select>

      <button onClick={handleAdd}>
        Add Task
      </button>

    </div>
  );
}