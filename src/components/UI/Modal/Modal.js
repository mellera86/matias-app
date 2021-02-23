import React from 'react';
import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop show clicked={props.modalClosed}></Backdrop>
      <div className={classes.modalContainer}>
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default modal;