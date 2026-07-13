import { useState, useEffect} from "react";

import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";
import TaskStats from "../components/tasks/TaskStats";
import FilterButtons from "../components/tasks/FilterButtons";

import "../components/tasks/Tasks.css";

export default function Tasks() {
    const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
    });
  const [filter, setFilter] = useState("All");

  function addTask(newTask, priority) {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      title: newTask,
      completed: false,
      priority,
    };

    setTasks([...tasks, task]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleComplete(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    setTasks(updatedTasks);
  }

  let filteredTasks = tasks;

  if (filter === "Completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  if (filter === "Pending") {
    filteredTasks = tasks.filter((task) => !task.completed);
  }
  
  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

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