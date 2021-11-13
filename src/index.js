import store from "./redux/reduxStore";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"

let rerender = (state) => {
  ReactDOM.render(
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />,
      document.getElementById("root")
  );
};

rerender(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerender(state);
});
