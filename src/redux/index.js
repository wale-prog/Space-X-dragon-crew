import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import crewReducer from './crewSlice';

const store = configureStore({
  reducer: {
    crew: crewReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
