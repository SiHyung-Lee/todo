import { useState } from "react";

const TaskItem = ({ task: { id, text, completed }, deleteTask }) => {
  const [value, setValue] = useState(completed);
  const handleChange = (event) => {
    setValue(event.target.checked);
  };
  const handleRemoveTask = () => {
    deleteTask(id);
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={value}
        onChange={handleChange}
      />
      <span>{text}</span>
      <button type="button">수정</button>
      <button
        type="button"
        onClick={handleRemoveTask}>
        삭제
      </button>
    </div>
  );
};

export default TaskItem;
