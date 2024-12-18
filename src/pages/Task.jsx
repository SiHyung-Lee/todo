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
    completed: true,
  },
  {
    id: 3,
    text: "Write a weekly business report",
    completed: false,
  },
];

const Task = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [sortType, setSortType] = useState("all");

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
      })
    );
  };

  const handleToggleCompletion = (id) => {
    setTasks((prevList) =>
      prevList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const handleToggleAllCompletion = (isChecked) => {
    setTasks((prevList) =>
      prevList.map((task) => {
        return { ...task, completed: isChecked };
      })
    );
  };

  const handleSorting = (type) => {
    setSortType(type);
  };
  const sortedTasks = tasks.filter((task) => {
    if (sortType === "all") {
      return task;
    } else if (sortType === "pending") {
      return !task.completed;
    } else if (sortType === "completed") {
      return task.completed;
    }
  });

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <>
      <h2 className="app-title">To-Do List</h2>
      <TaskInput handleAddTask={handleAddTask} />
      <TaskList
        tasks={sortedTasks}
        handleUpdateTaskText={handleUpdateTaskText}
        handleDeleteTask={handleDeleteTask}
        handleToggleCompletion={handleToggleCompletion}
        handleToggleAllCompletion={handleToggleAllCompletion}
        handleSorting={handleSorting}
        sortType={sortType}
      />
    </>
  );
};

export default Task;
