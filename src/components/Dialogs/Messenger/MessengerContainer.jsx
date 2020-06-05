import React from 'react';
import {addMessageActionCreator, changeMessageValActionCreator } from './../../../redux/dialogs-reducer'
import Messenger from './Messenger'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageVal: (text) => {
            dispatch(changeMessageValActionCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(Messenger);

export default MessengerContainer;

