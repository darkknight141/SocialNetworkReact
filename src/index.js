import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let rerender = (state) => {
  ReactDOM.render(
    <App state={state} addPost={store.addPost.bind(store)} updateText={store.updateNewPost.bind(store)} />,
    document.getElementById("root")
  );
};

rerender(store.getState());
store.subscribe(rerender);
