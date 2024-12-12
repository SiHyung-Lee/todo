import TaskItem from "./TaskItem.jsx";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
        />
      ))}
    </>
  );
};

export default TaskList;
