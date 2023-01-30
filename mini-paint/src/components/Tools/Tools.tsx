import React, { useState } from "react";
import s from "./Tools.module.scss";
import SVGs from "../../assets";
import { IToolsProps } from "../../interfaces/index";

const Tools = ({
  onSelectShapeHandler,
  onSelectToolHandler,
  onSelectDefaultColorHandler,
  onSelectCustomColorHandler,
  onSelectThicknessHandler,
  onClearCanvas,
  thicknesValue,
}: IToolsProps) => {
  const [activeBtn, setActiveBtn] = useState("");

  const onUpdateActiveBtn = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement) {
      const btn = e.target.closest("button");
      if (!btn) {
        setActiveBtn("");
        return;
      }
      switch (btn.dataset.type) {
        case "brush":
          setActiveBtn("brush");
          break;
        case "eraser":
          setActiveBtn("eraser");
          break;
        case "line":
          setActiveBtn("line");
          break;
        case "rect":
          setActiveBtn("rect");
          break;
        case "circle":
          setActiveBtn("circle");
          break;
        case "triangle":
          setActiveBtn("triangle");
          break;
        case "star":
          setActiveBtn("star");
          break;
        case "heart":
          setActiveBtn("heart");
          break;
        default:
          break;
      }
    }
  };
  return (
    <section className={s["tools-section"]}>
      <div
        className={s["tools-wrapper"]}
        onClick={(e) => {
          return onUpdateActiveBtn(e);
        }}
        aria-hidden="true"
      >
        <div className={s["tools-subsection"]}>
          <h3 className={s["tools-subtitle"]}>Shapes</h3>
          <button
            data-type="line"
            onClick={() => {
              return onSelectShapeHandler("line");
            }}
            type="button"
            className={`${s["tools-btn"]} ${
              activeBtn === "line" ? s.active : ""
            }`}
          >
            Line
            <SVGs.Line className={s["tools-btn-icon"]} />
          </button>
          <button
            data-type="rect"
            onClick={() => {
              return onSelectShapeHandler("rect");
            }}
            type="button"
            className={`${s["tools-btn"]} ${
              activeBtn === "rect" ? s.active : ""
            }`}
          >
            Rectangular
            <SVGs.Rectangular className={s["tools-btn-icon"]} />
          </button>
          <button
            data-type="circle"
            onClick={() => {
              return onSelectShapeHandler("circle");
            }}
            type="button"
            className={`${s["tools-btn"]} ${
              activeBtn === "circle" ? s.active : ""
            }`}
          >
            Circle
            <SVGs.Circle className={s["tools-btn-icon"]} />
          </button>
          <button
            data-type="triangle"
            onClick={() => {
              return onSelectShapeHandler("triangle");
            }}
            type="button"
            className={`${s["tools-btn"]} ${
              activeBtn === "triangle" ? s.active : ""
            }`}
          >
            Triangle
            <SVGs.Triangle className={s["tools-btn-icon"]} />
          </button>
          <button
            data-type="star"
            onClick={() => {
              return onSelectShapeHandler("star");
            }}
            type="button"
            className={`${s["tools-btn"]} ${
              activeBtn === "star" ? s.active : ""
            }`}
          >
            Star
            <SVGs.Star className={s["tools-btn-icon"]} />
          </button>
          <button
            data-type="heart"
            onClick={() => {
              return onSelectShapeHandler("heart");
            }}
            type="button"
            className={`${s["tools-btn"]} ${
              activeBtn === "heart" ? s.active : ""
            }`}
          >
            Heart
            <SVGs.Heart className={s["tools-btn-icon"]} />
          </button>
        </div>
        <div className={s["tools-subsection"]}>
          <h3 className={s["tools-subtitle"]}>Options</h3>
          <button
            data-type="brush"
            onClick={() => {
              onSelectToolHandler("brush");
            }}
            type="button"
            className={`${s["tools-btn"]} ${
              activeBtn === "brush" ? s.active : ""
            }`}
          >
            Brush
            <SVGs.Brush className={s["tools-btn-icon"]} />
          </button>
          <button
            data-type="eraser"
            onClick={() => {
              onSelectToolHandler("eraser");
            }}
            type="button"
            className={`${s["tools-btn"]} ${
              activeBtn === "eraser" ? s.active : ""
            }`}
          >
            Eraser
            <SVGs.Eraser className={s["tools-btn-icon"]} />
          </button>
          <label htmlFor="">
            <input
              className={s["tools-input-range"]}
              onChange={onSelectThicknessHandler}
              type="range"
              name="range"
              id="range"
              value={thicknesValue}
              step="1"
              min="1"
              max="100"
            />
          </label>
        </div>
        <div className={s["tools-subsection"]}>
          <h3 className={s["tools-subtitle"]}>Colors</h3>
          <div className={s["colors-wrapper"]}>
            <button
              aria-hidden="true"
              onClick={() => {
                return onSelectDefaultColorHandler("white");
              }}
              type="button"
              className={`${s["tools-btn"]} ${s["color-btn"]} ${s.white}`}
            />
            <button
              aria-hidden="true"
              onClick={() => {
                return onSelectDefaultColorHandler("black");
              }}
              type="button"
              className={`${s["tools-btn"]} ${s["color-btn"]} ${s.black}`}
            />
            <button
              aria-hidden="true"
              onClick={() => {
                return onSelectDefaultColorHandler("blue");
              }}
              type="button"
              className={`${s["tools-btn"]} ${s["color-btn"]} ${s.blue}`}
            />
            <button
              aria-hidden="true"
              onClick={() => {
                return onSelectDefaultColorHandler("red");
              }}
              type="button"
              className={`${s["tools-btn"]} ${s["color-btn"]} ${s.red}`}
            />
            <button
              aria-hidden="true"
              onClick={() => {
                return onSelectDefaultColorHandler("green");
              }}
              type="button"
              className={`${s["tools-btn"]} ${s["color-btn"]} ${s.green}`}
            />
            <input
              type="color"
              onChange={onSelectCustomColorHandler}
              className={`${s["tools-btn"]} ${s["color-btn"]} ${s.mult}`}
            />
          </div>
        </div>
        <button
          onClick={onClearCanvas}
          type="button"
          className={s["clear-btn"]}
        >
          Clear canvas
        </button>
      </div>
    </section>
  );
};

export default Tools;
