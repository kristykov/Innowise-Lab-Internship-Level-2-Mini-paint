import React from "react";
import { IControlsProps } from "../../interfaces/index";
import s from "./Controls.module.scss";

const Controls = ({ onCancelHandler, onSaveHandler }: IControlsProps) => {
  return (
    <div className={s["controls-container"]}>
      <button
        className={`${s["controls-btn"]} ${s["cancel-btn"]}`}
        onClick={onCancelHandler}
        type="button"
      >
        Cancel
      </button>
      <button
        className={`${s["controls-btn"]} ${s["save-btn"]}`}
        onClick={onSaveHandler}
        type="button"
      >
        Save
      </button>
    </div>
  );
};

export default Controls;
