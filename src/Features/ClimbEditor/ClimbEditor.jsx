import { createUseStyles } from "react-jss";
import { AddedHoldEntry } from "./AddedHoldEntry";
import { useEffect, useState } from "react";
import { useServer } from "../../Providers/ServerContext";
import { CanvasWall } from "./CanvasWall";
import { DropdownSelection } from "../../Components/DropdownAndSelect";

export const ClimbEditor = () => {
  const [holdType, setHoldType] = useState("none");
  const [currentHolds, updateCurrentHolds] = useState([]); // [{id: 1, x: 20, y: 20, rotation: 90}
  const [availableHolds, updateAvailableHolds] = useState([]);
  const [canvasDimensions, setCanvasDimensions] = useState({ x: 100, y: 100 }); // [{id: 1, x: 20, y: 20, rotation: 90}
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [needsUpdate, setNeedsUpdate] = useState(false); // [{id: 1, x: 20, y: 20, rotation: 90}
  const [publicKey, setPublicKey] = useState("192ohfkwhdsaif");

  const classes = useStyles();

  const updateHoldType = (newHoldType) => {
    setHoldType(newHoldType);
    updateAvailableHolds(
      JSON.parse(sessionStorage?.getItem("holds"))[newHoldType]
    );
  };

  const updateHolds = () => {
    setNeedsUpdate(!needsUpdate);
  };

  useEffect(() => {
    console.log([
      availableHolds,
      holdType,
      JSON.parse(sessionStorage?.getItem("holds"))[holdType],
    ]);
  }, [holdType]);

  const updateCanvasDimensions = (newCanvasDimensions) => {
    setCanvasDimensions({ ...newCanvasDimensions, newCanvasDimensions });
  };

  const addHold = (hold) => {
    updateCurrentHolds([
      ...currentHolds,
      { id: hold, x: 0, y: 0, rotation: 0 },
    ]);
    console.log(currentHolds);
  };

  const updateCurrentHold = (id, stats) => {
    updateCurrentHolds(
      currentHolds.map((hold, index) => {
        console.log([index, id]);
        if (index === id) {
          console.log("updating hold");
          return { ...hold, ...stats };
        }
        return hold;
      })
    );
    updateHolds();
  };

  const removeHold = (hold) => {
    updateCurrentHolds(
      currentHolds.filter((currentHold, index) => index !== hold)
    );
  };

  if (holdType === "none") {
    console.log(JSON.parse(sessionStorage.getItem("holds")));
    return (
      <div>
        <h1>Select a hold type to use</h1>
        <div>
          {Object.entries(JSON.parse(sessionStorage.getItem("holds")))?.map(
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
  console.log(availableHolds.length);
  return (
    <div>
      <DropdownSelection
        placeHolder="Choose Stuff"
        optionalCallExpression={availableHolds}
        addHandler={addHold}
      ></DropdownSelection>
      <div className={classes.sidebar}>
        <h1 style={{ display: "block" }}>Current List Types</h1>
        {currentHolds.map((hold, index) => {
          return (
            <AddedHoldEntry
              key={index}
              hold={hold}
              canvasDimensions={canvasDimensions}
              removeHoleHandler={() => removeHold(index)}
              updatingHoldHandler={(stat) => updateCurrentHold(index, stat)}
              isDisabled={!isSubmitting}
            ></AddedHoldEntry>
          );
        })}
      </div>
      <CanvasWall
        addedHolds={currentHolds}
        isDisabled={!isSubmitting}
        style={classes.canvas}
        needsUpdate={needsUpdate}
      ></CanvasWall>
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
    flexDirection: "column",
    width: "calc(300px + 10%)",
    float: "left",
    overflow: "hidden",
  },
});
