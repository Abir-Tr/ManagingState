import React from 'react'


const TaskItem =({task,deleteItem, completed, editItem}) =>{

    return(
        <>
       <h1 style={{ textDecoration:  task.complete? "line-through":"none", color: "#aaa"}}>{task.name}</h1>
    <p>{task.description}</p>
    <button onClick={editItem}>edit</button>
    <button onClick={deleteItem}>delete</button>
 
    <button onClick={completed}>{task.complete?"undone": "done"}</button>
        </>
    )
}

export default TaskItem; 