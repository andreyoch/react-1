import Navbar from "./Navbar";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    friendsName: state.navbarPage.friendsName,
  };
};
const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
