import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faSquareCheck,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";

const TaskItem = ({
  task: { id, text, completed },
  handleUpdateTaskText,
  handleDeleteTask,
  handleToggleCompletion,
}) => {
  const [update, setupdate] = useState(false);
  const [taskText, setTaskText] = useState(text);

  return (
    <div className="task">
      <input
        type="checkbox"
        className="completed-checkbox"
        checked={completed}
        onChange={() => handleToggleCompletion(id)}
      />
      {update ? (
        <>
          <input
            type="text"
            className="update-input"
            value={taskText}
            onChange={(event) => setTaskText(event.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              handleUpdateTaskText(id, taskText);
              setupdate(false);
            }}
            className="task-update"
          >
            <FontAwesomeIcon icon={faSquareCheck} />
          </button>
        </>
      ) : (
        <>
          <span className="task-text">{taskText}</span>
          <button
            type="button"
            onClick={() => setupdate(true)}
            className="task-change"
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </>
      )}

      <button
        type="button"
        onClick={() => handleDeleteTask(id)}
        className="task-delete"
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default TaskItem;
