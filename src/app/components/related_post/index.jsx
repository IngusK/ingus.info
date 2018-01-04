import React from 'react';
import style from './styles.scss';

export default class RelatedPosts extends React.PureComponent {

  render() {
    const {img, alt, category, title} = this.props;
    return (
      <li>
        <a href="#">
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
