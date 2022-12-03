import { createSlice } from '@reduxjs/toolkit';
import logInUser from '../actions/User/loginUser';
import logOutUser from '../actions/User/logOutUser';
import signUpUser from '../actions/User/signUpUser';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logInUser.fulfilled, (state, action) => {
        state.status = 'success';
        state.user.push(action.payload);
      })
      .addCase(logInUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logInUser.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(logOutUser.fulfilled, (state, action) => {
        state.status = action.message;
        state.user = {};
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.status = 'success';
        state.user.push(action.payload);
      });
  },
});

export const logInUserRedux = userSlice.actions;
export default userSlice.reducer;
