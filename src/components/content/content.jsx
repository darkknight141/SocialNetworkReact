import s from './content.module.css'
import MyPostsContainer from './Wall/MyPostContainer';

function Content(props){
    // console.log(props)
    return(
    <div className={s.content}>
    <div className={s.backgrprof}>
    <img src='https://lifeo.ru/wp-content/uploads/oboi-na-rabochiy-stol-osen-5.jpg'></img>
    </div>
    <div className={s.profile}>
        <img className={s.photo} src='https://yt3.ggpht.com/a/AATXAJwiglRIge7WBIk1SHb7xAO8GroQnb2i4XlJ9b-P=s900-c-k-c0x00ffffff-no-rj'></img>
        <div className={s.description}>
            <p className={s.name}>Unknown User</p>
            <p className={s.nickname}>@unknownuser99</p>
        </div>
    </div>
    <MyPostsContainer/>
  </div>
  );
}
export default Content;