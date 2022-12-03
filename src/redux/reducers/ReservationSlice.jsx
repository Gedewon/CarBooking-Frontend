import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  reservation: [],
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
});

export default reservationSlice.reducer;
