import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
// import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
  // middleware: [thunk],
});

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => {
//     return [
//       ...getDefaultMiddleware({
//         serializableCheck: false,
//       }),
//     ];
//   },
// });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
