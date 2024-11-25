import { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        onChange={handleChange}
        value={value}
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default TaskInput;
