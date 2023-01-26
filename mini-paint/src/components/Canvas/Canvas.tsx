import React, { useEffect, useState, MouseEvent } from "react";
import { useSelector } from "react-redux";
import { ICanvasProps } from "../../interfaces";
import { downloadFile } from "../../store/files/filesThunk";
import {
  getToolSelector,
  getColorSelector,
  getShapeSelector,
  getThicknessSelector,
} from "../../store/canvas/canvasSlice";
import takeBrush from "../../helpers/takeBrush";
import takeEraser from "../../helpers/takeEraser";
import drawRect from "../../helpers/drawRect";
import drawCircle from "../../helpers/drawCircle";
import drawTriangle from "../../helpers/drawTringle";
import drawLine from "../../helpers/drawLine";
import drawStar from "../../helpers/drawStar";
import drawHeart from "../../helpers/drawHeart";

import s from "./Canvas.module.scss";

const fillCanvasWithColor = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
) => {
  if (ctx) {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, width, height);
  }
};

const Canvas = ({ canvasRef, file, onSetContext }: ICanvasProps) => {
  const tool = useSelector(getToolSelector);
  const color = useSelector(getColorSelector);
  const shape = useSelector(getShapeSelector);
  const thickness = useSelector(getThicknessSelector);

  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [prevMouseX, setPrevMouseX] = useState(0);
  const [prevMouseY, setPrevMouseY] = useState(0);
  const [snapshot, setSnapshot] = useState<ImageData | null>(null);
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        setCanvasSize({
          width: window.innerWidth * 0.8,
          height: window.innerHeight * 0.8,
        });
        // eslint-disable-next-line no-param-reassign
        canvasRef.current.width = canvasSize.width;
        // eslint-disable-next-line no-param-reassign
        canvasRef.current.height = canvasSize.height;
        fillCanvasWithColor(context, canvasSize.width, canvasSize.height);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      return window.removeEventListener("resize", handleResize);
    };
  }, [canvasRef, context]);

  useEffect(() => {
    if (context) {
      setContext(canvasRef.current.getContext("2d"));
      fillCanvasWithColor(context, canvasSize.width, canvasSize.height);
    }
  }, [canvasSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const initialContext = canvas.getContext(
        "2d",
      ) as CanvasRenderingContext2D;
      setContext(initialContext);
      onSetContext(initialContext);
      if (initialContext) {
        fillCanvasWithColor(initialContext, canvas.width, canvas.height);
      }

      if (file) {
        const setCanvasBg = async () => {
          const img = new Image();
          img.src = await downloadFile(file.imgUrl);
          img.onload = () => {
            initialContext?.drawImage(img, 0, 0, 250, 280);
          };
        };
        setCanvasBg();
      }
    }
  }, []);

  const startDraw = ({ nativeEvent }: MouseEvent) => {
    const { offsetX, offsetY } = nativeEvent;
    setPrevMouseX(offsetX);
    setPrevMouseY(offsetY);

    if (context && canvasRef.current) {
      const currentSnapshot = context?.getImageData(
        0,
        0,
        canvasSize.width,
        canvasSize.height,
      );
      setSnapshot(currentSnapshot);
      context.beginPath();
      context.lineWidth = thickness;
      context.moveTo(offsetX, offsetY);
      if (color) {
        context.strokeStyle = color;
        context.fillStyle = color;
      }
    }
    setDrawing(true);
  };
  const stopDraw = () => {
    if (context) {
      context.closePath();
    }
    setDrawing(false);
  };

  const draw = ({ nativeEvent }: MouseEvent) => {
    if (!drawing) return;
    const { offsetX, offsetY } = nativeEvent;
    if (context) {
      context.putImageData(snapshot, 0, 0);
      if (tool === "brush") {
        takeBrush(context, offsetX, offsetY);
      } else if (tool === "eraser") {
        takeEraser(context, offsetX, offsetY);
      }
      if (shape === "rect") {
        drawRect(context, offsetX, offsetY, prevMouseX, prevMouseY);
      } else if (shape === "circle") {
        drawCircle(context, offsetX, offsetY, prevMouseX, prevMouseY);
      } else if (shape === "triangle") {
        drawTriangle(context, offsetX, offsetY, prevMouseX, prevMouseY);
      } else if (shape === "line") {
        drawLine(context, offsetX, offsetY, prevMouseX, prevMouseY);
      } else if (shape === "star") {
        drawStar(context, offsetX, offsetY, prevMouseX, prevMouseY);
      } else if (shape === "heart") {
        drawHeart(context, offsetX, offsetY, prevMouseX, prevMouseY);
      }
    }
  };

  return (
    <div className={s["canvas-container"]}>
      <canvas
        className={s["canvas-field"]}
        style={{ cursor: tool === "brush" ? "crosshair" : "auto" }}
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        onMouseDown={startDraw}
        onMouseUp={stopDraw}
        onMouseMove={draw}
      />
    </div>
  );
};

export default Canvas;
