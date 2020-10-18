import { combineReducers } from 'redux';
import { CREATE_TASK, COMPLETE_TASK, REMOVE_TASK, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
  case CREATE_TASK:
    return [...state, {
      text: action.text,
      completed: false
    }];
// implement the logic in this one
  case REMOVE_TASK:
    return [
      ...state.slice(0, action.index),
      Object.assign({}, state[action.index], {
        completed: true
      }),
      ...state.slice(action.index + 1)
    ];
// --------------------------------
  case COMPLETE_TASK:
    return [
      ...state.slice(0, action.index),
      Object.assign({}, state[action.index], {
        completed: true
      }),
      ...state.slice(action.index + 1)
    ];

  default:
    return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
