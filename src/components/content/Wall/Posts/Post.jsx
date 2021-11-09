import React from 'react';
import s from './Post.module.css';

const Post = (props)=>{
    return(
            <div className={s.item}>
                <img className={s.photo} src={props.src}/>
                <div className={s.info}>
                    <span className={s.name}>{props.user} </span>
                    <span className={s.nickname}> {props.nickname}</span>
                </div>
                <div className={s.message}>{props.message}</div>
            </div>)
}
export default Post;