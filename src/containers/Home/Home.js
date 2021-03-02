import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../../store/actions';
import MyJourney from '../../components/Home/MyJourney/MyJourney';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Skills from '../../components/Home/Skills/Skills';
class Home extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Container>
        <Row noGutters={true}>
          <Col lg={7}>
            <MyJourney></MyJourney>
          </Col>
          <Col>
            <Skills></Skills>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter.counter,
  isLoggedin: state.auth.isLoggedin
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
