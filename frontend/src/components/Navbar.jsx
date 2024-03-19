import '../styles/navbar.css'
import menuIcon from '../assets/menuIcon.svg';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return <>
        <nav className='navbar'>
            <div className="main">
                <Link to="/" onClick={() => setIsNavExpanded(false)}>Chat</Link>
            </div>

            <button className="menu"
                onClick={() => { setIsNavExpanded(!isNavExpanded) }} >
                <img src={menuIcon} alt="Menu" />
            </button>

            <span className={isNavExpanded ? 'name expanded' : 'name'}>Name : Yusef</span>
            <div className={isNavExpanded ? 'links expanded' : 'links'}>
                <Link to="/login" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>Login</Link>
                <Link to="/register" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>Register</Link>
            </div>
        </nav >
        <Outlet />
    </>
}

export default Navbar;