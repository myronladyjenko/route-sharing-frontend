import { useContext, useState } from "react";
import { useServer } from "../Providers/ServerContext";
import { ClimbPreviewCard } from "../Components/ClimbPreviewCard";

import axios from "axios";

function getClimbs() {
  if (sessionStorage.length === 0) {
    fetchClimb(baseURL);
  }
}

export function Editor() {
  const [holdType, setHoldType] = useState("none");
  const baseURL = useServer();
  if (holdType === "none") {
    console.log(JSON.parse(sessionStorage.getItem("holds")));
    return (
      <div>
        <h1>Select a hold type to use</h1>
        <div>
          {Object.entries(JSON.parse(sessionStorage.getItem("holds"))).map(
            ([holdType, arr], index) => {
              <button key={index} onClick={() => setHoldType(holdType)}>
                {holdType}
              </button>;
            }
          )}
        </div>
      </div>
    );
  }

  function fetchClimb() {
    axios
      .get(`${baseURL}climbConfigs`)
      .then((response) => {
        sessionStorage.setItem("holds", JSON.stringify(response.data));
        console.log(response.data);
        console.log(sessionStorage.getItem("holds"));
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <ClimbPreviewCard
        climbName={"Climb Name"}
        climbDesc={"A lol"}
        climbSetter={"Nathan's balls"}
        climbDiff={"V0/4"}
        publicKey={"192ohfkwhdsaif"}
      />
      <button onClick={fetchClimb}>Get Climbs</button>
    </div>
  );
}
