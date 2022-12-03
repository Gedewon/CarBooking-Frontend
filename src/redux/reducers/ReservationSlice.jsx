import { createSlice } from '@reduxjs/toolkit';
import getReservations from '../actions/Reservation/getReservation';
import addReservations from '../actions/Reservation/addReservation';

const initialState = {
  status: 'idle',
  reservation: [],
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReservations.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      reservation: action.payload,
    }));
    builder.addCase(getReservations.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(getReservations.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
    builder.addCase(addReservations.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      reservation: [...state.reservation, action.payload],
    }));
    builder.addCase(addReservations.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(addReservations.rejected, (state) => ({
      ...state,
      status: 'failed',
    }));
  },
});

export const reservationsRedux = reservationSlice.actions;
export default reservationSlice.reducer;
