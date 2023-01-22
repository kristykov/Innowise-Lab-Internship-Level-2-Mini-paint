import React from "react";
import classes from "./Sidebar.module.scss";
import { ISidebarProps } from "../interfaces/index";

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
      <form>
        <input
          className={classes["menu-button"]}
          type="file"
          name="input"
          onChange={changeHandler}
        />
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Sidebar;
