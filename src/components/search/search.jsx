import React from 'react';
import style from './search.module.css';
import User from './user';
import * as axios from 'axios';

function Search (props){
    
    
    
    // if(props.users.length === 0){
    // axios.get('https:blablabla.com/api/1.0/users')       Работа с запросами на сервер(нужен бэк с какой то API)
    // .then(response => {
    //     props.setUsers(response.data.items)          
    // });
    // }




    // console.log(props)
    // let userElements = props.users.map( u => <User key={u.id} img={u.img} fullname={u.fullname} nickname={u.nickname} follower={u.follower} />)
    
    return(
    <div className={style.seacrh}>
        <div className='searchitem'>
            <input placeholder='Find users' type="text" className={style.inputsearch}/>
        </div>
        <div className={style.users}>
        <div className={style.useritem}>
            {props.users.map(u => <div key={u.id}>
                <img className={style.photo} src={u.img} />
                <div className={style.info}>
                    <p className={style.flname}>{u.fullname}</p>
                    <p className={style.nickname}>{u.nickname}</p>
                </div>
                {u.follower ? <button onClick={()=>{props.unfollow(u.id)}} className={style.follow}>Unfollow</button> : <button onClick={()=>{props.follow(u.id)}} className={style.follow}>Follow</button>}
            </div>)
            }               
        </div> 
        </div>    
    </div>
);
}
export default Search;