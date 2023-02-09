


import React, { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  };

return (    
    <div className="border border-black">
        <h3 className="text-xl">Liste de tâches</h3>
        <form  onSubmit={addTask}>
        <input className="border"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="border">Ajouter une tâche</button>
        </form>
        <ul>
        {tasks.map((task, index) => (
            <li key={index}>{task}</li>
        ))}
        </ul>
    </div>
);
}

export default TaskList;
