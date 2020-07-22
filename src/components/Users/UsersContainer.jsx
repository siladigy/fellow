import React from 'react'
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleIsFollowing, getUsers, followUser, unfollowUser } from '../../redux/users-reducer';
import * as axios from 'axios'
import preloader from './../../images/preloader.svg'
import { usersApi } from './../../api/api'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.props.getUsers(this.props.pageSize, this.props.currentPage);
        }
    }

    render() {
        return <>
                {this.props.isFetching ? <div className="preloader"><img src={preloader} /></div> : null }
                <Users usersCount={this.props.usersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    setCurrentPage={this.props.setCurrentPage}
                    currentPage={this.props.currentPage}
                    followUser={this.props.followUser}
                    unfollowUser={this.props.unfollowUser}
                />
                </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
        isFetching : state.usersPage.isFetching, 
        followingInProgrss: state.usersPage.followingInProgrss
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowing,
    getUsers,
    followUser,
    unfollowUser
})(UsersContainer);