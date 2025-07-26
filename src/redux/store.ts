import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

// Infer types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
