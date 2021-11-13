import React from "react";
import { updateNewMessageActionCreator, sendMessageActionCreator } from "../../redux/messageReducer";
import Dialogs from "./dialogs";


const DialogsContainer = (props) =>{
    console.log(props)
    let state = props.store.getState();

    let onSendMessageClick = () =>{
        props.store.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (text) =>{
    props.store.dispatch(updateNewMessageActionCreator(text));
    }


    return <Dialogs onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange} users={state.messagePage.users} messages={state.messagePage.messages} newMessageText={state.messagePage.newMessageText} />
}
export default DialogsContainer