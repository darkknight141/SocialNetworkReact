import React from "react";
import style from './dialogs.module.css'
import DialogItem from "./dialogsItem/dialogsitem";
import MessageItem from "./message/message";



const Dialogs = (props) =>{
    console.log(props)
    let dialogsElements = props.users.map(d => <DialogItem name={d.name} id={d.id} />);
    let messageElements = props.messages.map(m => <MessageItem message={m.message} />);
    let newMessageText = props.newmsgtext;
    let onSendMessageClick = () =>{
        props.onSendMessageClick()
    }
    let onNewMessageChange = (e) =>{
    let text = e.target.value;
    props.onNewMessageChange(text);
    }


    return(
        <div className={style.messages}>
            <div className={style.user}>
                {dialogsElements}
            </div>
            <div className={style.message}>
                <div>{messageElements}</div>
                <div>
                    <div> <textarea value={newMessageText} onChange={onNewMessageChange} placeholder='Введите сообщение'></textarea> </div>
                    <div> <button onClick={onSendMessageClick}>Send</button> </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs