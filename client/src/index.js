import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import appReducer from './redux/reducers/appReducer';
import "./index.css";
import AppRouter from './routers/AppRouter';
import infoReducer from './redux/reducers/appReducer';
import signupReducer from './redux/reducers/signupReducer'


const reducer = () => {
  return combineReducers({
    boardState: appReducer,
    infoState: infoReducer,
    signupState: signupReducer
  })
}
const store = createStore(
  reducer()
)
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("sudoku")
);