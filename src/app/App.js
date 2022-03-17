import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import Footer from './shared/Footer';


class App extends Component {
  state = {}
  componentDidMount() {
    this.onRouteChanged();
    console.log("geldim")
    console.log(this);
  }
  render () {
    let navbarComponent = !this.state.isFullPageLayout ? <Navbar/> : '';
    let sidebarComponent = !this.state.isFullPageLayout ? <Sidebar/> : '';
    let footerComponent = !this.state.isFullPageLayout ? <Footer/> : '';
    return (
      <div className="container-scroller">
        { sidebarComponent }
        <div className="container-fluid page-body-wrapper">
          { navbarComponent }
          <div className="main-panel">
            <div className="content-wrapper">
              <AppRoutes/>
            </div>
            { footerComponent }
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log("ROUTE CHANGED");
    
    const body = document.querySelector('body');
    
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/user-pages/login-1','/user-pages/Home', '/user-pages/login-2', '/user-pages/register-1', '/user-pages/register-2', '/user-pages/lockscreen', '/error-pages/error-404', '/error-pages/error-500', '/general-pages/landing-page'];
    for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ) {
      if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
        this.setState({
          isFullPageLayout: true
        })
        document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
     //   if(this.props.location.pathname=='/user-pages/Home')
    //    {
       //  console.log( document.querySelector('.container-fluid'))
   //      document.querySelector('.container-fluid').classList.remove('container-fluid')
   //      document.querySelector('.page-body-wrapper').classList.remove('page-body-wrapper')
   //       document.querySelector('.container-scroller').classList.remove('container-scroller');
   //       document.querySelector('.full-page-wrapper').classList.remove('full-page-wrapper')
   //       document.querySelector('.main-panel').classList.remove('main-panel')
  //       document.querySelector('.content-wrapper').classList.remove('content-wrapper')   
    //    }
    
        break;
      } else {
        this.setState({
          isFullPageLayout: false
        })
        document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
      }
    }
  }

}

export default (withRouter(App));