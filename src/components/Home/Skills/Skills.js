import React, { Component } from 'react'
import classes from './Skills.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from '../../UI/Card/Card';
import Skill from './Skill/Skill';

export class Skills extends Component {
  render() {
    return (
      <Card isGlass>
        <Row>
          <Col>
            <div className="card-title">
              SKILLS
            </div>
          </Col>
        </Row>
        <Card>
          <Row>
            <Col>
              <Skill rating="5">Angular</Skill> <hr />
              <Skill rating="5">HTML</Skill><hr />
              <Skill rating="5">CSS/SCSS</Skill><hr />
              <Skill rating="5">JavaScript</Skill><hr />
              <Skill rating="4">React</Skill><hr />
              <Skill rating="3">C#</Skill><hr />
              <Skill rating="3">Java</Skill><hr />
              <Skill rating="3">MySQL</Skill>
            </Col>
          </Row>
        </Card>
      </Card>
    )
  }
}

export default Skills;
