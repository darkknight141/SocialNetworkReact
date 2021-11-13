import React from "react";
import { updateNewMessageActionCreator, sendMessageActionCreator } from "../../redux/messageReducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        users: state.messagePage.users,
        messages: state.messagePage.messages,
        newmsgtext: state.messagePage.newMessageText
    }
}
let mapDispatchToProps =(dispatch) =>{
    return{
        onSendMessageClick: ()=>{
            dispatch(sendMessageActionCreator());
        },
        onNewMessageChange: (text) => {
            dispatch(updateNewMessageActionCreator(text)); 
        } 
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer