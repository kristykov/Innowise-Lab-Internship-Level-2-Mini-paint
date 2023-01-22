import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUser, loginUser } from "./authThunk";
import { IRootState } from "../../interfaces/index";

const uuid = localStorage.getItem("userId")
  ? localStorage.getItem("userId")
  : null;

const initialAuthState = {
  userId: uuid,
  isAuthenticated: false,
  loading: false,
  authError: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logOut: (state) => {
      return {
        ...state,
        userId: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    });

    builder.addCase(
      createUser.fulfilled,
      (state, action: PayloadAction<string>) => {
        return {
          ...state,
          loading: false,
          userId: action.payload,
          isAuthenticated: true,
        };
      },
    );
    builder.addCase(loginUser.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    });

    builder.addCase(
      loginUser.fulfilled,
      (state, action: PayloadAction<string>) => {
        return {
          ...state,
          loading: false,
          userId: action.payload,
          isAuthenticated: true,
        };
      },
    );
  },
});

export const isAuthenticated = (state: IRootState) => {
  return state.auth.isAuthenticated;
};

export const getUserId = (state: IRootState) => {
  return state.auth.userId;
};

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
