import s from "./UsersPage.module.css";
import User from "./User/User";
import axios from "axios";

const UsersPage = (props) => {
  const usersElements = props.users.map((user) => {
    return (
      <User
        id={user.id}
        name={user.name}
        followed={user.followed ? "Unfollow" : "Follow"}
        followUnfollow={
          user.followed
            ? () => {
                axios
                  .delete(
                    `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "651ca601-00e4-4e8f-833e-6e718562786c",
                      },
                    }
                  )
                  .then((response) => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(user.id);
                    }
                  });
              }
            : () => {
                axios
                  .post(
                    `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                    {},
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "651ca601-00e4-4e8f-833e-6e718562786c",
                      },
                    }
                  )
                  .then((response) => {
                    if (response.data.resultCode === 0) {
                      props.follow(user.id);
                    }
                  });
                props.follow(user.id);
              }
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
