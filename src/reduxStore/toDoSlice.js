import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  todos: [],
};

const toDoSlice = createSlice({
  name: 'toDos',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.push(payload);
    },
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
  },
});

export const { addTodo, deleteTodo } = toDoSlice.actions;
export const toDosReducer = toDoSlice.reducer;
