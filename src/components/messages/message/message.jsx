import React from "react";
import style from './../dialogs.module.css'


const MessageItem =(props)=>{
    return(
        <div className={style.messageitem}>{props.message}</div>
    )
    
}
export default MessageItem