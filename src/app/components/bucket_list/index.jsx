import React from 'react';
import {database} from "firebase";
import {NavLink, withRouter} from 'react-router-dom';

import style from './styles.scss';

const BucketListItem = ({goal, done, link = '/photography/'}) => (
  <li className={`${done && 'done'}`}>
    {done ?
      <NavLink to={link}>
        {goal}
      </NavLink>
      :
      <span>{goal}</span>
    }
  </li>
);

export default BucketListItem;
