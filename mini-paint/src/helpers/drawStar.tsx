const drawStar = (
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

export default drawStar;
