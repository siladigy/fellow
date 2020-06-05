import React from 'react'
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersAC } from '../../redux/users-reducer';
import * as axios from 'axios'

class UsersContainer extends React.Component {

    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsers(response.data.totalCount)
        }); 
    }
    onPageChange(page) {
        debugger
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then(response => {
            this.props.setUsers(response.data.items)
        }); 
    }
    render() {
        return <Users usersCount={this.props.usersCount}
                        pageSize={this.props.pageSize}
                        users={this.props.users}
                        onPageChange={this.onPageChange} 
                        currentPage={this.props.currentPage} />
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsers: (usersCount) => {
            dispatch(setTotalUsersAC(usersCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);