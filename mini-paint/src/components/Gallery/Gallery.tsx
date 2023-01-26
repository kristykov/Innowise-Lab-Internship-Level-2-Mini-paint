import React from "react";
import { useSelector } from "react-redux";
import { getFilesSelector } from "../../store/files/filesSlice";
import GalleryItem from "../GalleryItem/GalleryItem";
import { IFile, IGalleryProps } from "../../interfaces";
import classes from "./Gallery.module.scss";

const Gallery = ({ openCanvas }: IGalleryProps) => {
  const files: IFile[] = useSelector(getFilesSelector);

  return (
    <div className={classes["gallery-container"]}>
      <h2>Your gallery</h2>
      {files.length === 0 ? (
        <div className={classes["gallery-empty-text"]}>
          Oops. Looks like your gallery is empty :( Add your pictures by
          &quot;Add file&quot; or create your own artwork by clicking &quot;New
          Artwork&quot;
        </div>
      ) : (
        <div className={classes["gallery-items-container"]}>
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
      )}
    </div>
  );
};
export default Gallery;
