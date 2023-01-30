import React from "react";
import classes from "./Sidebar.module.scss";

interface ISidebarProps {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  createNewCanvas: () => void;
}

const Sidebar = ({ changeHandler, error, createNewCanvas }: ISidebarProps) => {
  return (
    <div className={classes["menu-container"]}>
      <button
        onClick={createNewCanvas}
        className={classes["menu-button"]}
        type="button"
      >
        New Artwork
      </button>
      <label htmlFor="file-input" className={classes["menu-label"]}>
        <input
          className={classes["menu-input"]}
          type="file"
          id="file-input"
          onChange={changeHandler}
        />
        <span>Add file</span>
      </label>

      {error && <div>{error}</div>}
    </div>
  );
};

export default Sidebar;
