import dialogsReducer from './dialogs-reducer'

let store = {
    _state: {
        dialogsPage : {
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
    },
    getState() {
        return this._state
    },
    _callSubscriber(){
        console.log('stage changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        
        this._callSubscriber(this._state);
        
    }
}


export default store;
