import s from "./UsersPage.module.css";
import User from "./User/User";

const UsersPage = (props) => {
  const usersElements = props.users.map((user) => {
    return (
      <User
        id={user.id}
        name={user.name}
        followed={user.followed ? "Unfollow" : "Follow"}
        followUnfollow={
          user.followed
            ? () => props.unfollow(user.id)
            : () => props.follow(user.id)
        }
        userAvatar={user.photos.small}
      />
    );
  });

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const pagesElements = pages.map((pageNumber) => (
    <span
      className={
        pageNumber === props.currentPage ? s.selectedPage : s.pageNumber
      }
      onClick={() => props.changePage(pageNumber)}
    >
      {pageNumber}
    </span>
  ));
  return (
    <div>
      <div className={s.usersPage}>
        <div className={s.buttons}>{pagesElements}</div>
        <header className={s.header}>Users</header>
        {usersElements}
      </div>
    </div>
  );
};

export default UsersPage;
