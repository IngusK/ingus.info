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
    photography: false,
  }

  props: {
    img: string,
    alt: string,
    descr: string,
    descrDef: string,
    photography: boolean,
  }

  render() {
    const {img, alt, descr, descrDef, photography} = this.props;
    return (
      <div>
        {photography ?
          <div className="category-image">
            <h3>{alt}</h3>
            <img
              alt={alt}
              src={img}
            />
          </div>
        :
        <div className="descr-image">
          {img.includes(".jpg") &&
          <ImageZoom
            image={{
              src: img,
              alt: alt,
            }}
            zoomImage={{
              src: img,
              alt: alt,
              className: 'zoom-img'
            }}
            shouldRespectMaxDimension={true}
          />
          }
          {img.includes("youtube") &&
            <div className="iframe-wrapper">
              <iframe src={img} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
          }
          {descr ?
            <p dangerouslySetInnerHTML={{__html:descr}} />
            :
            <span>{descrDef}</span>
          }
        </div>
        }
      </div>
    );
  }
};
