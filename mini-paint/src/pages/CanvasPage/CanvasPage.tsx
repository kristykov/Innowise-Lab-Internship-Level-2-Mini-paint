import React, { ChangeEvent, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import Canvas from "../../components/Canvas/Canvas";
import Controls from "../../components/Controls/Controls";
import Tools from "../../components/Tools/Tools";
import { dataURLtoFile } from "../../helpers/converters";
import s from "./CanvasPage.module.scss";
import { useAppDispatch } from "../../hooks/hooks";
import { uploadFile } from "../../store/files/filesThunk";
import { getFileById, isLoading } from "../../store/files/filesSlice";
import {
  changeColor,
  changeShape,
  changeThickness,
  changeTool,
} from "../../store/canvas/canvasSlice";

const CanvasPage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const file = useSelector(getFileById(id as string));
  const loading = useSelector(isLoading);

  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [currentThickness, setCurrentThickness] = useState("5");

  const onCancelHandler = () => {
    navigate("/home");
  };
  const onSaveHandler = async () => {
    const canvas = canvasRef.current;
    try {
      const dataUrl = canvas.toDataURL();
      const newFileName = `image${Date.now()}.png`;
      const newFile = dataURLtoFile(dataUrl, newFileName);
      await dispatch(uploadFile(newFile)).unwrap();
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  const selectShapeHandler = (shape: string) => {
    switch (shape) {
      case "line":
        dispatch(changeShape("line"));
        break;
      case "rect":
        dispatch(changeShape("rect"));
        break;
      case "circle":
        dispatch(changeShape("circle"));
        break;
      case "triangle":
        dispatch(changeShape("triangle"));
        break;
      case "star":
        dispatch(changeShape("star"));
        break;
      case "heart":
        dispatch(changeShape("heart"));
        break;
      default:
        break;
    }
  };
  const selectToolHandler = (tool: string) => {
    if (tool === "brush") {
      dispatch(changeTool(tool));
    } else if (tool === "eraser") {
      dispatch(changeTool(tool));
    }
  };
  const selectDefaultColorHandler = (color: string) => {
    switch (color) {
      case "white":
        dispatch(changeColor("#ffffff"));
        break;
      case "black":
        dispatch(changeColor("#000000"));
        break;
      case "blue":
        dispatch(changeColor("#3a6df0"));
        break;
      case "red":
        dispatch(changeColor("#e02020"));
        break;
      case "green":
        dispatch(changeColor("#6dd400"));
        break;
      default:
        dispatch(changeColor("000000"));
    }
  };
  const selectCustomColorHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value as string;
    dispatch(changeColor(color));
  };
  const selectThicknessHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const thickness = e.target.value as string;
    setCurrentThickness(thickness);
    dispatch(changeThickness(thickness));
  };

  const onSetContext = (currentContext: CanvasRenderingContext2D | null) => {
    setContext(currentContext);
  };

  const clearCanvas = () => {
    if (context) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      context.fillStyle = "#fff";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }
  };

  return (
    <>
      <div className={s["canvas-container"]}>
        <Tools
          onSelectDefaultColorHandler={selectDefaultColorHandler}
          onSelectCustomColorHandler={selectCustomColorHandler}
          onSelectShapeHandler={selectShapeHandler}
          onSelectThicknessHandler={selectThicknessHandler}
          onSelectToolHandler={selectToolHandler}
          onClearCanvas={clearCanvas}
          thicknesValue={currentThickness}
        />
        <Canvas onSetContext={onSetContext} canvasRef={canvasRef} file={file} />
      </div>
      {loading && (
        <ClipLoader
          color="#fff"
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      <Controls
        onSaveHandler={onSaveHandler}
        onCancelHandler={onCancelHandler}
      />
    </>
  );
};

export default CanvasPage;
