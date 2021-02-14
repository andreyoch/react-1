import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogs-reducer";

import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import { connect } from "react-redux";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        const onTextAreaChange = (text) => {
          store.dispatch(updateMessageTextActionCreator(text));
        };

        const sendMessage = () => {
          store.dispatch(addMessageActionCreator());
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
      }}
    </StoreContext.Consumer>
  );
};

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage,
    messages: state.dialogsPage.messages,
    textAreaMessage: state.dialogsPage.textAreaMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessageText: (text) => {
      dispatch(updateMessageTextActionCreator(text));
    },
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

const superDialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
export default DialogsContainer;
