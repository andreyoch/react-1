const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

const initialState = {
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
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const message = {
        id: 5,
        message: state.textAreaMessage,
      };
      state.messages.push(message);
      state.textAreaMessage = "";
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.textAreaMessage = action.text;
      return state;

    default:
      return state;
  }
};

export const updateMessageTextActionCreator = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  text: text,
});

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});
export default dialogsReducer;
