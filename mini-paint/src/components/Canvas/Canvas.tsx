import React, { useEffect, useState, MouseEvent } from "react";
import { useSelector } from "react-redux";
import { downloadFile } from "../../store/files/filesThunk";
import {
  getToolSelector,
  getColorSelector,
  getShapeSelector,
  getThicknessSelector,
} from "../../store/canvas/canvasSlice";
import {
  takeBrush,
  takeEraser,
  drawRect,
  drawCircle,
  drawTriangle,
  drawLine,
  drawStar,
  drawHeart,
} from "../../helpers/index";
import { IFile } from "../../interfaces";

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

interface ICanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  file: IFile | undefined;
  onSetContext: (context: CanvasRenderingContext2D) => void;
}

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
        // fillCanvasWithColor(context, canvasSize.width, canvasSize.height);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      return window.removeEventListener("resize", handleResize);
    };
  }, [canvasRef, context]);

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
            initialContext?.drawImage(img, 0, 0, canvas.width, canvas.height);
          };
        };
        setCanvasBg();
      }
    }
  }, [canvasRef, canvasSize]);

  const startDraw = ({ nativeEvent }: MouseEvent) => {
    const canvas = canvasRef.current;
    const offsetX = (nativeEvent.offsetX * canvas.width) / canvas.clientWidth;
    const offsetY = (nativeEvent.offsetY * canvas.height) / canvas.clientHeight;
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
    const canvas = canvasRef.current;
    const offsetX = (nativeEvent.offsetX * canvas.width) / canvas.clientWidth;
    const offsetY = (nativeEvent.offsetY * canvas.height) / canvas.clientHeight;

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
