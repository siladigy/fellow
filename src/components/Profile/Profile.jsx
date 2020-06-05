import React from 'react';
import PostsContainer from './../Posts/PostsContainer';
import classes from './Profile.module.css';
import profile from './../../images/profile.png'
import background from './../../images/bg.jpg'

const Profile = (props) => {

    return(
        <div className={classes.wrapper}>
        <div className={classes.profile}>
            <div className={classes.block}>
                <div className={classes.image}>
                    <img className={classes.background} src={background} alt=""/>
                    <img className={classes.photo} src={profile} alt=""/>
                </div>
                <div className={classes.info}>
                    <div className={classes.name}>
                        {props.name}
                    </div>
                    <div className={classes.country}>
                        {props.country}
                    </div>
                    <div className={classes.role}>
                        CEO at Fellow
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