import React, { Component } from 'react';
import NavItem from '../NavItem/NavItem';
import classes from './NavItems.module.scss';
import Button from '../../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setTheme } from '../../../../styles/styles-helper';

const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/matiasellera/';
class NavItems extends Component {
  state = {
    isNight: false
  }

  render() {

    let navItemsClass = classes.navItems;
    if (this.props.isSidebar) navItemsClass = classes.sidebarNavitems;

    const getInTouchClickHandler = () => {
      window.open(LINKEDIN_PROFILE_URL, '_blank');
    }

    const toggleThemeHandler = () => {
      if (this.state.isNight) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
      this.setState(prevState => ({
        isNight: !prevState.isNight
      }));
    }

    return (
      <ul className={navItemsClass}>
        {/* <NavItem link="lab" linkClicked={this.props.linkClicked}>Lab</NavItem> */}
        <div className={classes.theme}>
          {
            this.state.isNight ?
              <FontAwesomeIcon icon="moon" onClick={toggleThemeHandler} title="Dark Mode" /> :
              <FontAwesomeIcon icon="sun" onClick={toggleThemeHandler} title="Light Mode" />
          }
        </div>
        {
          this.props.isSidebar ?
            <NavItem link={LINKEDIN_PROFILE_URL} linkClicked={this.props.linkClicked} external>Get in touch</NavItem> :
            <div className="mx-3">
              <Button clicked={getInTouchClickHandler}>Get in touch</Button>
            </div>
        }
      </ul>
    )
  }
}

export default NavItems;