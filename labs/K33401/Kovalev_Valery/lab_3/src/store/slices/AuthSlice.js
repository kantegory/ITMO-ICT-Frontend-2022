import { createSlice } from "@reduxjs/toolkit";
import { fetchToken, fetchUser } from "../actions/authActions";

const initialState = {
  user: {},
  token: localStorage.getItem("token") ?? "",
  isLoading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [fetchToken.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchToken.fulfilled]: (state, action) => {
      state.token = action.payload;
      state.error = "";
    },
    [fetchToken.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [fetchUser.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    [fetchUser.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export default authReducer;
