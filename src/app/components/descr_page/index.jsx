import React from 'react';
import {database} from "firebase";
import ImageZoom from 'react-medium-image-zoom';

import style from './styles.scss';

export default class DescrPage extends React.PureComponent {

  static defaultProps = {
    img: '',
    alt: '',
    descr: '',
    descrDef: '',
  }

  props: {
    img: string,
    alt: string,
    descr: string,
    descrDef: string,
  }

  render() {
    const {img, alt, descr, descrDef} = this.props;
    return (
      <div className={'descr-image'}>
        {img &&
          <ImageZoom
            image={{
              src: img,
              alt: alt,
              style: {'height': 'auto'}
            }}
            shouldRespectMaxDimension={true}
          />
        }
        {descr ?
          <p>{descr}</p>
          :
          <span>{descrDef}</span>
        }
      </div>
    );
  }
};