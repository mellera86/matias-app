import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Skill.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Skill extends Component {
  render() {

    let rating = [];
    if (this.props.rating) {
      for (let i = 0; i < 5; i++) {
        if (i < this.props.rating) rating.push(true)
        else rating.push(false)
      }
    }
    return (
      <Row class="my-2">
        <Col>
          {this.props.children}
        </Col>
        <Col>
          <div className={classes.rating}>
            {rating.map(r => (r ? <FontAwesomeIcon icon="circle" /> : <FontAwesomeIcon icon="dot-circle" />))}
          </div>
        </Col>
      </Row>
    )
  }
}

export default Skill;
