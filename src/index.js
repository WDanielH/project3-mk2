import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import ContactApp from './Contact/Contact';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
//import './index.css';
import './components/Todo.css';
import Navbar from "./containers/Navbar";



const store = createStore(rootReducer);


ReactDOM.render(
  <Provider store={store}>
    <Navbar /> 
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/contact" component={ContactApp} />
    </Router>
   
  </Provider>,
  document.getElementById("root")
);

// <App />
//<Route path="/about" component={About} />
//const About = () => <div>About</div>;


   