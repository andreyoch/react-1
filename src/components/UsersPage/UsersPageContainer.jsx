import { connect } from "react-redux";
import UsersPage from "./UsersPage";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import UsersPageC from "./UsersPageC";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
  };
};
const UsersPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPageC);
export default UsersPageContainer;
