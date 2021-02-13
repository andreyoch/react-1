import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogs-reducer";

import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const state = props.store.getState();

  const onTextAreaChange = (text) => {
    props.store.dispatch(updateMessageTextActionCreator(text));
  };

  const sendMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  return (
    <Dialogs
      updateMessageText={onTextAreaChange}
      sendMessage={sendMessage}
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
      textAreaMessage={state.dialogsPage.textAreaMessage}
    />
  );
};

export default DialogsContainer;
