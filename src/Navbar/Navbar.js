//import { Router, NavLink, BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import '../shared-components/styles.css';


export function Navbar() {
    // const [count, setCount] = useState(0);

    // function handleClick() {
    //   setCount(count + 1);
    // }

    // <button onClick={handleClick}>
    //    Clicked {count} times
    // </button>

    return (
        <div>
            <a className='navlink'>Home</a>
            <a className='navlink'>Browse</a>
            <a className='navlink'>Create</a>
            <a className='navlink'>My Collection</a>
        </div>
    );
}