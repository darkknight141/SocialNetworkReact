import React from "react";
import style from './search.module.css'



const User = (props) =>{
    // console.log(props)
    return(
        <div className={style.useritem}>
                <img className={style.photo} src={props.img} />
                <div className={style.info}>
                    <p className={style.flname}>{props.fullname}</p>
                    <p className={style.nickname}>{props.nickname}</p>
                </div>
                {props.follower ? <button onClick={()=>{props.follow(props.id)}} className={style.follow}>Unfollow</button> : <button onClick={()=>{props.unfollow(props.id)}} className={style.follow}>Follow</button>}
            </div>
    )
}

export default User;