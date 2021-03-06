import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import MovieDetail from './components/views/MovieDetail/MovieDetail'
import Auth from './hoc/auth'
import Head from './components/views/head/Head'

function App() {
  return (
    <div>
    <Head/>
    <Router>
      <div>
        <hr/>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)}/>
          <Route exact path="/login" component={Auth(LoginPage, false)}/>
          <Route exact path="/register" component={Auth(RegisterPage, false)}/>
          <Route exact path="/movie/:movieId" component={MovieDetail}/>
        </Switch>
      </div>
    </Router>
  </div>
  );
}

export default App;
