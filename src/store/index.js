// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import visitorReducer from './features/visitorSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, visitorReducer);

export const store = configureStore({
  reducer: {
    visitor: persistedReducer,
  },
});

export const persistor = persistStore(store);
