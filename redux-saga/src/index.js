import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import createSagaMiddleware from "redux-saga";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import catsReducer from "./catState";
import catSaga from "./catSaga";

const root = ReactDOM.createRoot(document.getElementById("root"));

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: combineReducers({
    cats: catsReducer,
  }),
  // Ref: https://redux-saga.js.org/docs/introduction/GettingStarted#mainjs
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware
sagaMiddleware.run(catSaga);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
