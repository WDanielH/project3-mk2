import React from "react";
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";
import Footer from "../containers/Footer";
//import "./Todo.css";


const App = () => (
    <div classname="todo-container">
  
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);

export default App;

//import Navbar from "../containers/Navbar";
//  <Navbar /> 