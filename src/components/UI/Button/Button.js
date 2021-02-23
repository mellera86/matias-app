import React from 'react';
import classes from './Button.module.scss';

const button = (props) => {
  return (
    <span className={classes.button} onClick={props.clicked}>{props.children}</span>
  )
}

export default button;