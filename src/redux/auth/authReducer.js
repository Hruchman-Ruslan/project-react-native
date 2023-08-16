import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userID: null,
  login: null,
  email: null,
  avatar: null,
  isAuth: false,
  error: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.error = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action) => {
          const { uid, displayName, photoURL, email } = action.payload || {};
          state.userID = uid || null;
          state.login = displayName || null;
          state.email = email || null;
          state.avatar = photoURL || null;
          state.isAuth = !!uid;
          state.error = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state) => {
          state.userID = null;
          state.login = null;
          state.email = null;
          state.avatar = null;
          state.isAuth = false;
          state.error = true;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
