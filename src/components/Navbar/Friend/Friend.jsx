import s from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div className={s.friendItemRow}>
      <div className={s.friendImg}></div>
      <div className={s.friendName}>{props.name}</div>
    </div>
  );
};

export default Friend;
