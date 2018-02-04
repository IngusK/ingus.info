import React from 'react';
import {database} from "firebase";
import ImageZoom from 'react-medium-image-zoom';

import style from './styles.scss';

export default class BucketImage extends React.PureComponent {

  constructor(args) {
    super(args);

    this.state = {
      bucketContent: [],
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
    var bucketPage = database().ref('bucketlist/');
    bucketPage.on('value', (data) => {
      this.setState({ bucketContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.bucketContent[nr] && this.state.bucketContent[nr][val];
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
          <p dangerouslySetInnerHTML={{__html:this.getValue('description', 2)}} />
        }
      </div>
    );
  }
};
