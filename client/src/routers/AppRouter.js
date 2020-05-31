import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../components/App";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Signup from "../components/Signup";
import Login from "../components/Login";
import "../styles/App.css";

const AppRouter = () => {
  // useEffect call auth get route, if successful setState (have to use redux to dispatch to store) auth == true, pass auth prop down to Banner (navbar)
  // axios.get(/api/users/auth, withCredentials: true)


  useEffect(() => {
    console.log('loaded')
  })

  return (
    <BrowserRouter>
      <div className="app">
        <Banner />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
