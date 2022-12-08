import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, SIGN_UP } from '../../../navigation/routes';

const signUpUser = createAsyncThunk('SIGN_UP', async (userinfo) => {
  const response = await fetch(`${BASE_URL + SIGN_UP}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(userinfo),
  });
  localStorage.setItem('token', response.headers.get('Authorization'));
  const user = await response.json();
  return user;
});

export default signUpUser;
