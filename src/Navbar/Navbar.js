//import { Router, NavLink, BrowserRouter } from 'react-router-dom';
import '../shared-components/styles.css';
import { NavLink } from 'react-router-dom';

export function Navbar() {
    // const [count, setCount] = useState(0);

    // function handleClick() {
    //   setCount(count + 1);
    // }

    // <button onClick={handleClick}>
    //    Clicked {count} times
    // </button>

    return (
        <div className="navbar">
            <div className='navlinks'>
                <NavLink to="/" className='navlink'>
                    <p>Home</p>
                </NavLink>
                <NavLink to="/browse" className='navlink'>
                    <p>Browse</p>
                </NavLink>
                <NavLink to="/create" className='navlink'>
                    <p>Create</p>
                </NavLink>
                <NavLink to="/collection" className='navlink'>
                    <p>My Collection</p>
                </NavLink>
            </div>
        </div>
    );
}