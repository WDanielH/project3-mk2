 // Todo.js

 import React from "react";
// ok trying to add delete
 const Todo = ({ text, complete, onClick }) => {
   return (
    
     <li
       onClick={onClick}
       style={{ textDecoration: complete ? "line-through" : "none" }}
     >
       {text}
       <button>X</button>
     </li>
     
   );
 };
 
 export default Todo;
 
 