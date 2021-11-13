const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';


let initialState = {
    posts: [
        {
          message: 'Hello everybody in social network "Redux"',
          user: "Unknown User",
          nickname: "@unknownuser99",
          scr: "https://yt3.ggpht.com/a/AATXAJwiglRIge7WBIk1SHb7xAO8GroQnb2i4XlJ9b-P=s900-c-k-c0x00ffffff-no-rj",
        },
        {
          message: "I like learn React",
          user: "Unknown User",
          nickname: "@unknownuser99",
          scr: "https://yt3.ggpht.com/a/AATXAJwiglRIge7WBIk1SHb7xAO8GroQnb2i4XlJ9b-P=s900-c-k-c0x00ffffff-no-rj",
        },
        {
          message: "hehe",
          user: "Anonymus",
          nickname: "@anonymus",
          scr: "https://www.wallpaperup.com/uploads/wallpapers/2016/02/22/897962/b1bd5007f0e11c83e1d4e57e4418d747-1400.jpg",
        },
      ],
      newTextPost: "",
};



const profileReducer =(state = initialState, action)=>{
    switch(action.type){
        case ADD_POST:
            let newPost = {
                message: state.newTextPost,
                user: "Unknown User",
                nickname: "@unknownuser99",
                scr: "https://yt3.ggpht.com/a/AATXAJwiglRIge7WBIk1SHb7xAO8GroQnb2i4XlJ9b-P=s900-c-k-c0x00ffffff-no-rj",
              };
        
              state.posts.push(newPost);
              state.newTextPost = "";
              return state;
        case UPDATE_NEW_POST:
            state.newTextPost = action.newPost;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator =() => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostActionCreator =(text) => {
    return {
        type: UPDATE_NEW_POST,
        newPost: text
    }
}
export default profileReducer;