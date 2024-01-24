import '../styles/navbar.css'
import { Link, Outlet } from 'react-router-dom';
function Navbar() {
    return <>
        <nav className='navbar'>
            <div className='main'>
                <Link to="/">Chat</Link>
            </div>
            <span className='name'>Username : Yusef</span>
            <div className="links">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>


        </nav>
        <Outlet />
    </>
}

export default Navbar;