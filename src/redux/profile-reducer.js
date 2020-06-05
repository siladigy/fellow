const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_POST_VAL = 'UPDATE-POST-VAL';

let initialState = {
    posts: [
        {text: 'hello world', likes: 5},
        {text: 'hello ', likes: 51},
    ],
    newPostValue : ''
}  


const profileReducer = (state = initialState, action) => {

    switch(action.type) {

        case ADD_NEW_POST : 

            let text = state.newPostValue
 
            return {
                ...state,
                newPostValue: '',
                posts: [{text: text}, ...state.posts]
            }
                
        case UPDATE_POST_VAL :
            return {
                ...state,
                newPostValue: action.text
            }

        default: 
            return state;
    }   

}

export const addPostActionCreator = () => ({ type: ADD_NEW_POST })
export const changePostValActionCreator = (text) => {
    return {
        type: UPDATE_POST_VAL,
        text: text
    }
}


export default profileReducer;