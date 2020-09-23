const departmentReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_DEPARTMENT':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case 'EDIT_DEPARTMENT':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case 'UNDO_DEPARMENT':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    case 'ADD_DEPARTMENT':
      return state.concat({
        task: action.task,
        complete: false,
      });
    default:
      throw new Error();
  }
};

export default departmentReducer;