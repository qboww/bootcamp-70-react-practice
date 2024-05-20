import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { toDosReducer } from './todos/toDoSlice';
import { pointsReducer } from './pointsSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './auth/authSlice';

const persistConfigPoints = {
  key: 'points',
  version: 1,
  storage,
};
const persistConfigAuth = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};
const rootReducer = combineReducers({
  todos: toDosReducer,
  filter: filterReducer,
  points: persistReducer(persistConfigPoints, pointsReducer),
  auth: persistReducer(persistConfigAuth, authReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
