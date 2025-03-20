import React, { useState } from 'react'


const TaskForm =({ addingtask }) =>{

    const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const addingNewTask = (e) => {
    if (!name ||! description){
      alert('Please enter a task');
      return;
    }
    e.preventDefault();
    const newTask = { name, description };
    addingtask(newTask);
    setName("");
    setDescription("");

  };


    return(
        <>
        <form>
        <label><strong>The Task : </strong></label>
        <input
          placeholder="Enter your task"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Enter your name"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addingNewTask} className="add-button">Add new task</button>
      </form>
      
        </>
    )
}

export default TaskForm; 