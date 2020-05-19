import React from 'react';
import {database} from "firebase";
import ImageZoom from 'react-medium-image-zoom';

import style from './styles.scss';

export default class PhotographyDescription extends React.PureComponent {

  static defaultProps = {
    img: '',
    alt: '',
    descr: '',
    descrDef: '',
    photography: false,
  }

  render() {
    const {img, alt, descr, descrDef, photography, noDescr} = this.props;
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
        <div className={`descr-image ${noDescr && 'no-descr'}`}>
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
