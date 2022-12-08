import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, CARS } from '../../../navigation/routes';

const getCars = createAsyncThunk('cars/GET', async () => {
  const token = localStorage.getItem('token');
  if (token) {
    const response = await fetch(`${BASE_URL + CARS}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        Authorization: token,
      },
    });
    const cars = await response.json();
    return cars;
  }
  return [];
});

export default getCars;
