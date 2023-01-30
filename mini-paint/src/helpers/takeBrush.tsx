const takeBrush = (
  context: CanvasRenderingContext2D,
  offsetX: number,
  offsetY: number,
) => {
  context.lineTo(offsetX, offsetY);
  context.lineJoin = "round";
  context.lineCap = "round";
  context.stroke();
};

export default takeBrush;
