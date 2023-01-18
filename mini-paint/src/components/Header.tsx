import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["header-wrapper"]}>
        <div className={classes["logo-container"]}>
          <Link to="/">Logo</Link>
        </div>
        <div className={classes["input-container"]}>
          <label htmlFor="search">
            {" "}
            <input id="search" placeholder="Search Files" type="text" />
          </label>
        </div>
        <button type="button">Log Out</button>
      </div>
    </header>
  );
};

export default Header;
