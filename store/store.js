import { configureStore } from "@reduxjs/toolkit";
import favoriteMealsSlice from "./slices/Favorite";

export const FavoriteStore = configureStore({
  reducer: {
    Favorites: favoriteMealsSlice.reducer,
  },
});
