import { createAsyncThunk } from "@reduxjs/toolkit";
import { getToken, getUser } from "../../API/AuthService";

export const fetchUser = createAsyncThunk("auth/fetchUser", async (_, { rejectWithValue, getState }) => {
  try {
    const user = await getUser({ token: getState().auth.token });
    return user;
  } catch (e) {
    return rejectWithValue(e.message);
  }
});

export const fetchToken = createAsyncThunk("auth/fetchToken", async ({ username, password }, { rejectWithValue }) => {
  try {
    const { auth_token } = await getToken({ username, password });
    localStorage.setItem("token", auth_token);
    return auth_token;
  } catch (e) {
    localStorage.removeItem("token");
    return rejectWithValue(e.message);
  }
});
