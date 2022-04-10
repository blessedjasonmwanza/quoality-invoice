/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import invoices from './invoices';

export const reducer = combineReducers({
  // reducers go here
  invoices,
});

const store = configureStore({
  reducer,
  middleware: [thunk, logger],
});

export default store;
