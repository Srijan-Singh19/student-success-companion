import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {

  const [tasks, setTasks] = useLocalStorage("tasks", []);

  function addTask(title, priority) {

    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {

    setTasks(
      tasks.filter(task => task.id !== id)
    );

  }

  function toggleComplete(id) {

    setTasks(

      tasks.map(task =>

        task.id === id
          ? {
              ...task,
              completed: !task.completed
            }
          : task

      )

    );

  }

  return (

    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        toggleComplete,
      }}
    >

      {children}

    </TaskContext.Provider>

  );

}