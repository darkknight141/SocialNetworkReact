import React from 'react';
import s from './MyPost.module.css';
import Post from './Posts/Post';





const MyPosts = (props)=>{
    // console.log(props)
    let postsElements = props.posts.map( p => <Post message={p.message} user={p.user} nickname={p.nickname} src={p.scr}></Post> )

    let newPostElement = React.createRef();

    let addPost= () => {
        props.addPost();
    }

    let updateTextPost = () => {
        let text = newPostElement.current.value
        props.updateNewPostChange(text);        
    }

    return(
    <div>
        <div>
            <div className={s.textareazone}>
                <textarea onChange={updateTextPost} ref={newPostElement} placeholder='Напишите что нового!' className={s.textarea} value={props.newPostText}></textarea>
                <button onClick={addPost} className={s.button}>Add new post</button>
            </div>
        </div>
        <div className='posts'>
            {postsElements}
        </div>
    </div>)
}
export default MyPosts;