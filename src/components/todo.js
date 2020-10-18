 // Todo.js

 import React from "react";

 const Todo = ({ text, complete, onClick }) => {
   return (
     <li
       onClick={onClick}
       style={{ textDecoration: complete ? "line-through" : "none" }}
     >
       {text}
     </li>
   );
 };
 
 export default Todo;
 
 /*
 import React, { Component} from 'react';
 import PropTypes from 'prop-types';

export default class Todo extends Component {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
        }}>
        {this.props.text}
      </li>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};



 import React, { useState } from 'react';
 import './todo.css';

 //============================
 function Task({ task, index, completeTask, removeTask }) {
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}
            <button style={{ background: "red"}} onClick={() => removeTask(index)}>X</button>
            <button onClick={() => completeTask(index)}>Complete</button>
        </div>
    );
}


//============================
 function CreateTask({ addTask }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;

        addTask(value);
        setValue("");
    }

    return (
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

//============================
function Todo() {
    const [tasks, setTasks] = useState([
        {
            title: "Get React to Work",
            completed: true
        },
        {
            title: "Add Items",
            completed: true
        },
        {
            title: "Complete Items",
            completed: true
        },
        {
            title: "Delete Items",
            completed: true
        },
        {
            title: "Filter View",
            completed: false
        },

    ]);

    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <div className="header">TODO - ITEMS</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                    task={task}
                    index={index}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    key={index}
                    />
                ))}
            </div>
            <div className="create-task" >
                <CreateTask addTask={addTask} />
            </div>
        </div>
    );
}

 export default Todo;
 */