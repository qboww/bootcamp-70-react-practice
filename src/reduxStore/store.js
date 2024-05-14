import { configureStore } from '@reduxjs/toolkit';
import { toDosReducer } from './toDoSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    todos: toDosReducer,
    filter: filterReducer,
  },
});
