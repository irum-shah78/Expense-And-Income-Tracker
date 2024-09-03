// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
// import transactionSlice from './slices/transactionSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    // transaction: transactionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
