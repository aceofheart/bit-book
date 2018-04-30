import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderSide = (props) => {
    return (
        <div>
        <ul id="slide-out" class="sidenav">
       
        <li><Link to="/">Feed</Link></li>
        <li><Link to="/people">People</Link></li>
        <li><Link to="/profile">Profile</Link></li>
     
      </ul>
                <a href="#/" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                </div>
    )
}
   