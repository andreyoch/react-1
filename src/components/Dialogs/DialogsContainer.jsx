import { sendMessage, updateMessageText } from "../../redux/dialogs-reducer";

import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    textAreaMessage: state.dialogsPage.textAreaMessage,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateMessageText: (text) => {
//       dispatch(updateMessageTextActionCreator(text));
//     },
//     sendMessage: () => {
//       dispatch(addMessageActionCreator());
//     },
//   };
// };

export default connect(mapStateToProps, {
  updateMessageText,
  sendMessage,
})(Dialogs);
