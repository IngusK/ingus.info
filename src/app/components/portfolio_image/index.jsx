import React from 'react';
import {database} from "firebase";
import mediumZoom from 'medium-zoom';

import style from './styles.scss';

export default class PortfolioImage extends React.PureComponent {

  constructor(args) {
    super(args);

    this.state = {
      isZoomed: false,
    };
  }

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

  componentDidMount() {
    const zoom = mediumZoom(this.refs.image);
    zoom.addEventListeners('show', () => this.setState({ isZoomed: true }));
    zoom.addEventListeners('hidden', () => this.setState({ isZoomed: false }));
  }

  render() {
    const {img, alt, descr} = this.props;
    return (
      <div className={`portfolio-image ${this.state.isZoomed ? 'is-zoomed' : ''}`}>
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
