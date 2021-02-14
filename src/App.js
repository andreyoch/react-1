import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      {/*<Navbar state={props.state.navbarPage} />*/}
      <div className="app-wrapper-content">
        <Route path={"/dialogs"} render={() => <DialogsContainer />} />
        <Route path={"/profile"} render={() => <Profile />} />
        <Route path={"/news"} component={News} />
        <Route path={"/music"} component={Music} />
      </div>
    </div>
  );
};

export default App;
