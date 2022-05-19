import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from '../features/moviesSlice';
import userSlice from '../features/userSlice';

const store = configureStore({
  reducer: {
    movies: moviesSlice,
    user: userSlice
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;