export const AddedHoldEntry = (
  key,
  hold,
  removeHoleHandler,
  canvasDimensions,
  updatingHoldHandler,
  isDisabled
) => {
  return (
    <div key={key}>
      <input
        type="range"
        min="0"
        max={canvasDimensions.x}
        value={hold.x}
        class="slider"
        id="xRange"
        isDisabled={isDisabled}
        onChange={(e) => {
          updatingHoldHandler(hold.id, { x: e.target.value });
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
          updatingHoldHandler(hold.id, { y: e.target.value });
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
          updatingHoldHandler(hold.id, { rotation: e.target.value });
        }}
      />
      <button onClick={removeHoleHandler}>Remove</button>
    </div>
  );
};
