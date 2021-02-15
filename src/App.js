import "./App.css";
import Header from "./components/Header/Header.jsx";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersPageContainer from "./components/UsersPage/UsersPageContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Route path={"/dialogs"} render={() => <DialogsContainer />} />
          <Route path={"/profile"} render={() => <Profile />} />
          <Route path={"/news"} component={News} />
          <Route path={"/music"} component={Music} />
          <Route path={"/find-user"} component={UsersPageContainer} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
