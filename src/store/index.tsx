import { combineReducers, configureStore } from '@reduxjs/toolkit';
import adminSlice, { AdminState } from './slices/adminSlice';
import registerSlice from './slices/registerSlice';
import cartSlice from './slices/cartSlice';



import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { CONFIG } from '@/CONFIG';
import { Cart, RegisterForm } from '@/interfaces/admin';

const persistConfig = {
  key: CONFIG.APP_NAME,
  storage,
};

const rootReducer = combineReducers({
  admin: adminSlice,
  register: registerSlice,
  cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = {
  admin: AdminState;
  register: RegisterForm;
  cart: Cart;
};
export type AppDispatch = typeof store.dispatch;