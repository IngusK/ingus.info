import React from 'react';
import { Link } from 'react-router-dom';

import style from './styles.scss';

export default class RelatedPosts extends React.PureComponent {

  render() {
    const {img, alt, category, title, link} = this.props;
    return (
      <li>
        <a href={link}>
          <img
            alt={alt}
            src={img}
          />
          <h5>{category}</h5>
          <h3>{title}</h3>
        </a>
      </li>
    );
  }
};
