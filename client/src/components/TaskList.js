import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteItem,completed, editItem}) => {
  return (
    <>
     <ul className="task-list"></ul>
      {tasks.map((task, index) => (
       <TaskItem task={task} deleteItem={() => deleteItem(index)}  completed={()=>completed(index)} editItem={()=> editItem(task,index)}/>

      ))}
    </>
  );
};

export default TaskList;
