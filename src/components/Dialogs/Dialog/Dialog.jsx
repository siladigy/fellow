import React from 'react';
import classes from './Dialog.module.css'
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return (
        <NavLink to={'/dialogs/' + props.id} className={classes.dialog}>
            <div className={classes.photo}>
                {props.photo}
            </div>
            <div className={classes.name}>
                {props.name}
            </div>
        </NavLink>
    )
}

export default Dialog;