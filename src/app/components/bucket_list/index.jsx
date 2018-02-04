import React from 'react';
import {database} from "firebase";
import {NavLink, withRouter} from 'react-router-dom';

import style from './styles.scss';

const BucketListItem = ({goal, done, link}) => (
  <li className={`bucket-list ${done && 'done'}`}>
    {link ?
      <NavLink to={`/bucket-list/${link}`}>
        {goal}
      </NavLink>
      :
      <span>{goal}</span>
    }
  </li>
);

export default BucketListItem;
