const drawRect = (
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

export default drawRect;
