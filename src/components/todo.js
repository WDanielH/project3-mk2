 // Todo.js

 import React, { useState } from 'react';
 import './todo.css';

 function Task({ task }) {
     return (
         <div
             className="task"
             style={{ textDecoration: task.completed ? "line-through" : "" }}
         >
             {task.title}
         </div>
     );
 }
 function Todo() {
     const [tasks, setTasks] = useState([
         {
             title: "Grab some Pizza",
             completed: true
         },
         {
             title: "Do your workout",
             completed: true
         },
         {
             title: "Hangout with friends",
             completed: false
         }
     ]);
     return (
         <div className="todo-container">
             <div className="header">TODO - ITEMS</div>
             <div className="tasks">
                 {tasks.map((task, index) => (
                     <Task
                         task={task}
                         index={index}
                         key={index}
                     />
                 ))}
             </div>
         </div>
     );
 }

function CreateTask({addTask}){
    const [value, setValue]= useState("");

    const handleSubmit = e =>{
        e.preventDefault();
        if (!value)return;

        addTask(Value);
        setValue("");
    }
    return(
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            className="input"
            value={value}
            placeholder="Add a new task"
            onChange={e => setValue(e.target.value)}
        />
    </form>   
    );
}

 export default Todo;