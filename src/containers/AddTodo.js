import React from "react";
import { addTodo } from "../actions/todo.actions";
import { connect } from "react-redux";
//import '../components/Todo.css';


const AddTodo = ({ dispatch }) => {
  let input;
  let onClick = (e) => {
    if (input.value.trim() !== "") {
      dispatch(addTodo(input.value.trim()));
    }
  };
  return (
    <React.Fragment>
      <div>
      <input type="text" ref={node => (input = node)} />
      <button id="addBtn" type="submit" onClick={onClick}>
        Add Todo
      </button>
      </div>
    </React.Fragment>
  );
};

export default connect()(AddTodo);

