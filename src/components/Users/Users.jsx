import React from 'react'
import classes from './Users.module.css'
import image from './../../images/profile.png'

let Users = (props) => {

    let pagesCount = Math.ceil(props.usersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={classes.wrapper}>
        <div className={classes.pagination}>
            {pages.map( page => {
            return <span onClick={ () => {props.onPageChange(page)} } className={props.currentPage === page && classes.selected_page}>{page}</span>
            })}
        </div>
        <div className={classes.users}>
            {props.users.map(user => <div key={user.id} className={classes.user}>
                <div><img src={user.photos.small !== null ? user.photos.small : image}/></div>
                <div className={classes.name}>{user.name}</div>
                <div className={classes.name}>
                    {user.followed 
                    ? <button onClick={ () => {props.unfollow(user.id)}}>unfollow</button> 
                    : <button onClick={ () => {props.follow(user.id)}}>follow</button>}
                </div>
            </div>)}
        </div>
    </div>
    )
}

export default Users;