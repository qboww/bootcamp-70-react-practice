import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// fgsdgd2@gamil.com
// 12345678
const instance = axios.create({
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

      console.log(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
