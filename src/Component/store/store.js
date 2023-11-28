import {configureStore} from '@reduxjs/toolkit';
import projectReducer from './projectReducer';

export const store = configureStore({
  reducer: {
    project: projectReducer,
  }
})