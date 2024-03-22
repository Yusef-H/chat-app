import '../styles/navbar.css'
import menuIcon from '../assets/menuIcon.svg';
import { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../context/userContext';
function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const { user } = useContext(UserContext);

    return <>
        <nav className='navbar'>
            <div className="main">
                <Link to="/" onClick={() => setIsNavExpanded(false)}>Chat</Link>
            </div>

            <button className="menu"
                onClick={() => { setIsNavExpanded(!isNavExpanded) }} >
                <img src={menuIcon} alt="Menu" />
            </button>

            <span className={isNavExpanded ? 'name expanded' : 'name'}>Name : {user?.name}</span>
            <div className={isNavExpanded ? 'links expanded' : 'links'}>
                {user == null ? <Link to="/login" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>Login</Link> :
                    <Link to="/login" onClick={() => { setIsNavExpanded(!isNavExpanded) }}> Logout </Link>}
                <Link to="/register" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>Register</Link>
            </div>
        </nav >
        <Outlet />
    </>
}

export default Navbar;