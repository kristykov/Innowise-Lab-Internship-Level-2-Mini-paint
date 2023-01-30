import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRootState, IFile } from "../../interfaces";
import { getFiles, createFile } from "./filesThunk";

const initialFilesState = {
  files: [] as IFile[],
  fileNameSearch: "",
  loading: false,
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
    builder.addCase(createFile.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(
      createFile.fulfilled,
      (state, action: PayloadAction<IFile>) => {
        return {
          ...state,
          files: [...state.files, action.payload],
          loading: false,
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

export const getFileById = (id: string) => {
  return (state: IRootState): IFile | undefined => {
    const { files } = state.files;
    return files.find((file) => {
      return file.fileId === id;
    });
  };
};

export const isLoading = (state: IRootState) => {
  return state.files.loading;
};

export const { searchByName } = filesSlice.actions;

export default filesSlice.reducer;
