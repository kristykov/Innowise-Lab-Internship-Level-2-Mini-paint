const drawTriangle = (
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

export default drawTriangle;
