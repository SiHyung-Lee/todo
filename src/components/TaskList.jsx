import { useEffect, useState } from "react";
import TaskItem from "./TaskItem.jsx";

const TaskList = ({
  tasks,
  handleUpdateTaskText,
  handleDeleteTask,
  handleToggleCompletion,
  handleToggleAllCompletion,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [totalCompleted, setTotalCompleted] = useState(0);

  const handleChange = (event) => {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);
    handleToggleAllCompletion(isChecked);
  };

  const handleCountingCompleted = () => {
    const completedTasks = tasks.filter((task) => task.completed).length;
    setTotalCompleted(completedTasks);
  };

  useEffect(() => {
    handleCountingCompleted();
  }, [tasks]);

  return (
    <>
      <div className="util">
        <div className="select-all">
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
          <span>{totalCompleted} completed</span>
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
            handleUpdateTaskText={handleUpdateTaskText}
            handleDeleteTask={handleDeleteTask}
            handleToggleCompletion={handleToggleCompletion}
          />
        ))}
      </div>
    </>
  );
};

export default TaskList;
