import React from 'react';
import {Link} from 'react-router-dom';
import {database} from "firebase";
import BucketListItem from '../../components/bucket_list/index.jsx';

import style from './styles.scss';

export default class BucketList extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getBucketPosts = this.getBucketPosts.bind(this);
  }

  state = {
    bucketContent: [],
  }

  componentDidMount() {
    this.getBucketPosts();
  };

  getBucketPosts() {
    var value = database().ref('bucketlist/');
    value.on('value', (data) => {
      const bucketContent = data.val();
      this.setState({ bucketContent });
    });
  };

  render() {
    const { bucketContent } = this.state;
    return (
      <div className="bucket-content">
        <div className="title">
          <h2>Everything is possible..</h2>
          <p><strong>Bucket list</strong> is a never-ending work in progress, continuously being altered, updated, and improved.</p>
          <p>It is my hope that you use these ideas as inspiration to create your own crazy fun bucket list. And then you take at least one step everyday to complete the items on it. This bucket list has completely changed my life (for the better, of course!) and I wish the same for you.</p>
        </div>
        <ol className="list">
        {bucketContent.map((item, index) => (
          <BucketListItem key={index}
            done={item.done}
            goal={item.goal}
            link={item.url}
          />
        ))}
        </ol>
      </div>
    );
  }
};
