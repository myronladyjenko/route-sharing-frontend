import { useContext } from "react";
import { useServer } from "../Providers/ServerContext";
import { ClimbPreviewCard } from "../Components/ClimbPreviewCard";

import axios from "axios";

function getClimbs(baseURL) {
  if (sessionStorage.length === 0) {
    fetchClimb(baseURL);
  }
}

function fetchClimb(baseURL) {
  axios
    .get(`${baseURL}climbConfigs`)
    .then((response) => {
      sessionStorage.setItem("holds", JSON.stringify(response.data));
      console.log(response.data);
    })
    .catch((error) => console.log(error));
}
export function Editor() {
  const baseURL = useServer();
  return (
    <div>
      <ClimbPreviewCard
        climbName={"Climb Name"}
        climbDesc={"A lol"}
        climbSetter={"Nathan's balls"}
        climbDiff={"V0/4"}
        publicKey={"192ohfkwhdsaif"}
      />
      <button onClick={() => getClimbs(baseURL)}>Get Climbs</button>
    </div>
  );
}
