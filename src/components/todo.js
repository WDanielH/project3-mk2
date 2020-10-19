 // Todo.js

 import React from "react";
 import { connect } from "react-redux";
 import {deleteTodo} from "../actions/todo.actions";

 
// ok trying to add delete


 const Todo = ({ text, idx, deleteTodo, complete, onClick }) => {
   return (
    
     <li
       onClick={onClick}
       style={{ textDecoration: complete ? "line-through" : "none" }}
     >
       {text}
       <button onClick={() => deleteTodo(idx)}>
         X
      </button>
     </li>
     
   );
 };
 
 const mapDispatchToProps = dispatch => ({
    deleteTodo: key => dispatch(deleteTodo(key))

 })
 export default connect(null, mapDispatchToProps)(Todo);
 
 /*
<button id="addBtn" type="submit" onClick={onClick}>
        Add Todo
      </button>
 */
