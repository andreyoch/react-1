import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import * as React from "react";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/state";

const Dialogs = (props) => {
  const textAreaId = React.createRef();

  const onTextAreaChange = () => {
    const text = textAreaId.current.value;
    props.dispatch(updateMessageTextActionCreator(text));
  };

  const sendMessage = () => {
    props.dispatch(addMessageActionCreator());
  };
  const dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  const messageElements = props.state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messageElements}
        <textarea
          ref={textAreaId}
          value={props.state.textAreaMessage}
          onChange={onTextAreaChange}
        />
        <div>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
