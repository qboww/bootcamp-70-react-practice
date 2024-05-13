import { ADD_TODO, DELETE_TODO, FILTER_TODO } from './constants';

export const addTodo = payload => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = payload => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const filterTodo = payload => {
  return {
    type: FILTER_TODO,
    payload,
  };
};
