import React from 'react'
import classes from './Users.module.css'
import image from './../../images/profile.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { usersApi } from './../../api/api'

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
            return <span onClick={ () => {props.setCurrentPage(page)} } className={props.currentPage === page && classes.selected_page}>{page}</span>
            })}
        </div>
        <div className={classes.users}>
            {props.users.map(user => <div key={user.id} className={classes.user}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : image}/>
                    </NavLink>
                </div>
                <div className={classes.name}>{user.name}</div>
                <div className={classes.name}>
                    {user.followed 
                    ? <button disabled={false} onClick={ () => {
                        props.unfollowUser(user.id)
                    }}>unfollow</button> 
                    : <button disabled={false} onClick={ () => {
                        props.followUser(user.id)
                    }}>follow</button>}
                </div>
            </div>)}
        </div>
    </div>
    )
}

export default Users;