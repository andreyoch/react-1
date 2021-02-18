import s from "./UsersPage.module.css";
import User from "./User/User";
import axios from "axios";
import React from "react";

class UsersPageC extends React.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  };

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
    return (
      <div className={s.usersPage}>
        <button onClick={this.getUsers}>Get users</button>
        <header className={s.header}>Users</header>
        {this.getUserElements()}
      </div>
    );
  }
}

export default UsersPageC;
