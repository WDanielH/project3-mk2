/*
 * action types
 */

export const CREATE_TASK = 'CREATE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';

// This one is not in this code: 
export const REMOVE_TASK = 'REMOVE_TASK';

// This one isn’t in the react example
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */

export function createTask(text) {
  return { type: CREATE_TASK, text };
}

export function completeTask(index) {
  return { type: COMPLETE_TASK, index };
}

export function removeTask(index) {
  return { type: REMOVE_TASK, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}