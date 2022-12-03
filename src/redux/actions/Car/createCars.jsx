import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, CARS } from '../../../navigation/routes';

const createCars = createAsyncThunk('cars/CREATE', async (carInfo) => {
  const token = localStorage.getItem('token');
  if (token) {
    const response = await fetch(`${BASE_URL + CARS}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(carInfo),
    });
    const car = await response.json();
    return car;
  }
  return [];
});

export default createCars;
