import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from './Components/shared/Spinner';


const Dashboard = lazy(() => import('./Components/dashboard/Dashboard'));
const StockListining = lazy(() => import('./Components/Stocks/StockListining'));
const StockDetails = lazy(() => import('./Components/Stocks/StockDetails'));
const StockAdd = lazy(() => import('./Components/Stocks/StockAdd'));
const Login = lazy(() => import('./Components/user/Login'));
const Logout = lazy(()=> import('./Components/user/Logout'))
const Register = lazy(() => import('./Components/user/Register'));
class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />     
          <Route exact path="/Stock" component={ StockListining } />  
          <Route exact path="/Stock/Add" component={ StockAdd } />  
          <Route exact path="/Stock/:StockId" component={ StockDetails } />  
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