const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_POST_VAL = 'UPDATE-POST-VAL';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {text: 'hello world', likes: 5},
        {text: 'hello ', likes: 51},
    ],
    newPostValue : '',
    profile: null
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

        case SET_USER_PROFILE :
            return {
                ...state,
                profile: action.profile
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
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })



export default profileReducer;