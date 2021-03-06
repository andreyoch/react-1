import "./App.css";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersPageContainer from "./components/UsersPage/UsersPageContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Route path={"/dialogs"} render={() => <DialogsContainer />} />
          <Route
            path={"/profile/:userId?"}
            render={() => <ProfileContainer />}
          />
          <Route path={"/news"} component={News} />
          <Route path={"/music"} component={Music} />
          <Route path="/find-user/" render={() => <UsersPageContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
