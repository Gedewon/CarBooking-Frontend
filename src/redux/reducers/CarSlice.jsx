import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  cars: [],
};

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
});

export const carsRedux = carSlice.actions;
export default carSlice.reducer;
