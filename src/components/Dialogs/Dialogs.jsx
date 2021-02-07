import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Andrew" },
    { id: 2, name: "Dimych" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ];

  const messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your IT-kamasutra" },
    { id: 3, message: "Yooo" },
    { id: 4, message: "Yooo" },
    { id: 4, message: "Yooo" },
  ];

  const dialogsElements = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  const messageElements = messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
