import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import appReducer from "./redux/reducers/appReducer";
import "./index.css";
import AppRouter from "./routers/AppRouter";
import infoReducer from "./redux/reducers/infoReducer";
import signupReducer from "./redux/reducers/signupReducer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  `pk_test_51Gr46jKxZD07KMJhc9KCDdlfKT7u2KIlgGq9ASChEsJPldmd1IF9kvIHadV1rkoHLvdCwIXSAi28vK0EIURSWb7I00lHILJ1xz`
);

const reducer = () => {
  return combineReducers({
    boardState: appReducer,
    infoState: infoReducer,
    signupState: signupReducer,
  });
};
const store = createStore(reducer());
window.store = store;

ReactDOM.render(
  <Elements stripe={stripePromise}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </Elements>,
  document.getElementById("sudoku")
);
