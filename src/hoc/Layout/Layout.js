import React, { Component } from 'react';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Home from '../../containers/Home/Home';
import Sidebar from '../../components/UI/Sidebar/Sidebar';
import NavItems from '../../components/UI/Toolbar/NavItems/NavItems';
import { Route } from 'react-router-dom';
import Lab from '../../containers/Lab/Lab';
import classes from './Layout.module.scss';
import UnderConstruction from '../../containers/UnderConstruction/UnderConstruction';

class Layout extends Component {
  state = {
    showSidebar: false
  }

  sidebarClosedHandler = () => {
    this.setState({ showSidebar: false })
  }

  openMenuHandler = () => {
    this.setState({ showSidebar: true })
  }

  render() {
    return (
      <React.Fragment>
        <Sidebar show={this.state.showSidebar} sidebarClosed={this.sidebarClosedHandler}>
          <NavItems isSidebar linkClicked={this.sidebarClosedHandler}></NavItems>
        </Sidebar>
        <div className="container">
          <Toolbar menuClicked={this.openMenuHandler}></Toolbar>
        </div>
        <div className={classes.sections}>
          <Route path="/" exact component={Home} />
          <Route path="/lab" exact component={Lab} />
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;