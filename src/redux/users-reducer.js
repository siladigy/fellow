import { usersApi } from './../api/api'


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const IS_FETCHING = 'IS_FETCHING';
const IS_FOLLOWING = 'IS_FOLLOWING';



let initialState = {
    users: [],
    pageSize: 15,
    usersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgrss: []
}  


const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    } else {
                        return user;
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    } else {
                        return user;
                    }
                })
            }
        case SET_USERS :
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE :
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS :
            return {
                ...state, usersCount: action.totalUsers
            }
        case IS_FETCHING :
            return {
                ...state, isFetching: action.isFetching
            }
        case IS_FOLLOWING :
            return {
                ...state, 
                followingInProgrss: action.followingInProgrss
            }
        default: 
            return state;
    }   

}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({type: UNFOLLOW, userId })
export const setUsers = (users) => ({type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers })
export const toggleIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching })
export const toggleIsFollowing = (followingInProgrss) => ({type: IS_FOLLOWING, followingInProgrss })

export const getUsers = (pageSize, currentPage) => {
    
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        usersApi.getUsers(pageSize, currentPage).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.data.items))
            dispatch(setTotalUsers(response.data.totalCount))
        }); 
    }
   
}

export const unfollowUser = (userId) => {
    return (dispatch) => {
        dispatch (toggleIsFollowing(true))
        usersApi.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch (unfollow(userId))
            }
            dispatch (toggleIsFollowing(false))
        }); 
    }
}

export const followUser = (userId) => {
    return (dispatch) => {
        dispatch (toggleIsFollowing(true))
        usersApi.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch (follow(userId))
            }
            dispatch (toggleIsFollowing(false))
        }); 
    }
}

export default usersReducer;