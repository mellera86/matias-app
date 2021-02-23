import React, { Component } from 'react'
import classes from './SiteIntro.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from '../../UI/Card/Card';

export class SiteIntro extends Component {
  render() {
    return (
      <Card isScondary>
        <Row>
          <Col>
            <div >
              Hello, this is the intro
            </div>
          </Col>
        </Row>
      </Card>

    )
  }
}

export default SiteIntro;
