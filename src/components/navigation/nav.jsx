import { NavLink } from 'react-router-dom';
import style from'./nav.module.css';

function Nav(){
  let activeStyle={
    color : "rgba(0,212,255,1)"
  };
    return(
    <nav className={style.nav}>
    <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/150px-React-icon.svg.png"></img>
    </div>
    <div><img className={style.icon} src="https://image.flaticon.com/icons/png/512/1946/1946433.png" /><NavLink to='/profile' style={({ isActive }) => isActive ? activeStyle : undefined} >Profile</NavLink></div>
    <div><img className={style.icon} src="https://image.flaticon.com/icons/png/512/4425/4425261.png"/><NavLink to='/news' style={({ isActive }) => isActive ? activeStyle : undefined} >News</NavLink></div>
    <div><img className={style.icon} src="https://image.flaticon.com/icons/png/512/1468/1468737.png"/><NavLink to='/music' style={({ isActive }) => isActive ? activeStyle : undefined} >Music</NavLink></div>
    <div><img className={style.icon} src="https://image.flaticon.com/icons/png/512/4727/4727590.png"/><NavLink to='/messages' style={({ isActive }) => isActive ? activeStyle : undefined} >Messages</NavLink></div>
    <div><img className={style.icon} src="https://image.flaticon.com/icons/png/512/3820/3820243.png"/><NavLink to='/settings' style={({ isActive }) => isActive ? activeStyle : undefined} >Settings</NavLink></div>
  </nav>
  );
}
export default Nav;




