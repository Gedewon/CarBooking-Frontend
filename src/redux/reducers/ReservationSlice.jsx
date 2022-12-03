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
    builder
      .addCase(getReservations.fulfilled, (state, action) => {
        state.status = 'success';
        state.reservation.push(action.payload);
      })
  },
});

export const reservationsRedux = reservationSlice.actions;
export default reservationSlice.reducer;