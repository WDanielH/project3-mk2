import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Todo from "./components/Todo";
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import todoApp from './reducers/reducers';


const store = createStore(todoApp);

let rootElement = document.getElementById('root');
ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);




   