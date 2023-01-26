const takeEraser = (
  context: CanvasRenderingContext2D,
  offsetX: number,
  offsetY: number,
) => {
  context.lineTo(offsetX, offsetY);
  context.strokeStyle = "#fff";
  context.fillStyle = "#fff";
  context.stroke();
};

export default takeEraser;
