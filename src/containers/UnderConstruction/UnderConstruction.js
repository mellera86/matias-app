import React, { Component } from 'react'
import Card from '../../components/UI/Card/Card';
import classes from './UnderConstruction.module.scss';
import Button from '../../components/UI/Button/Button';

export class UnderConstruction extends Component {
  render() {
    const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/matiasellera/';

    const getInTouchClickHandler = () => {
      window.open(LINKEDIN_PROFILE_URL, '_blank');
    }

    return (
      <Card>
        <div className="text-center">
          Thank you for visiting! Unfortunately, this site is under construction for now. Stay tuned! <br />
        </div>
        <div className="text-center my-4">
          <Button clicked={getInTouchClickHandler}>Get in touch</Button>
        </div>
      </Card>
    )
  }
}

export default UnderConstruction
