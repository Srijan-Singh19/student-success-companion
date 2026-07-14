import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";
import TaskStats from "../components/tasks/TaskStats";
import FilterButtons from "../components/tasks/FilterButtons";

import "../components/tasks/Tasks.css";

export default function Tasks() {
  const {
    tasks,
    addTask,
    deleteTask,
    toggleComplete,
  } = useContext(TaskContext);

  const [filter, setFilter] = useState("All");

  let filteredTasks = tasks;

  if (filter === "Completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  if (filter === "Pending") {
    filteredTasks = tasks.filter((task) => !task.completed);
  }
  
  return (
    <div className="tasks-page">
      <h1>Task Manager</h1>

      <TaskForm addTask={addTask} />

      <FilterButtons
        filter={filter}
        setFilter={setFilter}
      />

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />

      <TaskStats tasks={tasks} />
    </div>
  );
}