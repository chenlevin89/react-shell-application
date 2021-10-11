import {
    NavLink
} from "react-router-dom";
import logo from '../assets/module-federation.png';
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
            </li>
            <li>
                <NavLink to="/contact" activeClassName="selected">Contact Us</NavLink>
            </li>
            <img src={logo} height="50px" width="auto" />
            <span>V{React.version}</span>
        </ul>
    )
}