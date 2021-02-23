import React, { Component } from 'react';
import { connect } from 'react-redux';
import Themes from '../../components/Lab/Themes/Themes';
import { setTheme } from '../../styles/styles-helper';
import Button from '../../components/UI/Button/Button';
import Container from 'react-bootstrap/esm/Container';

class Lab extends Component {

  render() {
    return (
      <React.Fragment>
        <Themes></Themes>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Lab);
