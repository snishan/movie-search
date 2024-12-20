import { combineReducers } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';

const rootReducer = combineReducers({
  movies: movieReducer,
});

export default rootReducer;