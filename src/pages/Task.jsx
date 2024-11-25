import TaskList from "../components/TaskList";
import TaskInput from "../components/TaskInput.jsx";
import { useState } from "react";

const tasks = [
  {
    id: 1,
    title: "study react component",
    completed: false,
  },
  {
    id: 2,
    title: "setting next.js",
    completed: false,
  },
  {
    id: 3,
    title: "read book",
    completed: true,
  },
];

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState();
  const addTask = (title) => {
    setNewTask(title);
  };

  return (
    <>
      <h2>Tasks</h2>
      <p>You have {task} tasks</p>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} />
    </>
  );
};

export default Task;
