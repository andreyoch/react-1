import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import state, {
  addMessage,
  addPost,
  subscribe,
  updateMessageText,
  updateNewPostText,
} from "./redux/state";

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        updateMessageText={updateMessageText}
        addMessage={addMessage}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(state);

subscribe(renderEntireTree);
