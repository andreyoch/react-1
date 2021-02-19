import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
} from "../../redux/users-reducer";
import UsersPageAPIComponent from "./UsersPageAPIComponent";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    changeCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
    setTotalUserCount: (totalUserCount) =>
      dispatch(setTotalUsersCountAC(totalUserCount)),
  };
};
const UsersPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPageAPIComponent);
export default UsersPageContainer;
