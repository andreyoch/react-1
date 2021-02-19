import axios from "axios";
import React from "react";
import UsersPage from "./UsersPage";

class UsersPageAPIComponent extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

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
    return (
      <UsersPage
        users={this.props.users}
        changePage={this.onPageChanged}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

export default UsersPageAPIComponent;
