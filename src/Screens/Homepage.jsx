//this should be the main homepage?
import "../shared-components/styles.css";
import { createUseStyles } from "react-jss";

import Lol from "../Components/HoldSelectionList";
const options = [
  {value: "Peaches"},
  {value: "Peaches"},
  {value: "Peaches"},
  {value: "Peaches"},
  {value: "Peaches"},
];

export function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>CLIMBING FOR EVERYONE</h1>
      <button className="action-button">Browse Climbs</button>
      <Lol placeHolder={"Select Something"} optionalCallExpression={options}></Lol>
    </div>
  );
}

const styles = createUseStyles({});
