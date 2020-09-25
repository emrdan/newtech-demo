const employeeReducer = (state, action) => {
  switch (action.type) {
    case 'GET':
      return action.payload;
    default:
      throw new Error();
  }
};

export default employeeReducer;