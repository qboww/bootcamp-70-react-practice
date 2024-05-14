import { createSlice } from '@reduxjs/toolkit';
const initialState = [];
const toDoSlice = createSlice({
  name: 'toDos',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      return [...state, payload];
    },
    deleteTodo: (state, { payload }) => {
      return state.filter(todo => todo.id !== payload);
    },
  },
});

export const { addTodo, deleteTodo } = toDoSlice.actions;
export const toDosReducer = toDoSlice.reducer;
