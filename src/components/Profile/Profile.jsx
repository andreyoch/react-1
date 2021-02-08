import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        addPosts={props.addPosts}
        newTextPost={props.profilePage.newPostText}
        showTextMessage={}
      />
    </div>
  );
};

export default Profile;
