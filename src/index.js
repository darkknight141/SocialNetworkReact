import state, { subscribe } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, updateNewPost } from "./redux/state";

let rerender = (state) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} updateText={updateNewPost} />,
    document.getElementById("root")
  );
};

rerender(state);
subscribe(rerender);
