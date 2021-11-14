import s from './search.module.css';

function Seacrh (){
    return(
    <div className={s.seacrh}>
        <div className='searchitem'>
            <input placeholder='Find users' type="text" className={s.inputsearch}/>
        </div>
        <div className={s.users}>
            <div className={s.useritem}>
                <img className={s.photo} src="https://images.hdqwalls.com/download/cat-green-eyes-4k-i8-1024x768.jpg" />
                <div className={s.info}>
                    <p className='flname'>Jonny Catsville</p>
                    <p className='nickname'>@jonnycat</p>
                </div>
                <button className={s.follow}>Follow</button>
            </div>
            <div className={s.useritem}>
                <img className={s.photo} src="https://images.hdqwalls.com/download/cat-green-eyes-4k-i8-1024x768.jpg" />
                <div className={s.info}>
                    <p className='flname'>Jonny Catsville</p>
                    <p className='nickname'>@jonnycat</p>
                </div>
                <button className={s.follow}>Follow</button>
            </div>
            <div className={s.useritem}>
                <img className={s.photo} src="https://images.hdqwalls.com/download/cat-green-eyes-4k-i8-1024x768.jpg" />
                <div className={s.info}>
                    <p className='flname'>Jonny Catsville</p>
                    <p className='nickname'>@jonnycat</p>
                </div>
                <button className={s.follow}>Follow</button>
            </div>
        </div>    
    </div>
);
}
export default Seacrh;