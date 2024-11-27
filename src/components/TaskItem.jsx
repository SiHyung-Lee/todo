import { useState } from "react";

const TaskItem = ({ task: { title, completed } }) => {
  const [value, setValue] = useState(completed);
  const handleChange = (event) => {
    setValue(event.target.checked);
  };
  return (
    <div>
      <input type="checkbox" checked={value} onChange={handleChange} />
      <span>{title}</span>
    </div>
  );
};

export default TaskItem;
