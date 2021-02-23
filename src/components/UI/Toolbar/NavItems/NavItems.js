import React from 'react';
import NavItem from '../NavItem/NavItem';
import classes from './NavItems.module.scss';
import Button from '../../Button/Button';

const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/matiasellera/';

const navItems = (props) => {
  let navItemsClass = classes.navItems;
  if (props.isSidebar) navItemsClass = classes.sidebarNavitems;

  const getInTouchClickHandler = () => {
    window.open(LINKEDIN_PROFILE_URL, '_blank');
  }

  return (
    <ul className={navItemsClass}>
      <NavItem link="lab" linkClicked={props.linkClicked}>Lab</NavItem>
      {
        props.isSidebar ?
          <NavItem link={LINKEDIN_PROFILE_URL} linkClicked={props.linkClicked} external>Get in touch</NavItem> :
          <div className="mx-3">
            <Button clicked={getInTouchClickHandler}>Get in touch</Button>
          </div>
      }
    </ul>

  )
}

export default navItems;