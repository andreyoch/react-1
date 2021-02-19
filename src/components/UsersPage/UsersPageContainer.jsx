import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setIsToggle,
  setTotalUsersCount,
  setUsers,
  unfollow,
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import UsersPage from "./UsersPage";
import Preloader from "../common/preloader/Preloader";

class UsersPageContainer extends React.Component {
  componentDidMount() {
    this.props.setIsToggle(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setIsToggle(false);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setIsToggle(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setIsToggle(false);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : ""}
        <UsersPage
          users={this.props.users}
          changePage={this.onPageChanged}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => dispatch(followAC(userId)),
//     unfollow: (userId) => dispatch(unfollowAC(userId)),
//     setUsers: (users) => dispatch(setUsersAC(users)),
//     changeCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
//     // setTotalUserCount: (totalUserCount) =>
//     //   dispatch(setTotalUsersCountAC(totalUserCount)),
//     setIfFetching: (isFetching) => dispatch(setIsToggleAC(isFetching)),
//   };
// };
export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsToggle,
})(UsersPageContainer);
