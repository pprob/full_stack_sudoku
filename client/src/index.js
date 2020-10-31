import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/configureStore";
import { Provider } from "react-redux";
import "./index.css";
import AppRouter from "./routers/AppRouter";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import AlertTemplate from "react-alert-template-basic";
import { positions, Provider as AlertProvider } from "react-alert";

const stripePromise = loadStripe(
  `pk_test_51Gr46jKxZD07KMJhc9KCDdlfKT7u2KIlgGq9ASChEsJPldmd1IF9kvIHadV1rkoHLvdCwIXSAi28vK0EIURSWb7I00lHILJ1xz`
);

const alertOptions = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000
}

window.store = store;

ReactDOM.render(
  <Elements stripe={stripePromise}>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <AppRouter />
      </AlertProvider>
    </Provider>
  </Elements>,
  document.getElementById("sudoku")
);
