// import '../styles/navbar.css'
import {Link, Outlet} from 'react-router-dom';
function Navbar() {
    return <>
        <nav className='navbar'>
            <Link to="/">Chat</Link>
        
        </nav>
        <Outlet />
    </>
}

export default Navbar;