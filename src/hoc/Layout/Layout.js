import React, { Component } from 'react';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Home from '../../containers/Home/Home';
import Sidebar from '../../components/UI/Sidebar/Sidebar';
import NavItems from '../../components/UI/Toolbar/NavItems/NavItems';
import { Route } from 'react-router-dom';
import Lab from '../../containers/Lab/Lab';
import classes from './Layout.module.scss';
import UnderConstruction from '../../containers/UnderConstruction/UnderConstruction';
import gsap from 'gsap';
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

  componentDidMount = () => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.fromTo("#matias", { opacity: 0 }, { opacity: 1, duration: 2 }, "+=1");
    tl.fromTo("#webdev", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=1");
    tl.to("#slider", { x: "-100%", duration: 1.5 });
    tl.to("#overlay", { x: "-100%", duration: 1.5 }, "-=1.3");
  }

  render() {
    return (
      <div>
        {/* Animation stuff */}
        <div className={classes.slider} id="slider"></div>
        <div className={classes.overlay} id="overlay">
          <div className={classes.matias} id="matias">
            Matias Ellera
          </div>
          <div className={classes.webdev} id="webdev">
            Web Developer
          </div>
        </div>
        {/* Actual layout */}
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
      </div>
    );
  }
}

export default Layout;