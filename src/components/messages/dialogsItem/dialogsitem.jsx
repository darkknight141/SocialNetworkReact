import React from "react";
import { NavLink } from "react-router-dom";
import style from './../dialogs.module.css'

const DialogItem = (props) =>{
    let path = '/messages/' + props.id;

    return(
        <div className={style.useritem}>
            <NavLink className={style.item} to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem