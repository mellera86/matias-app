import React, { Component } from 'react'
import classes from './Card.module.scss';

export class Card extends Component {
  render() {
    let cardClass = [classes.card];
    if (this.props.isSecondary) {
      cardClass.push(classes.secondary);
    } else if (this.props.isGlass) {
      cardClass.push(classes.glass);
    } else if (this.props.isPrimary) {
      cardClass.push(classes.primary);
    } else {
      cardClass.push(classes.default);
    }
    return (
      <div className={cardClass.join(' ')}>
        {this.props.children}
      </div>
    )
  }
}

export default Card
