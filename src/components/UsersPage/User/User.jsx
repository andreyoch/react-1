import s from "./User.module.css";
import userAvatar from "../../../assets/images/userAvatar.png";
import { NavLink } from "react-router-dom";

const User = (props) => {
  return (
    <div className={s.userBody}>
      <div className={s.userLeftBlock}>
        <NavLink to={`/profile/${props.id}`}>
          <img
            src={props.userAvatar ? props.userAvatar : userAvatar}
            alt="userImage"
          />
        </NavLink>
        <button onClick={props.followUnfollow} className={s.followBtn}>
          {props.followed}
        </button>
      </div>
      <div className={s.userRightBlock}>
        <div className={s.nameDescBlock}>
          <div className={s.userName}>{props.name}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
