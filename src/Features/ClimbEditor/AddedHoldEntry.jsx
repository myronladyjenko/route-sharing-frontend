import { useState } from "react";
export const AddedHoldEntry = ({
  key,
  hold,
  removeHoleHandler,
  canvasDimensions,
  updatingHoldHandler,
  isDisabled,
}) => {
  return (
    <div key={key} style={{ display: "inline-flex" }}>
      <input
        type="range"
        min="0"
        max={canvasDimensions.x}
        value={hold.x}
        class="slider"
        id="xRange"
        isDisabled={isDisabled}
        onChange={(e) => {
          updatingHoldHandler({ x: e.target.value });
        }}
      />
      <input
        type="range"
        min="1"
        max={canvasDimensions.y}
        value={hold.y}
        class="slider"
        id="yRange"
        isDisabled={isDisabled}
        onChange={(e) => {
          updatingHoldHandler({ y: e.target.value });
        }}
      />
      <input
        type="range"
        min="0"
        max="360"
        value={hold.rotation}
        class="slider"
        id="rotRange"
        isDisabled={isDisabled}
        onChange={(e) => {
          updatingHoldHandler({ rotation: e.target.value });
        }}
      />
      <button onClick={removeHoleHandler}>Remove</button>
    </div>
  );
};
