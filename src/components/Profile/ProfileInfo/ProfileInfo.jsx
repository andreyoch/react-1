import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          src={
            "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          }
          alt={"image2"}
        />
      </div>
      <div className={s.profileInfo}>
        <img src={props.profile.photos.small} alt="" />
        <div>{props.profile.fullName} </div>
        <div>{props.profile.aboutMe}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
