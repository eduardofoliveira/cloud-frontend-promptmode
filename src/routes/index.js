import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Domains from '../pages/Domains';
import Users from '../pages/Users';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/dominios" component={Domains} isPrivate />
      <Route path="/usuarios" component={Users} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
