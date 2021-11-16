const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState ={
    users:[
        {id: 1, follower:true, fullname: 'Billy Herrington', nickname:'@herringtongod', img:'https://i1.sndcdn.com/avatars-000078959976-z5w0zo-t500x500.jpg'},
        {id: 2, follower:false, fullname: 'Van Darkholme', nickname:'@dungeonmaster', img: 'https://steamuserimages-a.akamaihd.net/ugc/1625193014921361773/DB8D4F5D7E22F5525A74289DBB6587EC81BF6A73/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'},
        {id: 3, follower:false, fullname: 'Mark Wolf', nickname:'@bossofgum', img: 'https://men4menlive.net/blog/wp-content/uploads/Image/Mark_1new.jpg'},
        {id: 4, follower:false, fullname: 'Danny Lee', nickname:'@kazuya', img: 'https://safebooru.org/images/2672/7e44b8e35df0ff49764f7c68cec653cfff0de576.jpg?2782483'}
    ]
}

const searchReducer =(state = initialState, action)=>{
    switch (action.type){
        case FOLLOW:
        return {
            ...state, users: state.users.map(u=> {
            if (u.id === action.userId){
                return{...u, follower:true};
            }
            return u;
        })
    };
        
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u=> {
                if (u.id === action.userId){
                    return{...u, follower:false};
                }
                return u;
            })
        };

        case SET_USERS:{
            return {...state, users:[...state.users, ...action.users]}
        }
        default:
            return state;
    }
    
}

export default searchReducer;

export const followActionCreator =(userId)=>({type: FOLLOW, userId})
export const unfollowActionCreator =(userId)=>({type: UNFOLLOW, userId})
export const setUsersActionCreator =(users)=>({type: SET_USERS, users})
