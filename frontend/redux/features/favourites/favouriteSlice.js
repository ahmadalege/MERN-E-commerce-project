import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: [],
  reducers: {
    addToFavourites: (state, action) => {
      //Check if the product is not already a favourite
      if (!state.some((product) => product._id === action.payload._id)) {
        state.push(action.payload);
      }
    },
    removeFromFavourites: (state, action) => {
      //Remove the product with the macthing ID
      return state.filter((product) => product._id !== action.payload._id);
    },
    setFavourites: (state, action) => {
      //Set the favourites from localstorage
      return action.payload;
    },
  },
});

export const { addToFavourites, removeFromFavourites, setFavourites } =
  favouriteSlice.actions;
export const selectFavouriteProducts = (state) => state.favourites;
export default favouriteSlice.reducer;
