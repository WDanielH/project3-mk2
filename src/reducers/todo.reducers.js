

const todos = (state = [], action) => {
  
  
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          complete: action.complete,
          text: action.text
        }
      ];

      case "DELETE_TODO":
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1)
        ];

    case "TOGGLE_TODO":
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    default:
      return state;
  }
};
export default todos;

