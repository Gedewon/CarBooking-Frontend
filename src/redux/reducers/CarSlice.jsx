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
    builder.addCase(getCars.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      cars: action.payload,
    }));
    builder.addCase(getCars.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(getCars.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
    builder.addCase(createCars.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      cars: [...state.cars, action.payload],
    }));
    builder.addCase(createCars.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(createCars.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
    builder.addCase(deleteCars.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      cars: state.cars.filter((car) => car.id !== action.payload),
    }));
    builder.addCase(deleteCars.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(deleteCars.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
  },
});

export const carsRedux = carSlice.actions;
export default carSlice.reducer;
