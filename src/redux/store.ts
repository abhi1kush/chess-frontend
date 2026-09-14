// src/redux/store.ts

import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  type PersistConfig,
} from 'redux-persist';

import rootReducer from './reducers/reducers';

/* ---------------------------------- */
/* Root State                         */
/* ---------------------------------- */

export type RootState = ReturnType<typeof rootReducer>;

// import { loggerMiddleware } from '../middleware/loggerMiddleware';

// Wrap storage so invalid/corrupted JSON in localStorage doesn't crash the app.
// redux-persist expects getItem/setItem/removeItem to return Promises.
const safeStorage = {
  getItem: (key: string) : Promise<string | null> => {
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
  setItem: (key: string, value: string): Promise<void> => {
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
  removeItem: (key: string): Promise<void> => {
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

/* ---------------------------------- */
/* Persist Configuration              */
/* ---------------------------------- */

const persistConfig: PersistConfig<RootState> = {
  key: 'root',

  storage: safeStorage,

  whitelist: [
    'game',
    'settings',
    'analysis',
    'pgn',
  ],
};

/* ---------------------------------- */
/* Persisted Reducer                  */
/* ---------------------------------- */

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
);

// const persistConfig = {
//   key: 'root',
//   storage: safeStorage,
//   whitelist: ['game', 'settings', 'analysis', 'pgn'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

/* ---------------------------------- */
/* Store                              */
/* ---------------------------------- */

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/REGISTER',
          'persist/FLUSH',
        ],
      },
    }),
});


/* ---------------------------------- */
/* Persistor                          */
/* ---------------------------------- */

export const persistor = persistStore(store);

export type AppStore = typeof store;

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;