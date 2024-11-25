import TaskList from "../components/TaskList";
import TaskInput from "../components/TaskInput.jsx";

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
  return (
    <>
      <h2>Tasks</h2>
      <TaskInput />
      <TaskList tasks={tasks} />
    </>
  );
};

export default Task;
