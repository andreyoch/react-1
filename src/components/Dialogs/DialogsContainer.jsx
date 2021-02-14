import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogs-reducer";

import Dialogs from "./Dialogs";
import { connect } from "react-redux";

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
