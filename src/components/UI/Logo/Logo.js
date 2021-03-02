import React from 'react';
import classes from './Logo.module.scss';
import { setTheme } from '../../../styles/styles-helper';

const changeThemeHandler = () => {
  setTheme('main');
}

const Logo = () => {
  return (
    <div className={classes.logo} onClick={() => changeThemeHandler()}>Matias Ellera</div>
  )
}

export default Logo;