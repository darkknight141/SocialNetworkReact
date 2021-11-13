import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";

let store = {
  _state: {
    profilePage: {
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
    messagePage: {
      users: [
        { id: 1, name: "Sasha" },
        { id: 2, name: "Masha" },
        { id: 3, name: "Pasha" },
        { id: 4, name: "Natasha" },
        { id: 5, name: "Kesha" },
      ],
      messages: [
        { message: "Hi" },
        { message: "How are you?" },
        { message: "What are you doing?" },
      ],
      newMessageText: "",
    },
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = messageReducer(this._state.messagePage, action);
    this._rerender(this._state);
  },
};

window.store = store;

export default store;
