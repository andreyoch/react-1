import s from "./User.module.css";
const User = (props) => {
  return (
    <div className={s.userBody}>
      <div className={s.userLeftBlock}>
        <img
          src="https://img.icons8.com/plasticine/2x/user-male-circle.png"
          alt="userImage"
        />
        <button className={s.followBtn}>Follow</button>
      </div>
      <div className={s.userRightBlock}>
        <div className={s.nameDescBlock}>
          <div className={s.userName}>{props.name}</div>
          <div className={s.userDesc}>{props.desc}</div>
        </div>
        <div className={s.userLocation}>
          <div className={s.country}>{props.country},</div>
          <div className={s.city}>{props.city}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
