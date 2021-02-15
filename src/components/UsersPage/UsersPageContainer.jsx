import { connect } from "react-redux";
import UsersPage from "./UsersPage";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
const UsersPageContainer = connect(mapStateToProps)(UsersPage);
export default UsersPageContainer;
