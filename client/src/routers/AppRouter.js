import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from 'axios'
import App from "../components/App";
import Header from "../components/Banner";
import Footer from "../components/Footer";
import Signup from "../components/Signup";
import Login from "../components/Login";
import ProfilePage from "../components/ProfilePage";
import HelpLayout from '../components/HelpLayout'
import DonatePage from '../components/DonatePage'
import Logout from '../components/Logout'
import Leaderboard from '../components/Leaderboard'
import "../styles/App.css";


const AppRouter = () => {
  // useEffect call auth get route, if successful setState (have to use redux to dispatch to store) auth == true, pass auth prop down to Banner (navbar)
  // axios.get(/api/users/auth, withCredentials: true)
  const [isAuth, setAuthStatus] = useState(false)

  const isLoggedIn = async () => {

    try {
      const result = await axios.get('/api/users/auth', { withCredentials: true})
      if (result.data.isAuth) {
        setAuthStatus(true)
      }
    } catch (e) {
      setAuthStatus(false)
    }
  }
  useEffect(() => {
    isLoggedIn()
  })

  return (
    <BrowserRouter>
      <div className="app">
        <Header loggedIn={isAuth}/>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path='/profile' render={(props) => <ProfilePage {...props} loggedIn={isAuth}/>}/>
          <Route path='/how-to-play' component={HelpLayout}/>
          <Route path='/donate' component={DonatePage}/>
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/logout' component={Logout} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
