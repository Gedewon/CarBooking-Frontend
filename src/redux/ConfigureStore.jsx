import { combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userSlice from './reducers/UserSlice';

const rootReducer = combineReducers({
  user: userSlice,
  cars: carSlice,
  reservation: ReservationSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
