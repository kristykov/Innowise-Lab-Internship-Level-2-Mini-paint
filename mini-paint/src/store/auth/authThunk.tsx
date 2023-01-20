import { createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "../../firebase-config";

type FormValues = {
  email: string;
  password: string;
};

export const createUser = createAsyncThunk(
  "createUser",
  // eslint-disable-next-line consistent-return
  async (data: FormValues) => {
    const { email, password } = data;
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    if (res.user) {
      const userId = res.user.uid;
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
      return userId;
    }
    throw new Error("User ID not found");
  },
);
