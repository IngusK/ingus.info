import React from 'react';
import {database} from "firebase";
import mediumZoom from 'medium-zoom';

import style from './styles.scss';

export default class Company extends React.PureComponent {

  static defaultProps = {
    date: '01.01.2017',
    company: 'Apple',
    location: 'San Francisco',
    position: 'Front-End Developer',
    description: 'Maintaining and redesigning the existing product',
  }

  props: {
    date: string,
    company: string,
    location: string,
    position: string,
    description: string,
  }


  render() {
    const {date, company, location, position, description} = this.props;
    return (
      <div className="company-block">
        <h5>{date}</h5>
        <h4>{company} <span>{location}</span></h4>
        <h5>{position}</h5>
        <p>{description}</p>
      </div>
    );
  }
};
