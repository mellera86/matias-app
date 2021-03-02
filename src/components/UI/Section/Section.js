import React, { Component } from 'react'
import classes from './Section.module.scss';
import PropTypes from 'prop-types';

export class Section extends Component {
  render() {
    let sectionTypeClass = '';
    // switch (this.props.kind) {
    //   case ('primary'):
    //     sectionTypeClass = classes.primary;
    //     break;
    //   case ('primary-off'):
    //     sectionTypeClass = classes.primaryOff;
    //     break;
    //   case ('secondary'):
    //     sectionTypeClass = classes.secondary;
    //     break;
    //   case ('secondary-off'):
    //     sectionTypeClass = classes.secondaryOff;
    //     break;
    //   case ('highlight'):
    //     sectionTypeClass = classes.highlight;
    //     break;
    //   default:
    //     sectionTypeClass = '';
    // }

    return (
      <div className={`${classes.section} ${sectionTypeClass}`}>
        <div className="container px-4">
          {this.props.children}
        </div>
      </div>
    )
  }
}

Section.propTypes = {
  kind: PropTypes.string.isRequired
};

export default Section
