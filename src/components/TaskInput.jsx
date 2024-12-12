import { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nowDate = new Date()
      .toISOString()
      .slice(0, 23)
      .replace("T", "_")
      .replace(/[-:]/g, "")
      .replace(".", "_");
    addTask({ id: nowDate, text: value, completed: false });
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
      <button
        type="submit"
        className="border bg-black text-white">
        추가
      </button>
    </form>
  );
};
export default TaskInput;
