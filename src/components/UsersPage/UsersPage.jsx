import s from "./UsersPage.module.css";
import User from "./User/User";
import axios from "axios";
import React from "react";

class UsersPage extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  getUserElements = () => {
    console.log(this.props.users);
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
  onPageChanged = (pageNumber) => {
    this.props.changeCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    const pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    const pagesElements = pages.map((pageNumber) => (
      <span
        className={
          pageNumber === this.props.currentPage ? s.selectedPage : s.pageNumber
        }
        onClick={() => this.onPageChanged(pageNumber)}
      >
        {pageNumber}
      </span>
    ));
    return (
      <div className={s.usersPage}>
        <div className={s.buttons}>{pagesElements}</div>
        <header className={s.header}>Users</header>
        {this.getUserElements()}
      </div>
    );
  }
}

export default UsersPage;
