import React from 'react'
import ReactDOM from 'react-dom';
import { render } from "react-dom" 
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

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

export default Todo;