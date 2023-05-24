//import { Router, NavLink, BrowserRouter } from 'react-router-dom';
import "../shared-components/styles.css";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

export function Navbar() {
  // const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count + 1);
  // }

  // <button onClick={handleClick}>
  //    Clicked {count} times
  // </button>

  return (
    <ul className="navbar">
      <li style={{ float: "left", height: "60px", position: "absolute", left: "0px" }}>
        <NavLink to="/" className="navlink" style={{ bottom: "0px", padding: "0px", height: "100%" }}>
          <img
            src={logo}
            alt="home"
            style={{ height: "100%", padding: "0" }}
          ></img>
        </NavLink>
      </li>
      <li style={{ float: "none" }}>
        <NavLink
          to="/browse"
          className="navlink"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#273438", color: "white" } : {}
          }
        >
          Browse
        </NavLink>
      </li>
      <li style={{ float: "none" }}>
        <NavLink
          to="/create"
          className="navlink"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#273438", color: "white" } : {}
          }
        >
          Create
        </NavLink>
      </li>
      <li style={{ float: "none" }}>
        <NavLink
          to="/collection"
          className="navlink"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#273438", color: "white" } : {}
          }
        >
          My Collection
        </NavLink>
      </li>
    </ul>
  );
}
