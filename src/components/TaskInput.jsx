import { useState } from "react";

const TaskInput = ({ handleAddTask }) => {
  const [value, setvalue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const nowDate = new Date()
      .toISOString()
      .slice(0, 23)
      .replace("T", "_")
      .replace(/[-:]/g, "")
      .replace(".", "_");
    handleAddTask({ id: nowDate, text: value, completed: false });
    setvalue("");
  };

  return (
    <form onSubmit={handleSubmit} className="insert-form">
      <input
        type="text"
        placeholder="Add your task"
        onChange={(event) => setvalue(event.target.value)}
        value={value}
        className="border"
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default TaskInput;
