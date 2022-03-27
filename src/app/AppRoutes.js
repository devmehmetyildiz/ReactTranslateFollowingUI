import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';


const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Stock = lazy(() => import('./dashboard/Stock'));
const Login = lazy(() => import('./user/Login'));
const Logout = lazy(()=> import('./user/Logout'))
const Register = lazy(() => import('./user/Register'));
class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />     
          <Route exact path="/Stock" component={ Stock } />  
          <Route exact path="/Login" component={ Login } />   
          <Route exact path="/Logout" component={ Logout } />   
          <Route exact path="/Register" component={ Register } />  
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;