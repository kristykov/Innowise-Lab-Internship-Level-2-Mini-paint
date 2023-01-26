import React from "react";
import classes from "./GalleryItem.module.scss";
import { IGalleryItemProps } from "../../interfaces/index";
import CloseIcon from "../../assets/close-item.svg";

const GalleryItem = ({
  name,
  fileId,
  imgUrl,
  date,
  onOpenCanvas,
  deleteFileHandler,
}: IGalleryItemProps) => {
  return (
    <div
      onClick={() => {
        return onOpenCanvas(fileId);
      }}
      className={classes["item-container"]}
      aria-hidden="true"
    >
      <img className={classes["item-img"]} src={imgUrl} alt="gallery-item" />
      <p className={classes["item-title"]}>{name}</p>
      <CloseIcon
        onClick={() => {
          return deleteFileHandler(fileId);
        }}
        className={classes["close-icon"]}
      />
    </div>
  );
};

export default GalleryItem;
