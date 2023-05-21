import { createUseStyles } from "react-jss";
import { AddedHoldEntry } from "./AddedHoldEntry";
import { useState } from "react";
import { CanvasWall } from "./CanvasWall";

export const ClimbEditor = () => {
  const [holdType, setHoldType] = useState("none");
  const [currentHolds, updateCurrentHolds] = useState([]); // [{id: 1, x: 20, y: 20, rotation: 90}
  const [availableHolds, updateAvailableHolds] = useState([]); // [{id: 1, x: 20, y: 20, rotation: 90}
  const [isSubmitting, setIsSubmitting] = useState(false);
  const classes = useStyles();

  const updateHoldType = (newHoldType) => {
    setHoldType(newHoldType);
    updateAvailableHolds(
      JSON.parse(sessionStorage.getItem("holds"))[newHoldType]
    );
  };

  const addHold = (hold) => {
    updateCurrentHolds([
      ...currentHolds,
      { id: hold, x: 0, y: 0, rotation: 0 },
    ]);
  };

  const updateCurrentHold = (id, stats) => {
    updateCurrentHolds(
      currentHolds.map((hold) => {
        if (hold.id === id) {
          return { ...hold, ...stats };
        }
        return hold;
      })
    );
  };

  const removeHold = (hold) => {
    updateCurrentHolds(
      currentHolds.filter((currentHold) => currentHold.id !== hold.id)
    );
  };

  if (holdType === "none") {
    console.log(JSON.parse(sessionStorage.getItem("holds")));
    return (
      <div>
        <h1>Select a hold type to use</h1>
        <div>
          {Object.entries(JSON.parse(sessionStorage.getItem("holds"))).map(
            ([holdType, arr], index) => {
              return (
                <button key={index} onClick={() => updateHoldType(holdType)}>
                  {holdType}
                </button>
              );
            }
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={classes.sidebar}>
        <h1>Current List Types</h1>
        {currentHolds.map((hold, index) => {
          <AddedHoldEntry
            key={index}
            hold={hold}
            removeHoleHandler={() => removeHold(hold.id)}
            updatingHoldHandler={updateCurrentHold}
            isDisabled={!isSubmitting}
          ></AddedHoldEntry>;
        })}
      </div>
      <CanvasWall holds={holds} isDisabled={!isSubmitting}></CanvasWall>
    </div>
  );
};

const useStyles = createUseStyles({
  canvas: {
    display: "flex",
    width: "calc(700px + 10%)",
    float: "right",
    overflow: "hidden",
  },
  sidebar: {
    display: "flex",
    width: "calc(300px + 10%)",
    float: "left",
    overflow: "hidden",
  },
});
