let store = {
  _state: {
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
  },
  getState() {
    return this._state;
  },
  _rerender() {
    console.log("change");
  },
  subscribe(observer) {
    this._rerender = observer;
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        message: this._state.newTextPost,
        user: "Unknown User",
        nickname: "@unknownuser99",
        scr: "https://yt3.ggpht.com/a/AATXAJwiglRIge7WBIk1SHb7xAO8GroQnb2i4XlJ9b-P=s900-c-k-c0x00ffffff-no-rj",
      };

      this._state.posts.push(newPost);
      this._state.newTextPost = "";
      this._rerender(this._state);
    } else if (action.type === "UPDATE-NEW-POST") {
      this._state.newTextPost = action.newPost;
      this._rerender(this._state);
    }
  },
};

window.store = store;

export default store;
