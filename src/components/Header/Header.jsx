import React from 'react';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
        <div className={classes.header}>
           fellow
        </div>
        <div className={classes.login}>
        {props.isAuth ? <div>{props.login}</div> : <NavLink to={'/login'}>Login</NavLink> }
        </div>
        </div>
    )
}

export default Header;