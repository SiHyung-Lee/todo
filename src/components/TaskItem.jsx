const TaskItem = ({ task: { title, completed } }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} />
      <span>{title}</span>
    </div>
  );
};

export default TaskItem;
