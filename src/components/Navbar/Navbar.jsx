import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friend from "./Friend/Friend";

const Navbar = (props) => {
  const friendsItem = props.friendsName.map((f) => <Friend name={f.name} />);
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>
          News`
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={"/find-user"} activeClassName={s.activeLink}>
          Find User
        </NavLink>
      </div>
      <div className={s.friendsBlock}>
        Friends
        <div className={s.friendsBlockRow}>{friendsItem}</div>
      </div>
    </nav>
  );
};

export default Navbar;
