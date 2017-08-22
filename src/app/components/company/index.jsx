import React from 'react';
import {database} from "firebase";
import mediumZoom from 'medium-zoom';

import style from './styles.scss';

const Company = ({date = '01.01.2017', company = 'Apple', location = 'San Francisco', position = 'Front-End Developer', description = 'Maintaining and redesigning the existing product' }) => (
  <div className="company-block">
    <h5>{date}</h5>
    <h4>{company} <span>{location}</span></h4>
    <h5>{position}</h5>
    <p>{description}</p>
  </div>
);

export default Company;
