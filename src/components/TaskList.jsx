import TaskItem from "./TaskItem.jsx";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <>
      <div className="util">
        <div className="select-all">
          <input type="checkbox" />
          <span>4 selected</span>
        </div>
        <div className="sorting">
          <select>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      <div className="tasks">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
};

export default TaskList;
