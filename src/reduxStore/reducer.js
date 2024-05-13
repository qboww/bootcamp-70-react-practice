import { ADD_TODO, DELETE_TODO, FILTER_TODO } from './constants';

const initialstate = {
  todos: [],
  filter: '',
};

export const todosReducer = (state = initialstate, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return { ...state, todos: state.todos.filter(oneTodo => oneTodo.id !== action.payload) };
    case FILTER_TODO:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};
