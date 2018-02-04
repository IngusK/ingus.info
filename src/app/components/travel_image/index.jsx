import React from 'react';
import {database} from "firebase";
import ImageZoom from 'react-medium-image-zoom';

import style from './styles.scss';

export default class TravelImage extends React.PureComponent {

  constructor(args) {
    super(args);

    this.state = {
      travelPageContent: [],
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
    var travelPage = database().ref('travel/');
    travelPage.on('value', (data) => {
      this.setState({ travelPageContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.travelPageContent[nr] && this.state.travelPageContent[nr][val];
  }

  render() {
    const {img, alt, descr} = this.props;
    return (
      <div className={'travel-image'}>
        {img &&
          <ImageZoom
            image={{
              src: img,
              alt: alt,
            }}
            shouldRespectMaxDimension={true}
          />
        }
        {descr ?
          <p>{descr}</p>
          :
          <p dangerouslySetInnerHTML={{__html:this.getValue('mainBlock', 4)}} />
        }
      </div>
    );
  }
};
