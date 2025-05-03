// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/reducers'; 
// import { loggerMiddleware } from '../middleware/loggerMiddleware';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['game', 'settings', 'analysis', 'pgn'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], 
      },
    })
    // }).concat(loggerMiddleware),
});

export const persistor = persistStore(store);