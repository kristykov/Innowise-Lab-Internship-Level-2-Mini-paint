import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRootState, IFile } from "../../interfaces";
import { getFiles, createNewFile } from "./filesThunk";

const initialFilesState = {
  files: [] as IFile[],
  fileNameSearch: "",
  error: "",
};

export const filesSlice = createSlice({
  name: "files",
  initialState: initialFilesState,
  reducers: {
    searchByName: (state, action) => {
      return {
        ...state,
        fileNameSearch: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      createNewFile.fulfilled,
      (state, action: PayloadAction<IFile>) => {
        return {
          ...state,
          files: [...state.files, action.payload],
        };
      },
    );
    builder.addCase(
      getFiles.fulfilled,
      (state, action: PayloadAction<IFile[]>) => {
        return {
          ...state,
          files: [...action.payload],
        };
      },
    );
  },
});

export const getFilesSelector = (state: IRootState) => {
  const { fileNameSearch } = state.files;
  return state.files.files.filter((file) => {
    return file.name.includes(fileNameSearch);
  }) as IFile[];
};

export const { searchByName } = filesSlice.actions;

export default filesSlice.reducer;
