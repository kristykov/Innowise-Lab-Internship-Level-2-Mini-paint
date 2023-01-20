import React from "react";
import classes from "./Sidebar.module.scss";

const Sidebar = ({ changeHandler, file, error }) => {
  return (
    <div className={classes["menu-container"]}>
      <button className={classes["menu-button"]} type="button">
        New Artwork
      </button>
      <form>
        <input
          className={classes["menu-button"]}
          type="file"
          onChange={changeHandler}
        />
      </form>
      {error && <div>{error}</div>}
      {file && file instanceof File && <div>{file.name}</div>}
      {/* <button className={classes["menu-button"]} type="button">
        Open File
      </button> */}
    </div>
  );
};

export default Sidebar;
