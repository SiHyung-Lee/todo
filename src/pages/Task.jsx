import TaskList from "../components/TaskList";
import TaskInput from "../components/TaskInput.jsx";
import { useEffect, useState } from "react";

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
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTasks((prevList) => prevList.filter((item) => item.id !== id));
  };

  const handleUpdateTaskText = (id, updateText) => {
    setTasks((prevList) =>
      prevList.map((task) => {
        if (task.id === id) {
          return { ...task, text: updateText };
        }
        return task;
      }),
    );
  };

  const handleToggleCompletion = (id) => {
    setTasks((prevList) =>
      prevList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  };

  const handleToggleAllCompletion = (isChecked) => {
    setTasks((prevList) =>
      prevList.map((task) => {
        return { ...task, completed: isChecked };
      }),
    );
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <>
      <h2 className="app-title">To-Do List</h2>
      <TaskInput handleAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        handleUpdateTaskText={handleUpdateTaskText}
        handleDeleteTask={handleDeleteTask}
        handleToggleCompletion={handleToggleCompletion}
        handleToggleAllCompletion={handleToggleAllCompletion}
      />
    </>
  );
};

export default Task;
