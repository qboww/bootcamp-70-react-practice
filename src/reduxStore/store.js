import { configureStore } from '@reduxjs/toolkit';
import { toDosReducer } from './toDoSlice';

export const store = configureStore({ reducer: toDosReducer });
