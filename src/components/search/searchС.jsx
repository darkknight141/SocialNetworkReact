import React from 'react';
import style from './search.module.css';
import User from './user';
import * as axios from 'axios';

class Users extends React.Component {
    render(){
        return <div className={style.seacrh}>
        <div className='searchitem'>
            <input placeholder='Find users' type="text" className={style.inputsearch}/>
        </div>
        <div className={style.users}>
        <div className={style.useritem}>
            {this.props.users.map(u => <div key={u.id}>
                <img className={style.photo} src={u.img} />
                <div className={style.info}>
                    <p className={style.flname}>{u.fullname}</p>
                    <p className={style.nickname}>{u.nickname}</p>
                </div>
                {u.follower ? <button onClick={()=>{this.props.unfollow(u.id)}} className={style.follow}>Unfollow</button> : <button onClick={()=>{this.props.follow(u.id)}} className={style.follow}>Follow</button>}
            </div>)
            }               
        </div> 
        </div>    
    </div>
    }
}



export default Users;