import React from "react";
import classes from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={classes["menu-container"]}>
      <button className={classes["menu-button"]} type="button">
        New Artwork
      </button>
      <button className={classes["menu-button"]} type="button">
        Open File
      </button>
    </div>
  );
};

export default Sidebar;
