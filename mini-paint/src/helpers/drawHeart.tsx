const drawHeart = (
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

export default drawHeart;
