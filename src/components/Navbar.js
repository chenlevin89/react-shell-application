import {
    NavLink
} from "react-router-dom";
import logo from '../assets/module-federation.png';
import start from '../assets/star.png'
import React from 'react';

export default function Navbar() {
    return (
        <ul>
            <li>
                <NavLink exact to="/" activeClassName="selected" >Home</NavLink>
            </li>
            <li>
                <NavLink to="/activities" activeClassName="selected">Activities</NavLink>
            </li>
            <li>
                <NavLink to="/operations" activeClassName="selected">Operations</NavLink>
                <img src={start} height="15px" width="auto" className="star-icon" />
            </li>
            <li>
                <NavLink to="/contact" activeClassName="selected">Contact Us</NavLink>
                <img src={start} height="15px" width="auto" className="star-icon" />
            </li>
            <img className="logo" src={logo} height="50px" width="auto" />
            <span>V{React.version}</span>
        </ul>
    )
}