import React from 'react';
import classes from './Messenger.module.css'
import Message from './Message/Message';

const Messenger = (props) => {

    let message = props.dialogsPage.messages.map( elem => <Message message={elem.message} /> )

    let newMessage = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let changeMessageVal = () => {
        let text = newMessage.current.value;
        props.updateMessageVal(text)
    }
 
    return (
        <div className={classes.wrapper}>
            <div className={classes.messages}>
                {message}
            </div>
            <div className={classes.input}>
                <textarea ref={newMessage} onChange={changeMessageVal} value={props.dialogsPage.newMessageValue} placeholder='type your message...' />
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    )
}

export default Messenger;

