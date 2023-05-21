//this should be the main homepage?
import "../shared-components/styles.css";
import { createUseStyles } from "react-jss";

import Lol from "../Components/HoldSelectionList";

export function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>CLIMBING FOR EVERYONE</h1>
      <button className="action-button">Browse Climbs</button>
      <Lol placeHolder={"Select Something"}></Lol>
    </div>
  );
}

const styles = createUseStyles({});
