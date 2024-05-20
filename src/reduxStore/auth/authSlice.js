import { createSlice } from '@reduxjs/toolkit';
import { fetchRegisterThunk } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchRegisterThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = authSlice.reducer;
