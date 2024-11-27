import TaskList from "../components/TaskList";
import TaskInput from "../components/TaskInput.jsx";
import { useState } from "react";

const initialTasks = [];

const Task = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <h2>Tasks</h2>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} />
    </>
  );
};

export default Task;
