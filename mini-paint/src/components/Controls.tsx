import React from "react";
import { IControlsProps } from "../interfaces/index";

const Controls = ({ onCancelHandler, onSaveHandler }: IControlsProps) => {
  return (
    <div>
      <button onClick={onCancelHandler} type="button">
        Cancel
      </button>
      <button onClick={onSaveHandler} type="button">
        Save
      </button>
    </div>
  );
};

export default Controls;
