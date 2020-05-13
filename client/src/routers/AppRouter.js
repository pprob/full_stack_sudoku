import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Signup from '../components/Signup'
import '../styles/App.css'


const AppRouter = () => (
  <BrowserRouter>
    <div className='app'>
      <Banner />
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/signup' component={Signup}/>
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)

export default AppRouter

