import React, { Component } from 'react'
import classes from './Profile.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from '../../UI/Card/Card';

export class Profile extends Component {
  render() {
    return (
      <Container className="mt-2">
        <Row noGutters={true} >
          <Col lg={5}>
            <Card>
              <Row noGutters={true}>
                <div className={classes.profilePic}></div>
                <Col>
                  <div>
                    <h1>
                      MATIAS ELLERA
                    </h1>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div >
                    Hello, I am a full stack developer
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col>
            <Card isSecondary>
              Love you linda :)
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Profile;
