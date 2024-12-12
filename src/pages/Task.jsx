import TaskList from "../components/TaskList";
import TaskInput from "../components/TaskInput.jsx";
import { useState } from "react";

const initialTasks = [
  {
    id: 0,
    text: "task1",
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
      <h2>Tasks</h2>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
      />
    </>
  );
};

export default Task;
