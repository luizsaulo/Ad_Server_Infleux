import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Dashboard from '../Pages/Dashboard/Dashboard'

function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/dashboard' component={Dashboard} />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;