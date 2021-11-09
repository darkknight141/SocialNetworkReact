let rerender = () => {
  console.log("change");
};

let state = {
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

window.state = state;
export const addPost = () => {
  let newPost = {
    message: state.newTextPost,
    user: "Unknown User",
    nickname: "@unknownuser99",
    scr: "https://yt3.ggpht.com/a/AATXAJwiglRIge7WBIk1SHb7xAO8GroQnb2i4XlJ9b-P=s900-c-k-c0x00ffffff-no-rj",
  };

  state.posts.push(newPost);
  rerender(state);
};

export const updateNewPost = (newPost) => {
  state.newTextPost = newPost;
  rerender(state);
};

export const subscribe = (observer) => {
  rerender = observer;
};

export default state;
