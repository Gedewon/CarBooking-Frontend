import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import tokenLogger from './actions/User/tokenLogger';
import userSlice from './reducers/UserSlice';
import carSlice from './reducers/CarSlice';
import ReservationSlice from './reducers/ReservationSlice';

const rootReducer = combineReducers({
  user: userSlice,
  cars: carSlice,
  reservation: ReservationSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
store.dispatch(tokenLogger());

export default store;
