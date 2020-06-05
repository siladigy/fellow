import React from 'react';
import classes from './Dialogs.module.css'
import Dialog from './Dialog/Dialog';
import MessengerContainer from './Messenger/MessengerContainer';

const Dialogs = (props) => {
    
    // let state = props.store.getState()
    let initials = name => name.split(' ')[0].charAt(0) + name.split(' ')[1].charAt(0);

    // let dialogsElement = state.dialogsPage.dialogs.map( user => <Dialog name={user.name} id={user.id} photo={initials(user.name)} />);

    return (
        <div className={classes.wrapper}>
            <div className={classes.dialogs}>
                <div className={classes.block}>
                    {/* {dialogsElement} */}
                </div>
            </div>
            <MessengerContainer />
        </div>
    )
}

export default Dialogs;