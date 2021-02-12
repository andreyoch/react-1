let store = {
  _state: {
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
  },
  _callSubscriber() {
    console.log("State was changed");
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCount: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(text) {
    this._state.profilePage.newPostText = text;
    this._callSubscriber(this._state);
  },
  addMessage() {
    const message = {
      id: 5,
      message: this._state.dialogsPage.textAreaMessage,
    };
    this._state.dialogsPage.messages.push(message);
    this._state.dialogsPage.textAreaMessage = "";

    this._callSubscriber(this._state);
  },
  updateMessageText(text) {
    this._state.dialogsPage.textAreaMessage = text;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-POST-TEXT") {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
