import React from 'react';
import {database} from "firebase";
import ImageZoom from 'react-medium-image-zoom';

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
      <div className={'portfolio-image'}>
        {img &&
          <ImageZoom
            image={{
              src: img,
              alt: alt,
            }}
            shouldRespectMaxDimension={true}
          />
        }
        <p>{descr}</p>
      </div>
    );
  }
};
