import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, RESERVATION } from '../../../navigation/routes';

const addReservations = createAsyncThunk('reservation/POST', async (reservationInfo) => {
  const token = localStorage.getItem('token');
  if (token) {
    const response = await fetch(`${BASE_URL + RESERVATION}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(reservationInfo),
    });
    const reservations = await response.json();
    return reservations;
  }
  return [];
});

export default addReservations;
