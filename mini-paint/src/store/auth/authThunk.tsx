import { createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "../../firebase-config";
import { FormValues } from "../../interfaces/index";

export const createUser = createAsyncThunk(
  "createUser",
  async (data: FormValues) => {
    const { email, password } = data;
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    if (res.user) {
      const userId = res.user.uid;
      localStorage.setItem("userId", userId);
      return userId;
    }
    throw new Error("User ID not found");
  },
);

export const loginUser = createAsyncThunk(
  "loginUser",
  async (data: FormValues) => {
    const { email, password } = data;
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    if (res.user) {
      const userId = res.user.uid;
      localStorage.setItem("userId", userId);
      return userId;
    }
    throw new Error("User ID not found");
  },
);
