import './App.css';
import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import {Redirect, Switch } from "react-router-dom";
import News from './pages/News';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          component={News}
          path='/news' 
          exact={true}
        />
        <Route
          component={User}
          path='/user/:name'
          exact={true}
        />
        <Redirect to='/news'/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
