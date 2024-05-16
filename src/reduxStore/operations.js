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

export const deleteTodoThunk = createAsyncThunk('todos/delTodo', async (todoId, thunkApi) => {
  try {
    const { data } = await instance.delete(`todos/${todoId}`);
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

export const deleteAllTodosThunk = createAsyncThunk('todos/delAllTodos', async (_, thunkApi) => {
  const state = thunkApi.getState();
  console.log(state);
  const todos = state.todos.items;

  try {
    const promises = todos.map(async item => {
      const { data } = await instance.delete(`todos/${item.id}`);
      return data.id;
    });

    return Promise.all(promises);
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});
