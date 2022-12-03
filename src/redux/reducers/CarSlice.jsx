import { createSlice } from '@reduxjs/toolkit';
import getCars from '../actions/Car/getCars';
import createCars from '../actions/Car/createCars';
import deleteCars from '../actions/Car/deleteCars';

const initialState = {
  status: 'idle',
  cars: [],
};

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        state.status = 'success';
        state.cars.push(action.payload);
      })
      .addCase(getCars.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCars.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(createCars.fulfilled, (state, action) => {
        state.status = 'success';
        state.cars.push(action.payload);
      })
      .addCase(createCars.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createCars.rejected, (state) => {
        state.status = 'failed';
      })
  },
});

export const carsRedux = carSlice.actions;
export default carSlice.reducer;
