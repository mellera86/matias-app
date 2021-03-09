import React, { Component } from 'react'
import classes from './JourneyEvent.module.scss';
import Card from '../../../UI/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class JourneyEvent extends Component {
  render() {

    let lineClass = classes.line;
    if (this.props.isFirst) lineClass = `${lineClass} ${classes.first}`;
    if (this.props.isLast) lineClass = `${lineClass} ${classes.last}`;

    return (
      <div className={classes.eventRow}>
        <div className={classes.year}>
          {this.props.year}
        </div>
        <div className={classes.marker}>
          <div className={classes.innerMarker}></div>
        </div>
        <div className={lineClass}></div>
        <div className={classes.event}>
          <div className={classes.desktopYear}>
            {this.props.year}
          </div>
          <Card className={classes.card}>
            <div className={classes.title}>
              <FontAwesomeIcon icon={this.props.icon} /> &nbsp;
              {this.props.title}
            </div>
            <div>
              {this.props.children}
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default JourneyEvent;
