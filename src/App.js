import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import StoreContext from "./StoreContext";
import { store } from "./redux/redux-store";

const App = (props) => {
  return (
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <div className="app-wrapper">
          <Header />
          <Navbar state={props.state.navbarPage} />
          <div className="app-wrapper-content">
            <Route path={"/dialogs"} render={() => <DialogsContainer />} />
            <Route path={"/profile"} render={() => <Profile />} />
            <Route path={"/news"} component={News} />
            <Route path={"/music"} component={Music} />
          </div>
        </div>
      </StoreContext.Provider>
    </BrowserRouter>
  );
};

export default App;
