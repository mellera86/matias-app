import React from 'react';
import classes from './Sidebar.module.scss';
import Backdrop from '../Backdrop/Backdrop';

const sidebar = (props) => {
  let sidebarClassess = [classes.sidebarContainer, classes.close];
  if (props.show) {
    sidebarClassess = [classes.sidebarContainer, classes.open];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.sidebarClosed}></Backdrop>
      <div className={sidebarClassess.join(' ')}>
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default sidebar;