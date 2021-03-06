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

  removeElement = (element) => {
    if (typeof (element) === "string") {
      element = document.querySelector(element);
    }
    return function () {
      element.parentNode.removeChild(element);
    };
  }

  componentDidMount = () => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.fromTo("#matias", { y: "100%" }, { y: "0%", duration: 1 }, "+=1");
    tl.fromTo("#webdev", { y: "100%" }, { y: "0%", duration: 1 });
    tl.to("#slider", { y: "100%", duration: 1.5 }, "+=1");
    tl.to("#overlay", { y: "100%", duration: 1.2 }, "-=1.2");
    tl.from("#toolbar", { opacity: 0, duration: 0.5 }, "-=0.6");
    tl.from("#layout", { opacity: 0, duration: 0.5 }, "-=0.3");
    tl.call(this.removeElement("#overlay"));
    tl.call(this.removeElement("#slider"));
  }

  render() {
    return (
      <div>
        {/* Animation stuff */}
        <div>
          <div className={classes.overlay} id="overlay">
            <div className={classes.textContainer}>
              <div className={classes.matias} id="matias">
                Matias Ellera
              </div>
            </div>
            <div className={classes.textContainer}>
              <div className={classes.webdev} id="webdev">
                Web Developer
              </div>
            </div>
          </div>
          <div className={classes.slider} id="slider"></div>
        </div>
        {/* Actual layout */}
        <Sidebar show={this.state.showSidebar} sidebarClosed={this.sidebarClosedHandler}>
          <NavItems isSidebar linkClicked={this.sidebarClosedHandler}></NavItems>
        </Sidebar>
        <div id="toolbar">
          <div className="container">
            <Toolbar menuClicked={this.openMenuHandler}></Toolbar>
          </div>
        </div>
        <div id="layout">
          <div className="mt-4">
            <Route path="/" exact component={Home} />
            <Route path="/lab" exact component={Lab} />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;