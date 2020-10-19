import React from "react";
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";
import Footer from "../containers/Footer";
import Navbar from "../containers/Navbar";
import "./Todo.css";


const App = () => (
    <div classname="todo-container">
    <Navbar /> 
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);

export default App;


