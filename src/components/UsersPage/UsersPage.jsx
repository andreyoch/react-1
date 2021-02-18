import s from "./UsersPage.module.css";
import User from "./User/User";

const UsersPage = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        name: "Dmitry K",
        country: "Belarus",
        city: "Minsk",
        desc: "I am looking for job now",
        followed: true,
      },
      {
        id: 2,
        name: "Svetlana D",
        country: "Belarus",
        city: "Minsk",
        desc: "I am so pretty",
        followed: true,
      },
      {
        id: 3,
        name: "Sergei S",
        country: "Ukraine",
        city: "Kiev",
        desc: "I like football!",
        followed: false,
      },
      {
        id: 4,
        name: "Andrew T",
        country: "USA",
        city: "Philadelphia",
        desc: "I am free to help you to create good video production",
        followed: false,
      },
    ]);
  }
  const userElements = props.users.map((user) => (
    <User
      key={user.id}
      name={user.name}
      desc={user.desc}
      country={user.country}
      city={user.city}
      followed={user.followed ? "Unfollow" : "Follow"}
      followUnfollow={
        user.followed
          ? () => props.unfollow(user.id)
          : () => props.follow(user.id)
      }
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
