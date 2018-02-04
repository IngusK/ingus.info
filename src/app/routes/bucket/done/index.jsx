import React from 'react';
import BucketImage from '../../../components/bucket_image/index.jsx';
import {database} from "firebase";

import style from '../styles.scss';

export default class BucketPage extends React.PureComponent {

  state = {
    bucketPageContent: [],
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    var bucketPage = database().ref('bucketlist/').orderByChild('slug').equalTo(params.slug);

    bucketPage.on('value', (data) => {
      const post = data.val();
      const elementKey = Object.keys(post)[0];
      this.setState({ bucketPageContent: post[elementKey] });
    });
  };

  render() {
    const { bucketPageContent } = this.state;
    return (
      <div className="photo-content">
        <h2>{bucketPageContent.goal}</h2>
        <BucketImage
          img={bucketPageContent.img}
          alt={bucketPageContent.goal}
          descr={bucketPageContent.descr}
        />
      </div>
    );
  }
};
