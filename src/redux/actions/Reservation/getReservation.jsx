import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, RESERVATION } from '../../../navigation/routes';

const getReservations = createAsyncThunk('reservation/GET', async () => {
  const token = localStorage.getItem('token');
  if (token) {
    const response = await fetch(`${BASE_URL + RESERVATION}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        Authorization: token,
      },
    });
    const reservations = await response.json();
    return reservations;
  }
  return [];
});

export default getReservations;
