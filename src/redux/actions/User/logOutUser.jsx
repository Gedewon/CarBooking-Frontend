import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, LOG_OUT } from '../../../navigation/routes';

const logOutUser = createAsyncThunk('LOG_OUT', async (userinfo) => {
  const response = await fetch(`${BASE_URL + LOG_OUT}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify(userinfo),
  });
  const data = await response.json();
  localStorage.removeItem('token');
  return data;
});

export default logOutUser;
