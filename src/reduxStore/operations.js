import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://664396276c6a65658707ade7.mockapi.io/',
});

export const fetchTodosThunk = createAsyncThunk('todos/fetchTodos', async (_, thunkApi) => {
  try {
    const { data } = await instance.get('todos');
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});
export const addTodoThunk = createAsyncThunk('todos/addTodo', async (todo, thunkApi) => {
  try {
    const { data } = await instance.post('todos', todo);
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});
