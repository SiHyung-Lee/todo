import TaskList from "../components/TaskList";
import TaskInput from "../components/TaskInput.jsx";
import { useState } from "react";

const initialTasks = [
  {
    id: 0,
    text: "Create a Javascript project",
    completed: false,
  },
  {
    id: 1,
    text: "Upload it online",
    completed: false,
  },
  {
    id: 2,
    text: "Develop ToDo list app",
    completed: false,
  },
  {
    id: 3,
    text: "Write a weekly business report",
    completed: false,
  },
];

const Task = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prevList) => prevList.filter((item) => item.id !== id));
  };
  console.log(tasks);
  return (
    <>
      <h2 className="app-title">To-Do List</h2>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
      />
    </>
  );
};

export default Task;
