import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Todo from "./components/todo";
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import todoApp from './reducers';


let store = createStore(todoApp);

let rootElement = document.getElementById('root');
React.render(
  // The child must be wrapped in a function
  // to work around an issue in React 0.13.
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  rootElement
);




   