import { createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "../auth/authSlice";
import { fetchUserData } from "../auth/userDataSlice";

const initialState = {
  favorites: [],
};

export const getFavIndex = (list, idToFind) => {
  const index = list.findIndex((item) => item._id === idToFind);
  return index;
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const itemIndex = getFavIndex(state.favorites, action.payload._id);
      if (itemIndex < 0) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorite: (state, action) => {
      const itemIndex = getFavIndex(state.favorites, action.payload._id);
      if (itemIndex > -1) {
        state.favorites.splice(itemIndex, 1);
      }
    },
    removeFavId: (state, action) => {
      if (action.payload > -1) {
        state.favorites.splice(action.payload, 1);
      }
    },
    resetList: (state, action) => {
      state.favorites = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutUser, (state) => {
        state.favorites = [];
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        // state.basket = action.payload.user?.box.items;
      });
  },
});

export const { addToFavorite, removeFromFavorite, resetList, removeFavId } =
  listSlice.actions;

export default listSlice.reducer;
