import React from 'react';
import PostsContainer from './../Posts/PostsContainer';
import classes from './Profile.module.css';
import profile from './../../images/profile.png'
import background from './../../images/bg.jpg'

const Profile = (props) => {
    debugger
    if(!props.profile) {
        return <></>
    }

    return(
        <div className={classes.wrapper}>
        <div className={classes.profile}>
            <div className={classes.block}>
                <div className={classes.image}>
                    <img className={classes.background} src={background} alt=""/>
                    <img className={classes.photo} src={props.profile.photos.small !== null ? props.profile.photos.small : profile} alt=""/>
                </div>
                <div className={classes.info}>
                    <div className={classes.name}>
                        {props.profile.fullName}
                    </div>
                    <div className={classes.country}>
                        {props.country}
                    </div>
                    <div className={classes.role}>
                        {props.profile.aboutMe}
                    </div>
                    <div className={classes.btn}>
                        <button className="btn">
                            Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <PostsContainer />
        </div>
        
    )
}

export default Profile;