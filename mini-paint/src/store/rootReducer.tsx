import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import filesReducer from "./files/filesSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  files: filesReducer,
  //   canvas: canvasReducer,
});

export default rootReducer;
