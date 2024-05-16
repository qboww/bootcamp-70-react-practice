import { createSlice } from '@reduxjs/toolkit';
import { addTodoThunk, fetchTodosThunk } from './operations';
const initialState = {
  items: [],
};
const toDoSlice = createSlice({
  name: 'toDos',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTodosThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addTodoThunk.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      });
  },
});

export const toDosReducer = toDoSlice.reducer;
