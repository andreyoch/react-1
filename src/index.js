import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

let renderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider value={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree();

store.subscribe(() => {
  renderEntireTree();
});
