const drawLine = (
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

export default drawLine;
