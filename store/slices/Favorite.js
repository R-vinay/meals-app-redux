import { createSlice } from "@reduxjs/toolkit";

const favoriteMealsSlice = createSlice({
  name: "favoriteMeals",
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      const meal = action.payload;
      state.push(meal);
    },
    removeFromFavorites: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const favoriteMealsActions = favoriteMealsSlice.actions;
export default favoriteMealsSlice;
