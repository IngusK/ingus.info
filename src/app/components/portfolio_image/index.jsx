import React from 'react';
import {database} from "firebase";

import style from './styles.scss';

export default class PortfolioImage extends React.PureComponent {

  static defaultProps = {
    img: '',
    alt: '',
    descr: '',
  }

  props: {
    img: string,
    alt: string,
    descr: string,
  }

  render() {
    const {img, alt, descr} = this.props;
    return (
      <div className="image">
        <img
          alt={alt}
          ref="image"
          src={img}
        />
        <p>{descr}</p>
      </div>
    );
  }
};
