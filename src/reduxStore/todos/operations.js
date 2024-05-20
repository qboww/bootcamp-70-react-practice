import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'reduxStore/auth/operations';

export const fetchTodosThunk = createAsyncThunk('todos/fetchTodos', async (_, thunkApi) => {
  try {
    const { data } = await instance.get('/tasks');
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});
export const addTodoThunk = createAsyncThunk('todos/addTodo', async (todo, thunkApi) => {
  try {
    const { data } = await instance.post('/tasks', todo);
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

export const deleteTodoThunk = createAsyncThunk('todos/delTodo', async (todoId, thunkApi) => {
  try {
    const { data } = await instance.delete(`/tasks/${todoId}`);
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
      const { data } = await instance.delete(`/tasks/${item.id}`);
      return data.id;
    });

    return Promise.all(promises);
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

export const changeTodoThunk = createAsyncThunk('todos/changeTodo', async (todo, thunkApi) => {
  try {
    const { data } = await instance.put(`todos/${todo.id}`, todo);
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});
