import React, { Component } from 'react';
import classes from './Toolbar.module.scss';
import Container from 'react-bootstrap/Container';
import NavItems from './NavItems/NavItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

class Toolbar extends Component {
  render() {
    return (
      <Container>
        <div className={classes.toolbar}>
          <Link className={classes.titleContainer} to="/">
            {/* <img src={logo} className={classes.logo} alt="logo" /> */}
            <Logo />
          </Link>
          <div className={classes.barsMenu} >
            <FontAwesomeIcon icon="bars" onClick={this.props.menuClicked} className={classes.bars} />
          </div>
          <header className={classes.navItems}>
            <NavItems></NavItems>
          </header>
        </div>
      </Container>
    )
  }
}

export default Toolbar;
