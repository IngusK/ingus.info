import React from 'react';
import {Link} from 'react-router-dom';

import style from './styles.scss';

export default () => (
  <div className="main-content">
    <div className="top-slider">
      <div className="slider-description">
        <h3>January 21, 2017</h3>
        <Link to=''><h2>India with<br/>Beautiful Destinations</h2></Link>
        <h5>Travel adventures</h5>
      </div>
      <div className="slider-photo">
        <Link to=''><img src="../img/sample.jpg" alt="Travel photo" /></Link>
      </div>
    </div>
  </div>
);
