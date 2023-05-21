//this should be the main homepage?
import "../shared-components/styles.css";
import { createUseStyles } from "react-jss";

// import Lol from "../Components/HoldSelectionList";
// const options = [
//   {value: "Peaches", key: "1"},
//   {value: "Peaches", key: "2"},
//   {value: "Peaches", key: "lol"},
//   {value: "Bowser", key: "you're"},
//   {value: "Mario", key: "cringe"}
// ];

export function Home() {
  return (
    <div style={{ margin: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Truely own your own wall.</h1>
      <h2 style={{ textAlign: "center" }}>
        Every bouldering route is do doing the same thing over and over again.
        MOLLY, where is that damn tin can. Climbing is biiing plus plus, like
        biiing biing bing bing bing plus plus.
      </h2>
      <button
        className="action-button"
        style={{ alignContent: "center", display: "block", margin: "auto" }}
      >
        Browse Climbs
      </button>
      {/* <Lol placeHolder={"Select Something"} optionalCallExpression={options}></Lol> */}
    </div>
  );
}

const styles = createUseStyles({});
