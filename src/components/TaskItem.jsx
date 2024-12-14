import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const TaskItem = ({ task: { id, text, completed }, deleteTask }) => {
  const [value, setValue] = useState(completed);
  const handleChange = (event) => {
    setValue(event.target.checked);
  };
  const handleRemoveTask = () => {
    deleteTask(id);
  };
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={value}
        onChange={handleChange}
      />
      <span className="task-text">{text}</span>
      <button
        type="button"
        onClick={handleRemoveTask}
        className="task-delete">
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default TaskItem;
