import { ChangeEvent } from "react";

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

export interface IToolsProps {
  onSelectShapeHandler: (shape: string) => void;
  onSelectToolHandler: (tool: string) => void;
  onSelectDefaultColorHandler: (color: string) => void;
  onSelectCustomColorHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onSelectThicknessHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onClearCanvas: () => void;
  thicknesValue: string;
}

export interface ICanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  file: IFile | undefined;
  onSetContext: (context: CanvasRenderingContext2D) => void;
}
