import React from "react";
import classes from "./GalleryItem.module.scss";
import { IGalleryItemProps } from "../../interfaces/index";

const GalleryItem = ({
  name,
  fileId,
  imgUrl,

  onOpenCanvas,
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
    </div>
  );
};

export default GalleryItem;
