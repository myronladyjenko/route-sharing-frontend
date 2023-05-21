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

function postClimb(baseURL) {

  axios.post(`${baseURL}create-climb`, {
    name: "omega epic climb",
    difficulty:"V4/6B+",
    author:"Your mother",
    region:"hell",
    width:500,
    height:1000,
    angle:69,
    hold_theme:"Mesa Biome",
    holds:[{id: 1, x: 20, y: 20, rotation: 90}, {id: 2, x: 69, y: 420, rotation: 0}, {id: 3, x: 42, y: 5, rotation: 34}, {id: 7, x: 236, y: 5, rotation: 123}]
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}

export function Editor() {
  const baseURL = useServer();
  return (
    <div>
      {/* <ClimbPreviewCard
        climbName={"Climb Name"}
        climbDesc={"A lol"}
        climbSetter={"Nathan's balls"}
        climbDiff={"V0/4"}
        publicKey={"192ohfkwhdsaif"}
      />
      <button onClick={() => getClimbs(baseURL)}>Get Climbs</button> */}
      <button onClick={() => postClimb(baseURL)}>Send test climb</button>
    </div>
  );
}



{/*
Name of climb - string
Difficulty    - string
Authour       - string
Region        - string
board width    - int
board height   - int
angle          - int
hold theme     - string

for each hold:
id - int
x - int
y - int
rotation - int
*/}