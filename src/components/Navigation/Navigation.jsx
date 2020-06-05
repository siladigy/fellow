import React from 'react';
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.links}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
                <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
                <a activeclassname={classes.active}>Feed</a>
                <a activeclassname={classes.active}>Settings</a>
            </div>
        </div>
    )
}

export default Navigation;