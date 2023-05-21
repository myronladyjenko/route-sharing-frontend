//this should be the main homepage?
import "../shared-components/styles.css";
import { createUseStyles } from "react-jss";

import Lol from "../Components/HoldSelectionList";
const options = [
  {value: "Peaches", key: "1"},
  {value: "Peaches", key: "2"},
  {value: "Peaches", key: "lol"},
  {value: "Bowser", key: "you're"},
  {value: "Mario", key: "cringe"}
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
