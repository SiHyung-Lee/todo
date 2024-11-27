import { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask({ id: new Date(), title: value, completed: false });
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        onChange={handleChange}
        value={value}
        className="border"
      />
      <button type="submit" className="border bg-black text-white">
        Add
      </button>
    </form>
  );
};
export default TaskInput;
