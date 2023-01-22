export interface IRootState {
  auth: IAuth;
  files: IFiles;
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
  error: string;
  progress: number;
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

export interface IGalleryItemProps {
  name: string;
  fileId: string;
  imgUrl: string;
  date: string;
  onOpenCanvas: (id: string) => void;
}

export interface IGalleryProps {
  openCanvas: (id: string) => void;
}

export interface IControlsProps {
  onCancelHandler: () => void;
  onSaveHandler: () => void;
}

export interface IHeaderProps {
  logoutHandler: () => void;
  searchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ISidebarProps {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  createNewCanvas: () => void;
}
