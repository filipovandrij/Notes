import React, { useState, useEffect } from "react";
import renderTasks from "./indexedDB.js";

function App() {
  const [newTaskDescription, setNewTaskDescription] = useState("");

  useEffect(() => {
    const ul = document.querySelector("ul");
    renderTasks([], ul);
  }, []);

  function handleNewTaskDescriptionChange(event) {
    setNewTaskDescription(event.target.value);
  }

  function handleNewTaskSubmit(event) {
    event.preventDefault();
    const task = { description: newTaskDescription };
    const ul = document.querySelector("ul");
    renderTasks([task], ul);
    setNewTaskDescription("");
  }

  return (
    <div>
      <form onSubmit={handleNewTaskSubmit}>
        <input
          type="text"
          placeholder="Enter task description"
          value={newTaskDescription}
          onChange={handleNewTaskDescriptionChange}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul></ul>
    </div>
  );
}

export default App;
