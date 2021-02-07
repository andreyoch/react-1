import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.navBar} />
        <div className="app-wrapper-content">
          <Route
            path={"/dialogs"}
            render={() => <Dialogs state={props.state.dialogsPage} />}
          />
          <Route
            path={"/profile"}
            render={() => <Profile state={props.state.profilePage} />}
          />
          <Route path={"/news"} component={News} />
          <Route path={"/music"} component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
