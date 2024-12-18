import { useState } from "react";
import { Trash2, ClipboardPen, SquareCheckBig } from "lucide-react";

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
            <SquareCheckBig size={14} strokeWidth={2} />
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
            <ClipboardPen size={14} strokeWidth={2} />
          </button>
        </>
      )}

      <button
        type="button"
        onClick={() => handleDeleteTask(id)}
        className="task-delete"
      >
        <Trash2 size={14} strokeWidth={2} />
      </button>
    </div>
  );
};

export default TaskItem;
