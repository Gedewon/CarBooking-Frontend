import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const logInUserRedux = userSlice.actions;
export default userSlice.reducer;
