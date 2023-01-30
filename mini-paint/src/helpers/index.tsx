export const takeBrush = (
  context: CanvasRenderingContext2D,
  offsetX: number,
  offsetY: number,
) => {
  context.lineTo(offsetX, offsetY);
  context.lineJoin = "round";
  context.lineCap = "round";
  context.stroke();
};

export const takeEraser = (
  context: CanvasRenderingContext2D,
  offsetX: number,
  offsetY: number,
) => {
  context.lineTo(offsetX, offsetY);
  context.strokeStyle = "#fff";
  context.fillStyle = "#fff";
  context.stroke();
};

export const drawRect = (
  context: CanvasRenderingContext2D,
  offsetX: number,
  offsetY: number,
  prevMouseX: number,
  prevMouseY: number,
) => {
  context.strokeRect(
    offsetX,
    offsetY,
    prevMouseX - offsetX,
    prevMouseY - offsetY,
  );
};

export const drawCircle = (
  context: CanvasRenderingContext2D,
  offsetX: number,
  offsetY: number,
  prevMouseX: number,
  prevMouseY: number,
) => {
  context.beginPath();
  const radius = Math.sqrt(
    (prevMouseX - offsetX) ** 2 + (prevMouseY - offsetY) ** 2,
  );
  context.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
  context.stroke();
};

export const drawLine = (
  context: CanvasRenderingContext2D,
  offsetX: number,
  offsetY: number,
  prevMouseX: number,
  prevMouseY: number,
) => {
  context.beginPath();
  context.moveTo(prevMouseX, prevMouseY);
  context.lineTo(offsetX, offsetY);
  context.stroke();
};

export const drawStar = (
  context: CanvasRenderingContext2D,
  offsetX: number,
  offsetY: number,
  prevMouseX: number,
  prevMouseY: number,
) => {
  context.beginPath();
  const radius = Math.sqrt(
    (prevMouseX - offsetX) ** 2 + (prevMouseY - offsetY) ** 2,
  );
  for (let i = 0; i < 5; i += 1) {
    context.lineTo(
      prevMouseX + radius * Math.cos((i * 2 * Math.PI) / 5),
      prevMouseY + radius * Math.sin((i * 2 * Math.PI) / 5),
    );
    context.lineTo(
      prevMouseX + (radius / 2) * Math.cos(((i * 2 + 1) * Math.PI) / 5),
      prevMouseY + (radius / 2) * Math.sin(((i * 2 + 1) * Math.PI) / 5),
    );
  }
  context.closePath();
  context.stroke();
};

export const drawTriangle = (
  context: CanvasRenderingContext2D,
  offsetX: number,
  offsetY: number,
  prevMouseX: number,
  prevMouseY: number,
) => {
  context.beginPath();
  context.moveTo(prevMouseX, prevMouseY);
  context.lineTo(offsetX, offsetY);
  context.lineTo(prevMouseX * 2 - offsetX, offsetY);
  context.closePath();
  context.stroke();
};

export const drawHeart = (
  context: CanvasRenderingContext2D,
  offsetX: number,
  offsetY: number,
  prevMouseX: number,
  prevMouseY: number,
) => {
  context.beginPath();
  const radius = Math.sqrt(
    (prevMouseX - offsetX) ** 2 + (prevMouseY - offsetY) ** 2,
  );
  context.moveTo(prevMouseX, prevMouseY + radius);
  context.bezierCurveTo(
    prevMouseX + radius / 2,
    prevMouseY + radius / 2,
    prevMouseX + radius / 2,
    prevMouseY - radius / 2,
    prevMouseX,
    prevMouseY,
  );
  context.bezierCurveTo(
    prevMouseX - radius / 2,
    prevMouseY - radius / 2,
    prevMouseX - radius / 2,
    prevMouseY + radius / 2,
    prevMouseX,
    prevMouseY + radius,
  );
  context.closePath();
  context.stroke();
};
