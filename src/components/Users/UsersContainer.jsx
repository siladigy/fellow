import React from 'react'
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsers, toggleIsFetching } from '../../redux/users-reducer';
import * as axios from 'axios'
import preloader from './../../images/preloader.svg'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
            this.props.setTotalUsers(response.data.totalCount)
        }); 
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.props.toggleIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
                this.props.toggleIsFetching(false);    
                this.props.setUsers(response.data.items)
            }); 
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
        isFetching : state.usersPage.isFetching 
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsers,
    toggleIsFetching
})(UsersContainer);