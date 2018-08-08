import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import ReduxThunk from "redux-thunk";
import "./styles/css/main.css";
import Reducer from "./store/reducers";

const Store = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);

ReactDOM.render(
  <Provider
    store={Store(
      Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
);
