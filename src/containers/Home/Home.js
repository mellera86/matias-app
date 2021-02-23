import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../../store/actions';
import Section from '../../components/UI/Section/Section';
import Profile from '../../components/Home/Profile/Profile';

class Home extends Component {
  componentDidMount() {
    // jsonPlaceholderApi.get('/todos/1')
    //   .then(res => {
    //     console.log(res)
    //   })
  }

  render() {
    return (
      <React.Fragment>
        <Section kind="primary">
          <Profile></Profile>
        </Section>
      </React.Fragment>
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
