import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post'

const Posts = (props) => {

    let post = props.profilePage.posts.map( elem => <Post text={elem.text} likes={elem.likes} /> )

    let newPost = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let changePostVal = () => {
        let text = newPost.current.value;
        props.updatePostVal(text)
    }

    return (
        <div className={classes.posts}>
            <div className={classes.input}>
                <textarea ref={newPost} onChange={changePostVal} value={props.profilePage.newPostValue} placeholder="what's on your mind?" />
                <div className={classes.button}>
                    <button onClick={addPost} className="btn">Post</button>
                </div>
            </div>
            <div className={classes.posts_wrap}>
                {post}
            </div>
        </div>
    )
}

export default Posts;