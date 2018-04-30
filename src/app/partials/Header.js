import React from 'react';
import { Link } from 'react-router-dom';
import { authenticationService } from "../../services/LogInService";

const Header = () => {
 
    
    return (
        <nav className='teal darken-3'>

            <div className="nav-wrapper container ">
                <Link to="/" className="brand-logo left">BIT Book</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/">Feed</Link></li>
                    <li><Link to="/people">People</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/login" onClick={authenticationService.logout} className="logout">Logout</Link></li>
                </ul>
                
            </div>
        </nav >
    )
}
export { Header }
