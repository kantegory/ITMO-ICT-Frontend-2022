import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: {},
  isLoading: false,
  error: "",
};

export const categorizedPhotosSlice = createSlice({
  name: "categorizedPhotos",
  initialState,
  reducers: {
    addPhotosToCategory(state, action) {
      state.categories[action.payload.category] = [
        ...state.categories[action.payload.category],
        action.payload.photos,
      ];
    },
    photosIsFetching(state) {
      state.isLoading = true;
    },
  },
});
