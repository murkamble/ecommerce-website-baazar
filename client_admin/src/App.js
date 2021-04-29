import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import './App.css';
import PrivateRoute from "./components/HOC/PrivateRoute";

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <PrivateRoute path='/' exact component={Home} />
        <Route path='/Signin' component={Signin} />
        <Route path='/Signup' component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
