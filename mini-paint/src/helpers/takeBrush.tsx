const takeBrush = (
  context: CanvasRenderingContext2D,
  offsetX: number,
  offsetY: number,
) => {
  context.fillRect(offsetX, offsetY, 1, 1);
  context.lineTo(offsetX, offsetY);
  context.stroke();
};

export default takeBrush;
