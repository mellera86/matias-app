import React, { Component } from 'react'
import Card from '../../components/UI/Card/Card';
import classes from './UnderConstruction.module.scss';
export class UnderConstruction extends Component {
  render() {
    return (
      <Card>
        <div className="text-center mb-2">
          Thank you for visiting! Unfortunately, this site is under construction for now. Stay tuned! <br />
          In the meantime, enjoy this cat video:
        </div>
        <div className={classes.video}>
          <iframe width="500" height="385" src="https://www.youtube.com/embed/tpiyEe_CqB4" title="catVideo"></iframe>
        </div>
      </Card>
    )
  }
}

export default UnderConstruction
