import s from "./UsersPage.module.css";
import User from "./User/User";
import axios from "axios";
import React from "react";

class UsersPage extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  getUserElements = () => {
    const usersElements = this.props.users.map((user) => (
      <User
        key={user.id}
        name={user.name}
        followed={user.followed ? "Unfollow" : "Follow"}
        followUnfollow={
          user.followed
            ? () => this.props.unfollow(user.id)
            : () => this.props.follow(user.id)
        }
        userAvatar={user.photos.small}
      />
    ));
    return usersElements;
  };

  render() {
    const pagesCount = this.props.totalUsersCount / this.props.pageSize;
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    const pagesElements = pages.map((pageNumber) => (
      <span
        className={
          pageNumber === this.props.currentPage ? s.selectedPage : s.pageNumber
        }
      >
        {pageNumber}
      </span>
    ));
    return (
      <div className={s.usersPage}>
        <div className={s.buttons}>
          {/*<span>1</span>*/}
          {/*<span className={s.selectedPage}>2</span>*/}
          {/*<span>3</span>*/}
          {/*<span>4</span>*/}
          {/*<span>5</span>*/}
          {pagesElements}
        </div>
        <header className={s.header}>Users</header>
        {this.getUserElements()}
      </div>
    );
  }
}

export default UsersPage;
