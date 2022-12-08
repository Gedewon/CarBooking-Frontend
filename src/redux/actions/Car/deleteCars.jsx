import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, CARS } from '../../../navigation/routes';

const deleteCars = createAsyncThunk('cars/DELETE', async (carId) => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const response = await fetch(`${BASE_URL + CARS}/${carId}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
          Authorization: token,
        },
      });
      return response.ok ? carId : null;
    } catch (e) {
      return e.errors;
    }
  }
  return [];
});

export default deleteCars;
