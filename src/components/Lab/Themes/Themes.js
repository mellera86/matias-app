import React, { Component } from 'react'
import classes from './Themes.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import { setTheme } from '../../../styles/styles-helper';

export class Themes extends Component {
  render() {
    return (
      <Card>
        <Row>
          <Col>
            <div >
              <h1 >
                Themes go here
              </h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div >
              <Button clicked={() => setTheme('light')}>Light mode</Button>
              <Button clicked={() => setTheme('dark')}>Dark mode</Button>
              <Button clicked={() => setTheme('main')}>Main mode</Button>
            </div>
          </Col>
        </Row>
      </Card>
    )
  }
}

export default Themes;
