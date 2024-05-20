import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// fgsdgd2@gamil.com
// 12345678
export const instance = axios.create({
  baseURL: 'https://goit-task-manager.herokuapp.com/',
});

const setAuthHeaders = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeaders = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const fetchRegisterThunk = createAsyncThunk(
  'users/fetchRegister',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post('users/signup', credentials);
      setAuthHeaders(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchLoginThunk = createAsyncThunk(
  'users/fetchLogin',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post('users/login', credentials);
      setAuthHeaders(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchLogoutThunk = createAsyncThunk('users/fetchLogout', async (_, thunkAPI) => {
  try {
    await instance.post('users/logout');
    clearAuthHeaders();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
