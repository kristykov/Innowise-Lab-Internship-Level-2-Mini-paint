import React from "react";
import { useSelector } from "react-redux";
import { getFilesSelector } from "../store/files/filesSlice";
import GalleryItem from "./GalleryItem";
import { IFile, IGalleryProps } from "../interfaces";
import classes from "./Gallery.module.scss";

const Gallery = ({ openCanvas }: IGalleryProps) => {
  const files: IFile[] = useSelector(getFilesSelector);

  return (
    <div className={classes["gallery-container"]}>
      {files.map((file) => {
        return (
          <GalleryItem
            onOpenCanvas={openCanvas}
            key={file.fileId}
            fileId={file.fileId}
            name={file.name}
            imgUrl={file.imgUrl}
            date={file.date}
          />
        );
      })}
    </div>
  );
};
export default Gallery;
