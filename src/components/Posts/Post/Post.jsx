import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.text}>
                {props.text}
            </div>
            <div className={classes.likes}>
                {props.likes} Likes
            </div>
        </div>
    )
}

export default Post;