const drawCircle = (
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

export default drawCircle;
