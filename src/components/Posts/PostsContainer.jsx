import React from 'react';
import Posts from './Posts'
import { connect } from 'react-redux';
import { addPostActionCreator, changePostValActionCreator } from '../../redux/profile-reducer';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostVal: (text) => {
            dispatch(changePostValActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer