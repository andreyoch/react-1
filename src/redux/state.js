import { renderEntireTree } from "../render";

const state = {
  profilePage: {
    posts: [
      { id: 1, message: "This is my the newest post", likeCount: 12 },
      { id: 2, message: "I know how to use prop`s!", likeCount: 15 },
      { id: 3, message: "It's my first post", likeCount: 25 },
    ],
    newPostText: "It Kamasutra!",
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Andrew" },
      { id: 2, name: "Dimych" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Viktor" },
      { id: 6, name: "Valera" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How is your IT-kamasutra" },
      { id: 3, message: "Yooo" },
      { id: 4, message: "Yooo" },
      { id: 4, message: "Yooo" },
    ],
  },
  navBar: {
    friendsName: [{ name: "Andrew" }, { name: "Sasha" }, { name: "Vika" }],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likeCount: 0,
  };

  state.profilePage.posts.push(newPost);
  renderEntireTree(state);
};
export default state;

export let showPostMessage = (text) => {
  state.profilePage.newPostText += text;
};
