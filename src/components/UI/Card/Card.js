import React, { Component } from 'react'
import classes from './Card.module.scss';

export class Card extends Component {
  render() {
    let cardClass = [classes.card];
    if (this.props.isSecondary) {
      cardClass.push(classes.secondary);
    } else {
      cardClass.push(classes.primary);
    }
    return (
      <div className={cardClass.join(' ')}>
        {this.props.children}
      </div>
    )
  }
}

export default Card
