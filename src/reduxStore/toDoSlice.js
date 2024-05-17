import { createSlice } from '@reduxjs/toolkit';
import { addTodoThunk, deleteAllTodosThunk, deleteTodoThunk, fetchTodosThunk } from './operations';
const initialState = {
  items: [],
  isLoading: false,
  error: null,
  currentToDo: null,
};
const toDoSlice = createSlice({
  name: 'toDos',
  initialState,
  reducers: {
    addCurrentToDo(state, action) {
      state.currentToDo = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodosThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addTodoThunk.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      })
      .addCase(deleteTodoThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addCase(deleteAllTodosThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => !payload.includes(item.id));
      })
      .addMatcher(
        ({ type }) => type.endsWith('/pending'),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/fulfilled'),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        (state, { error }) => {
          state.isLoading = false;
          state.error = error;
        }
      );
  },
});

export const toDosReducer = toDoSlice.reducer;
export const { addCurrentToDo } = toDoSlice.actions;
