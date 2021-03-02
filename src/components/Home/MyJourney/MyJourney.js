import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../UI/Card/Card';
import JourneyEvent from './JourneyEvent/JourneyEvent';

export class MyJourney extends Component {
  render() {
    return (
      <Card isGlass>
        <Row>
          <Col>
            <div className="card-title">
              MY JOURNEY
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <JourneyEvent year="2015" icon="suitcase" title="Internship!" isFirst>
              Summer internship at Black Knight
            </JourneyEvent>
            <JourneyEvent year="2016" icon="graduation-cap" title="Graduation!">
              Graduated from University of North Florida with a Computing and Information Sciences degree <br />
              GPA: 3.85
            </JourneyEvent>
            <JourneyEvent icon="suitcase" title="Hired!">
              Hired as a full-time Web Applications Developer I
            </JourneyEvent>
            <JourneyEvent year="2018" icon="handshake" title="Promoted!">
              Promoted to Web Applications Developer II
            </JourneyEvent>
            <JourneyEvent icon="award" title="Award!">
              Recognized with a company's Top Performer Award at Black Knight!
            </JourneyEvent>
            <JourneyEvent year="2021" icon="handshake" title="Promoted!" isLast>
              Promoted to Web Applications Developer III
            </JourneyEvent>
          </Col>
        </Row>
      </Card>
    )
  }
}

export default MyJourney;
