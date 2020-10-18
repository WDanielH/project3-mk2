import React from "react";
import { addTodo } from "../actions/todo.actions";
import { connect } from "react-redux";
import '../components/Todo.css';


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


/*

import React, { findDOMNode, Component} from 'react';
import PropTypes from 'prop-types';

export default class CreateTask extends Component {
  render() {
    return (
      <div>
        <input type='text' ref='input' />
        
        <button onClick={() => this.createTask()}>Add</button>
      </div>
    );
  }

  
  
}

CreateTask.propTypes = {
  onAddClick: PropTypes.func.isRequired
};

*/

/* - snipped may not matter
handleClick(e) {
    const node = findDOMNode(this.refs.input);
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }

  */


// redux version from the course
/*
class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", price: "" };
    }
    handleChangeName(event) {
      this.setState({ name: event.target.value });
    }
    handleChangePrice(event) {
      this.setState({ price: event.target.value });
    }
    addItem() {
      this.props.onAdd(this.state.name, this.state.price);
      this.setState({ name: "", price: "" });
    }
    render() {
      return (
        <div>
          <input
            onChange={this.handleChangeName.bind(this)}
            value={this.state.name}
          />
          <input
            onChange={this.handleChangePrice.bind(this)}
            value={this.state.price}
          />
          <button onClick={() => this.addItem()}>Add</button>
        </div>
      );
    }
  }

*/

// react version that worked
/*
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
*/