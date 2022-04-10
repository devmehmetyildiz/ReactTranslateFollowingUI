import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './Components/shared/Navbar';
import Sidebar from './Components/shared/Sidebar';
import Footer from './Components/shared/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    const currentitem = JSON.parse(localStorage.getItem('currentUser'))
    this.state={ currentitem}

  }
  componentDidMount() {
    this.onRouteChanged();

  }
  render() {
    let navbarComponent = !this.state.isFullPageLayout ? <Navbar items={this.state.currentitem}/> : '';
    let sidebarComponent = !this.state.isFullPageLayout ? <Sidebar items={this.state.currentitem}/> : '';
    let footerComponent = !this.state.isFullPageLayout ? <Footer /> : '';
    return (
      <div className="container-scroller">
        {sidebarComponent}
        <div className="container-fluid page-body-wrapper">
          {navbarComponent}
          <div className="main-panel">
            <div className="content-wrapper">
              <AppRoutes />
            </div>
            {footerComponent}
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
    const currentitem = JSON.parse(localStorage.getItem('currentUser'))
    this.setState({ currentitem : currentitem})
    const body = document.querySelector('body');

    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/Login', '/Register', '/error-pages/error-404', '/error-pages/error-500'];
    for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
      if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
        this.setState({
          isFullPageLayout: true
        })
        document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
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
