
let nextTodoId = 0;

// many examples used mor elegant add -- probably should implement one of those
export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  complete: false,
  text
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const filter = filter => ({
  type: "FILTER_TODO",
  filter
});

export const typeFilter = {
  SHOW_COMPLETE: "SHOW_COMPLETE",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_ALL: "SHOW_ALL"
};

// the nextTodoID-- is the propblem, it was a kludge to fix an earlier problem -- rework this 
export const deleteTodo = index =>({
  type: "DELETE_TODO",
  index:index,
 id:  nextTodoId--
});

// This is working but there is a fair annoying bug. If you delete from bottom up everything works. but if there are any items below the one you delete the keys get messed up.
