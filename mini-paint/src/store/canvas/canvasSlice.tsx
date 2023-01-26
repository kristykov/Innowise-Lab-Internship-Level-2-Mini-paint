import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRootState } from "../../interfaces";

const initialCanvasState = {
  color: "",
  shape: "",
  tool: "",
  thickness: 0,
};

export const canvasSlice = createSlice({
  name: "canvas",
  initialState: initialCanvasState,
  reducers: {
    changeColor: (state, action) => {
      return {
        ...state,
        color: action.payload,
      };
    },
    changeShape: (state, action) => {
      return {
        ...state,
        tool: "",
        shape: action.payload,
      };
    },
    changeThickness: (state, action) => {
      return {
        ...state,
        thickness: action.payload,
      };
    },
    changeTool: (state, action) => {
      return {
        ...state,
        shape: "",
        tool: action.payload,
      };
    },
  },
});

export const getToolSelector = (state: IRootState) => {
  return state.canvas.tool;
};
export const getColorSelector = (state: IRootState) => {
  return state.canvas.color;
};
export const getShapeSelector = (state: IRootState) => {
  return state.canvas.shape;
};
export const getThicknessSelector = (state: IRootState) => {
  return state.canvas.thickness;
};

export const { changeColor, changeShape, changeThickness, changeTool } =
  canvasSlice.actions;

export default canvasSlice.reducer;
