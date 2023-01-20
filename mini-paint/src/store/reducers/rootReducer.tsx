import { combineReducers } from "redux";
import authReducer from "../auth/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  //   files: filesReducer,
  //   canvas: canvasReducer,
});

export default rootReducer;
