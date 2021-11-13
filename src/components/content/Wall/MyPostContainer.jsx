import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPost';





const MyPostsContainer = (props)=>{
    // console.log(props)
    let state = props.store.getState();

    let addPost= () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text)
        props.store.dispatch(action);


    }

    return(<MyPosts updateNewPostChange={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>)
}
export default MyPostsContainer;