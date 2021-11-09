import React from 'react';
import s from './MyPost.module.css';
import Post from './Posts/Post';
import { addPostActionCreator } from '../../../redux/state';
import { updateNewPostActionCreator } from '../../../redux/state';





const MyPosts = (props)=>{
    let postsElements = props.posts.map( p => <Post message={p.message} user={p.user} nickname={p.nickname} src={p.scr}></Post> )

    let newPostElement = React.createRef();

    let addPost= () => {
        props.dispatch(addPostActionCreator());
    }

    let updateTextPost = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostActionCreator(text));


    }

    return(
    <div>
        <div>
            <div className={s.textareazone}>
                <textarea onChange={updateTextPost} ref={newPostElement} placeholder='Напишите что нового!' className={s.textarea} value={props.newTextPost}></textarea>
                <button onClick={addPost} className={s.button}>Add new post</button>
            </div>
        </div>
        <div className='posts'>
            {postsElements}
        </div>
    </div>)
}
export default MyPosts;