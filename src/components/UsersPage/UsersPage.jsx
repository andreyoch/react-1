import s from "./UsersPage.module.css";
import User from "./User/User";

const UsersPage = (props) => {
  const userElements = props.users.map((user) => (
    <User
      name={user.name}
      desc={user.desc}
      country={user.country}
      city={user.city}
    />
  ));
  return (
    <div className={s.usersPage}>
      <header className={s.header}>Users</header>
      {userElements}
    </div>
  );
};

export default UsersPage;
