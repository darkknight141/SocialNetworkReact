import s from './search.module.css';
import Search from './search';
import { connect } from 'react-redux';
import { followActionCreator, setUsersActionCreator } from '../../redux/searchReducer';
import { unfollowActionCreator } from './../../redux/searchReducer';
import User from './user';
import Users from './searchС';

let mapStateToProps =(state) =>{
    return{ 
        users: state.searchPage.users
    }
}

let mapDispatchToProps =(dispatch)=>{
    return {
    follow: (userId)=>{
        dispatch(followActionCreator(userId))
    },
    unfollow: (userId)=>{
        dispatch(unfollowActionCreator(userId))
    },
    setUsers: (users) =>{
        dispatch(setUsersActionCreator(users))
    }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Users);