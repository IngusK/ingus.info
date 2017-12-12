import React from 'react';
import {database} from "firebase";

import style from './styles.scss';

export default class ImageEmpty extends React.PureComponent {

  static defaultProps = {
    img: '',
    alt: '',
  }

  props: {
    img: string,
    alt: string,
  }

  render() {
    const {img, alt} = this.props;
    return (
      <li className="category-image">
        <h3>{alt}</h3>
        <img
          alt={alt}
          ref="image"
          src={img}
        />
      </li>
    );
  }
};
