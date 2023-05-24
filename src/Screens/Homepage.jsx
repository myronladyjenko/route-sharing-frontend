//this should be the main homepage?
import "../shared-components/styles.css";
import { createUseStyles } from "react-jss";
import homepage from "../images/homepage.png";

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
      <img 
        src={homepage}
        alt="Block Climbing"
        style={{position: "fixed", width: "100%", marginLeft: "auto", marginRight: "auto", top: "0", zIndex: "-100"}}
        />
      {/* <h1 style={{ textAlign: "center" }}>Truely own your own wall.</h1> */}
      <h2 style={{ textAlign: "center", marginTop: "25vw" }}>
        Every bouldering route is do doing the same thing over and over again.
        MOLLY, where is that damn tin can. Climbing is biiing plus plus, like
        biiing biing bing bing bing plus plus.
      </h2>
      <button
        className="action-button"
        style={{ alignContent: "center", display: "block", margin: "auto", marginTop: "5vw"}}
      >
        Browse Climbs
      </button>
      {/* <Lol placeHolder={"Select Something"} optionalCallExpression={options}></Lol> */}
    </div>
  );
}

const styles = createUseStyles({});
