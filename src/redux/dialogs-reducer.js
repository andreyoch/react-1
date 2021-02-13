const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

export const dialogsReducer = (state, action) => {
  if (action.type === ADD_MESSAGE) {
    const message = {
      id: 5,
      message: state.textAreaMessage,
    };
    state.messages.push(message);
    state.textAreaMessage = "";
  } else if (action.type === UPDATE_MESSAGE_TEXT) {
    state.textAreaMessage = action.text;
  }
  return state;
};
