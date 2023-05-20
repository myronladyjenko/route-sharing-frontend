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
        <ul className='navbar'>
            <li style={{float:'left'}}>
                <NavLink to="/" className='navlink' style={({isActive}) => isActive ? {backgroundColor:"#cbcbcb"} : {}}>
                    Home
                </NavLink>
            </li>
            <li style={{float:'right'}}>
            <NavLink to="/browse" className='navlink' style={({isActive}) => isActive ? {backgroundColor:"#cbcbcb"} : {}}>
                Browse
            </NavLink>
            </li>
            <li style={{float:'right'}}>
            <NavLink to="/create" className='navlink' style={({isActive}) => isActive ? {backgroundColor:"#cbcbcb"} : {}}>
                Create
            </NavLink>
            </li>
            <li style={{float:'right'}}>
            <NavLink to="/collection" className='navlink' style={({isActive}) => isActive ? {backgroundColor:"#cbcbcb"} : {}}>
                My Collection
            </NavLink>
            </li>
        </ul>
    );
}
