import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faSquareCheck,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";

const TaskItem = ({
  task: { id, text, completed },
  updateTask,
  deleteTask,
}) => {
  const [completedValue, setCompletedValue] = useState(completed);
  const [update, setUpdate] = useState(false);
  const [value, setValue] = useState(text);

  const changeCompleted = (event) => {
    setCompletedValue(event.target.checked);
  };
  const changeTask = () => {
    setUpdate(true);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleUpdateTask = () => {
    updateTask(id, value);
    setUpdate(false);
  };

  const handleRemoveTask = () => {
    deleteTask(id);
  };
  return (
    <div className="task">
      <input
        type="checkbox"
        className="completed-checkbox"
        checked={completedValue}
        onChange={changeCompleted}
      />
      {update ? (
        <>
          <input
            type="text"
            className="update-input"
            value={value}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={handleUpdateTask}
            className="task-update">
            <FontAwesomeIcon icon={faSquareCheck} />
          </button>
        </>
      ) : (
        <>
          <span className="task-text">{value}</span>
          <button
            type="button"
            onClick={changeTask}
            className="task-change">
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </>
      )}

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
