import { createUseStyles } from "react-jss";

export const ClimbEditor = () => {
  const [holdType, setHoldType] = useState("none");
  const [currentHolds, updateCurrentHolds] = useState([]); // [{id: 1, x: 20, y: 20, rotation: 90}
  const [availableHolds, updateAvailableHolds] = useState([]); // [{id: 1, x: 20, y: 20, rotation: 90}

  const updateHoldType = (newHoldType) => {
    setHoldType(newHoldType);
    updateAvailableHolds(
      JSON.parse(sessionStorage.getItem("holds"))[newHoldType]
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
      <div>
        <h1>Current List Types</h1>
      </div>
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
