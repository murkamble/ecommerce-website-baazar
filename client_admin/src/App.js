import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import './App.css';
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions";
import Orders from './containers/Orders';
import Products from './containers/Products';

const App = (props) => {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [])

  return (
    <div>
      <Switch>
        <PrivateRoute path='/' exact component={Home} />
        <PrivateRoute path='/products' component={Products} />
        <PrivateRoute path='/orders' component={Orders} />

        <Route path='/Signin' component={Signin} />
        <Route path='/Signup' component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
