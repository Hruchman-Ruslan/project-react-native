import { createSlice } from "@reduxjs/toolkit";
import {
  authSignUpUser,
  authLogInUser,
  authSignOutUser,
  authOnStateChanged,
} from "./authOperations";

const state = {
  userID: null,
  login: null,
  email: null,
  avatar: null,
  isAuth: false,
  error: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authSignUpUser.pending, (state) => {
        state.userID = null;
        state.login = null;
        state.email = null;
        state.avatar = null;
        state.isAuth = false;
        state.error = false;
      })
      .addCase(authSignUpUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          userID: payload.uid,
          email: payload.email,
          avatar: payload.photoURL,
          login: payload.displayName,
          isAuth: true,
        };
      })
      .addCase(authSignUpUser.rejected, (state) => {
        state.userID = null;
        state.login = null;
        state.email = null;
        state.avatar = null;
        state.isAuth = false;
        state.error = true;
      })
      .addCase(authLogInUser.pending, (state) => {
        state.userID = null;
        state.login = null;
        state.email = null;
        state.avatar = null;
        state.isAuth = false;
        state.error = false;
      })
      .addCase(authLogInUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          userID: payload.uid,
          avatar: payload.photoURL,
          email: payload.email,
          login: payload.displayName,
          isAuth: true,
        };
      })
      .addCase(authLogInUser.rejected, (state) => {
        state.userID = null;
        state.login = null;
        state.email = null;
        state.avatar = null;
        state.isAuth = false;
        state.error = true;
      })
      .addCase(authSignOutUser.pending, (state) => {
        state.userID = null;
        state.login = null;
        state.email = null;
        state.avatar = null;
        state.isAuth = false;
        state.error = false;
      })
      .addCase(authSignOutUser.fulfilled, () => {
        return state;
      })
      .addCase(authSignOutUser.rejected, (state) => {
        state.userID = null;
        state.login = null;
        state.email = null;
        state.avatar = null;
        state.isAuth = false;
        state.error = true;
      })
      .addCase(authOnStateChanged.pending, (state) => {
        state.userID = null;
        state.login = null;
        state.email = null;
        state.avatar = null;
        state.isAuth = false;
        state.error = false;
      })
      .addCase(authOnStateChanged.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
        };
      })
      .addCase(authOnStateChanged.rejected, (state) => {
        state.userID = null;
        state.login = null;
        state.email = null;
        state.avatar = null;
        state.isAuth = false;
        state.error = true;
      });
  },
});

export const authReducer = authSlice.reducer;
