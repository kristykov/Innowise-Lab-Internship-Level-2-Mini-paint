import { combineReducers } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-cycle
import authReducer from "./auth/authSlice";

interface IAuthState {
  userId: string;
  isAuthenticated: boolean;
  loading: boolean;
  authError: string;
}

export interface IRootState {
  auth: IAuthState;
}

const rootReducer = combineReducers({
  auth: authReducer,
  //   files: filesReducer,
  //   canvas: canvasReducer,
});

export default rootReducer;
