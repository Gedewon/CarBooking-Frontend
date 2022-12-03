import { combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userSlice from './reducers/UserSlice';

const rootReducer = combineReducers({
  user: userSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
