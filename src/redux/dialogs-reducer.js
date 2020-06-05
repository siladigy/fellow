const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_MESSAGE_VAL = 'UPDATE-MESSAGE-VAL';

let initialState = {
    dialogs : [
        {id: 1, name: 'George Siladi'},
        {id: 2, name: 'Diana Siladi'},
        {id: 3, name: 'Karina Almashiy'},
        {id: 4, name: 'Vasya Almashiy'},
        {id: 5, name: 'Tanya Siladi'},
        {id: 6, name: 'Stepan Siladi'}
    ],
    messages : [
        {message : 'hello world'},
        {message : 'hello how are you?'}
    ],
    newMessageValue : ''
}  


const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {

        case ADD_NEW_MESSAGE : 

            let text = state.newMessageValue
            
            return {
                ...state,
                newMessageValue: '',
                messages: [...state.messages, {message: text}]
            }

        case UPDATE_MESSAGE_VAL :

            return {
                ...state,
                newMessageValue: action.text
            }

        default: 
            return state;
    }   

}

export const addMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE })
export const changeMessageValActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_VAL,
        text: text
    }
}


export default dialogsReducer;