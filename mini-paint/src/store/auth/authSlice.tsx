import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUser, loginUser } from "./authThunk";
// eslint-disable-next-line import/no-cycle
import { IRootState } from "../rootReducer";

const initialAuthState = {
  userId: "",
  isAuthenticated: false,
  loading: false,
  authError: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
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

export default authSlice.reducer;
