const initialstate = {
  todos: [],
  filter: '',
};

export const todosReducer = (state = initialstate, action) => {
  console.log(action);
  return state;
};
