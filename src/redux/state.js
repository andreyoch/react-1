let renderEntireTree = () => {
  console.log("State was changed");
};
const state = {
  profilePage: {
    posts: [
      { id: 1, message: "This is my the newest post", likeCount: 12 },
      { id: 2, message: "I know how to use prop`s!", likeCount: 15 },
      { id: 3, message: "It's my first post", likeCount: 25 },
    ],
    newPostText: "1",
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
    textAreaMessage: "",
  },
  navBar: {
    friendsName: [{ name: "Andrew" }, { name: "Sasha" }, { name: "Vika" }],
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  renderEntireTree(state);
};

export let updateNewPostText = (text) => {
  state.profilePage.newPostText = text;
  renderEntireTree(state);
};

export const addMessage = (state) => {
  const message = {
    id: 5,
    message: state.dialogsPage.textAreaMessage,
  };
  state.dialogsPage.messages.push(message);
  state.dialogsPage.textAreaMessage = "";

  renderEntireTree(state);
};

export const updateMessageText = (text) => {
  state.dialogsPage.textAreaMessage = text;
  renderEntireTree(state);
};

export const subscribe = (observer) => {
  renderEntireTree = observer;
};
export default state;
