import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <div>
        <nav>
            <NavLink className="headercls" to="/home" >Home</NavLink>
            <NavLink className="headercls" to="/users" >Users</NavLink>
            <NavLink className="headercls" to="/users/add">add user</NavLink>           
        </nav>
        </div>
    );
};

export default Header;