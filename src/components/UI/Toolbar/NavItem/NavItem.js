import React from 'react';
import classes from './NavItem.module.scss';
import { NavLink } from 'react-router-dom';

const navItem = (props) => {
  return (
    <li className={classes.navItem} onClick={props.linkClicked}>
      {
        props.external ?
        <a href={props.link} target="_blank" rel="noreferrer">{props.children}</a> : 
        <NavLink to={props.link} exact activeClassName={classes.active}>{props.children}</NavLink>
      }
    </li>
  )
}

export default navItem; 