import {applyMiddleware, createStore} from 'redux';
import { thunk } from 'redux-thunk';
import { rootReducer } from './reducers';
import {configureStore, Tuple} from '@reduxjs/toolkit'

export const store = configureStore({reducer: rootReducer, middleware: () => new Tuple(thunk)});