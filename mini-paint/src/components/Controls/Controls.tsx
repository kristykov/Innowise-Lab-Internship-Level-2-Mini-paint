import React from "react";
import s from "./Controls.module.scss";

interface IControlsProps {
  onCancelHandler: () => void;
  onSaveHandler: () => void;
}

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
