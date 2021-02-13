import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import * as React from "react";

const Dialogs = (props) => {
  const textAreaId = React.createRef();

  const onTextAreaChange = () => {
    const text = textAreaId.current.value;
    props.updateMessageText(text);
  };

  const sendMessage = () => {
    props.sendMessage();
  };
  const dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  const messageElements = props.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messageElements}
        <textarea
          ref={textAreaId}
          value={props.textAreaMessage}
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
