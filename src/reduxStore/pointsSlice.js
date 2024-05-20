import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: { one: 0, two: 0, three: 0, four: 0, five: 0 } };

const pointsSlice = createSlice({
  name: 'points',
  initialState: initialState,
  reducers: {
    setPoint: (state, { payload }) => {
      state.items[payload.point] += payload.value;
    },
    resetPoints: () => {
      return initialState;
    },
  },
});
export const { setPoint, resetPoints } = pointsSlice.actions;
export const pointsReducer = pointsSlice.reducer;
