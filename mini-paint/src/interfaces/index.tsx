export interface IRootState {
  auth: IAuth;
  files: IFiles;
  canvas: ICanvas;
}

interface IAuth {
  userId: string;
  isAuthenticated: boolean;
  loading: boolean;
  authError: string;
}

interface IFiles {
  files: IFile[];
  fileNameSearch: string;
  loading: boolean;
  error: string;
}

interface ICanvas {
  color: string | null;
  shape: string | null;
  tool: string | null;
  thickness: number;
}

export type FormValues = {
  email: string;
  password: string;
};

export type CreationFileValues = {
  storageUrl: string;
  userId: string | null;
  fileName: string;
};

export interface IFile {
  fileId: string;
  name: string;
  imgUrl: string;
  date: string;
}
