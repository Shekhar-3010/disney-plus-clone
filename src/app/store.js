import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import moviesReducer from '../features/Movies/MovieSlice';
import userSlice from '../features/user/userSlice';
import userReducer from "../features/user/userSlice"

export const store = configureStore({
  reducer: {
    movie:moviesReducer,
    user:userSlice
  },
});
