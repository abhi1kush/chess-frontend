// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducers/reducers';
// import { loggerMiddleware } from '../middleware/loggerMiddleware';

// Wrap storage so invalid/corrupted JSON in localStorage doesn't crash the app.
// redux-persist expects getItem/setItem/removeItem to return Promises.
const safeStorage = {
  getItem: (key) => {
    return new Promise((resolve) => {
      try {
        const raw = localStorage.getItem(key);
        if (raw == null) {
          resolve(null);
          return;
        }
        JSON.parse(raw);
        resolve(raw);
      } catch {
        resolve(null);
      }
    });
  },
  setItem: (key, value) => {
    return new Promise((resolve) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        resolve();
      } catch (e) {
        console.error('Failed to remove item from storage:', e);
        resolve();
      }
    });
  },
  removeItem: (key) => {
    return new Promise((resolve) => {
      try {
        localStorage.removeItem(key);
        resolve();
      } catch (e) {
        console.error('Failed to remove item from storage:', e);
        resolve();
      }
    });
  },
};

const persistConfig = {
  key: 'root',
  storage: safeStorage,
  whitelist: ['game', 'settings', 'analysis', 'pgn'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/PAUSE', 'persist/REGISTER', 'persist/FLUSH'],
      },
    })
    // }).concat(loggerMiddleware),
});

export const persistor = persistStore(store);