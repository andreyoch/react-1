import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state from "./state";

let dialogsData = [
  { id: 1, name: "Andrew" },
  { id: 2, name: "Dimych" },
  { id: 3, name: "Sveta" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Viktor" },
  { id: 6, name: "Valera" },
];

const messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How is your IT-kamasutra" },
  { id: 3, message: "Yooo" },
  { id: 4, message: "Yooo" },
  { id: 4, message: "Yooo" },
];

const postsData = [
  { id: 1, message: "This is my the newest post", likeCount: 12 },
  { id: 2, message: "I know how to use prop`s!", likeCount: 15 },
  { id: 3, message: "It's my first post", likeCount: 25 },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogsData} messages={messages} posts={postsData} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
