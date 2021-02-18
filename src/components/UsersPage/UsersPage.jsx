import s from "./UsersPage.module.css";
import User from "./User/User";
import axios from "axios";

const UsersPage = (props) => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };
  const userElements = props.users.map((user) => (
    <User
      key={user.id}
      name={user.name}
      followed={user.followed ? "Unfollow" : "Follow"}
      followUnfollow={
        user.followed
          ? () => props.unfollow(user.id)
          : () => props.follow(user.id)
      }
      userAvatar={user.photos.small}
    />
  ));
  return (
    <div className={s.usersPage}>
      <button onClick={getUsers}>Get users</button>
      <header className={s.header}>Users</header>
      {userElements}
    </div>
  );
};
export default UsersPage;
