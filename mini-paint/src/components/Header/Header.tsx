import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

interface IHeaderProps {
  logoutHandler: () => void;
  searchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({ logoutHandler, searchHandler }: IHeaderProps) => {
  return (
    <header className={classes["header-wrapper"]}>
      <div className={classes["logo-container"]}>
        <Link className={classes["logo-link"]} to="/home">
          ImageDraw
        </Link>
      </div>
      <div className={classes["input-container"]}>
        <label className={classes["input-label"]} htmlFor="search">
          {" "}
          <input
            className={classes["input-field"]}
            onChange={searchHandler}
            id="search"
            placeholder="Search Files"
            type="text"
          />
        </label>
      </div>
      <button
        className={classes["header-btn"]}
        onClick={logoutHandler}
        type="button"
      >
        Log Out
      </button>
    </header>
    // </header>
  );
};

export default Header;
