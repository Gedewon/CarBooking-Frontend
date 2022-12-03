import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, LOG_IN } from '../../../navigation/routes';

const tokenLogger = createAsyncThunk('TOKEN', async () => {
  const token = localStorage.getItem('token');

  if (token) {
    const response = await fetch(`${BASE_URL + LOG_IN}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        Authorization: token,
      },
    });
    localStorage.setItem('token', token);
    const user = await response.json();
    return user.id ? user : null;
  }

  return null;
});

export default tokenLogger;
