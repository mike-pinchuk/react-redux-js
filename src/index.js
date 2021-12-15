import React from "react";
import { render } from "react-dom";
import { compose, createStore, applyMiddleware } from "redux";
import App from "./App";
import { rootReducer } from "./redux/rootReducer";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { forbiddenWordsMiddleware } from "./redux/middleware";

const composeVariabel =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, forbiddenWordsMiddleware), composeVariabel)
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
