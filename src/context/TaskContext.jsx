import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();
import { tasks as data } from "../data/task";

export function TaskContextProvider({ children }) {
  const [tasks, setTask] = useState([]);


  useEffect(() => {
    setTask(data);
  }, []);


  function createTask(task) {
    setTask([
      ...tasks,
      {
        title: task.title,
        description: task.description,
        id: { ...tasks.length },
      },
    ]);
  }

  function deleteTask(taskId) {
    setTask(tasks.filter((task) => task.id !== taskId));
  }

  

  return (
    <TaskContext.Provider
      value={{ tasks: tasks, deleteTask: deleteTask, createTask: createTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
