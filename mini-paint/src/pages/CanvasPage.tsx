import React from "react";
import { useParams } from "react-router-dom";
import Tools from "../components/Tools";
import Canvas from "../components/Canvas";
import Controls from "../components/Controls";

const CanvasPage = () => {
  const { id } = useParams();
  console.log(id);

  const onCancelHandler = () => {};
  const onSaveHandler = () => {};
  return (
    <>
      <Tools />
      <Canvas />
      <Controls
        onSaveHandler={onSaveHandler}
        onCancelHandler={onCancelHandler}
      />
    </>
  );
};

export default CanvasPage;
