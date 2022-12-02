import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './reducers/UserSlice';

const rootReducer = combineReducers({
  user: userSlice,
});
