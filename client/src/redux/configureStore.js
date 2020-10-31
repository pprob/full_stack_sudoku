import { createStore, combineReducers, compose } from "redux";
import appReducer from "../redux/reducers/appReducer";
import infoReducer from "../redux/reducers/infoReducer";
import signupReducer from "../redux/reducers/signupReducer";
import playerScoresReducer from "../redux/reducers/playerScores";

const combinedReducers = () => {
  return combineReducers({
    boardState: appReducer,
    infoState: infoReducer,
    signupState: signupReducer,
    playerScoresState: playerScoresReducer
  });
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(combinedReducers(), enhancers);

export default store;