import React from "react";

const TaskForm = ({
  createTask,
  name,
  handletInputChange,
  isEditing,
  updateTask
}) => {
  return (
    <form className="task-form" onSubmit={isEditing ? updateTask : createTask}>
      <input
        type="text"
        placeholder="Add a Task"
        name="name"
        value={name}
        onChange={handletInputChange}
      />
      <button type="submit">{isEditing ? "Edit" : "Add"}</button>
    </form>
  );
};

export default TaskForm;
