import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./redux/redux-store";

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} store={store} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});
