import React from 'react';
import {database} from "firebase";
import BucketListItem from '../../components/bucket_list/index.jsx';
import Head from '../../components/Helmet/Helmet';

import style from './styles.scss';

export default class BucketList extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getBucketPosts = this.getBucketPosts.bind(this);
    this.getValue = this.getValue.bind(this);
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
      this.setState({ bucketContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.bucketContent[nr] && this.state.bucketContent[nr][val];
  }

  render() {
    const { bucketContent } = this.state;
    return (
      <div className="bucket-content">
        <Head
          title={this.getValue('meta', 0)}
          content={this.getValue('meta', 1)}
        />
        <div className="title">
          <h2>{this.getValue('header', 0)}</h2>
          <p dangerouslySetInnerHTML={{__html:this.getValue('description', 0)}}/>
          <p dangerouslySetInnerHTML={{__html:this.getValue('description', 1)}}/>
        </div>
        <h3>{this.getValue('header', 1)}</h3>
        <ol className="list">
        {bucketContent.map((item, index) => (
          <BucketListItem key={index}
            done={item.done}
            goal={item.goal}
            link={item.slug}
          />
        ))}
        </ol>
      </div>
    );
  }
};
