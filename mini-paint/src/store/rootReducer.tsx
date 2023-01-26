import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import filesReducer from "./files/filesSlice";
import canvasReducer from "./canvas/canvasSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  files: filesReducer,
  canvas: canvasReducer,
});

export default rootReducer;
