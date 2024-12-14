import TaskItem from "./TaskItem.jsx";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
