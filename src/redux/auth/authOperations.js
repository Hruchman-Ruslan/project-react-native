import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../../firebase/config";

export const authSignUpUser = createAsyncThunk(
  "auth/signUp",
  async ({ login, email, password, avatar }, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;

      if (user) {
        await updateProfile(user, {
          displayName: login,
          photoURL: avatar,
          email,
        });
        console.log("user", user);

        const { displayName, uid, photoURL, email } = auth.currentUser;

        return { displayName, uid, photoURL, email };
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authLogInUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log("user", user.displayName, email);

      const { displayName, uid, photoURL } = user;

      console.log(user);

      return { displayName, uid, email, photoURL };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authSignOutUser = createAsyncThunk(
  "auth/signOut",
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
      console.log("user", auth.currentUser);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authOnStateChanged = createAsyncThunk(
  "auth/update",
  async (_, thunkAPI) => {
    try {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const { displayName, uid, photoURL, email } = user;

          await updateProfile(user, {
            displayName,
            photoURL,
          });

          thunkAPI.dispatch(
            authSlice.actions.authUpdated({
              displayName,
              uid,
              photoURL,
              email,
            })
          );
        } else {
          thunkAPI.dispatch(authSlice.actions.authUpdated(null));
        }
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
