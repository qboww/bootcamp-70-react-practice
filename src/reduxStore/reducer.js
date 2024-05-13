import { ADD_TODO } from './constants';

const initialstate = {
  todos: [],
  filter: '',
};

export const todosReducer = (state = initialstate, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    default:
      return state;
  }
};
