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
import { toDosReducer } from './toDoSlice';
import { pointsReducer } from './pointsSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['filter', 'todos'],
};
const rootReducer = combineReducers({
  todos: toDosReducer,
  filter: filterReducer,
  points: pointsReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
