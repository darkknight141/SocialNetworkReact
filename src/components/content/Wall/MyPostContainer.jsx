import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPost';
import { connect } from 'react-redux';




let mapStateToProps = (state) =>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newTextPost
    }
}

let mapDispathToProps =(dispatch)=>{
    return{
        addPost:() => {
            dispatch(addPostActionCreator());
        },
        updateNewPostChange:(text)=>{
            dispatch(updateNewPostActionCreator(text))
        },
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispathToProps)(MyPosts);

export default MyPostsContainer;