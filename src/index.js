import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
//import './index.css';
import './components/Todo.css';



const store = createStore(rootReducer);

const About = () => <div>About</div>;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </Router>
   
  </Provider>,
  document.getElementById("root")
);

// <App />



   