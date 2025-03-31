// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/reducers'; 

const persistConfig = {
  key: 'root',
  storage,
  // Optionally, you can whitelist/blacklist reducers:
  whitelist: ['game', 'settings', 'analysis', 'pgn'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // Ignore persist actions
      },
    }),
});

export const persistor = persistStore(store);