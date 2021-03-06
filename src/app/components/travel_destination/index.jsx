import React from 'react';
import {database} from "firebase";
import {NavLink, withRouter} from 'react-router-dom';

import style from './styles.scss';

const TravelItem = ({img, name, slug}) => (
  <NavLink to={`map/${slug}`} className="thumb">
    <img src={img} alt={name} />
    <h5>{name}</h5>
  </NavLink>
);

export default TravelItem;
