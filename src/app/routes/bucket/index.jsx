import React from 'react';
import {Link} from 'react-router-dom';
import {database} from "firebase";
import BucketListItem from '../../components/bucket_list/index.jsx';

import style from './styles.scss';

export default class BucketList extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    bucketPageContent: [],
  }

  componentDidMount() {
    var aboutPage = database().ref('bucket-list/');
    aboutPage.on('value', (data) => {
      this.setState({ bucketListPageContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.bucketListPageContent[nr] && this.state.bucketListPageContent[nr][val];
  }

  render() {
    return (
      <div className="bucket-content">
        <div className="title">
          <h2>Everything is possible..</h2>
          <p>Bucket list is a never-ending work in progress, continuously being altered, updated, and improved.</p>
          <p>It is my hope that you use these ideas as inspiration to create your own crazy fun bucket list. And then you take at least one step everyday to complete the items on it. This bucket list has completely changed my life (for the better, of course!) and I wish the same for you.</p>
        </div>
        <ol className="list">
          <BucketListItem
            done
            goal='Lie under the stars'
            link='/photography/aerial'
          />
          <BucketListItem
            goal='Turn off your cell phone for a week'
          />
          <BucketListItem
            goal='Swim with the dolphins'
          />
          <BucketListItem
            goal='Diving/Snorkeling in a tropical place'
          />
          <BucketListItem
            goal='Drink Tekila in Mexico'
          />
        </ol>

      </div>
    );
  }
};
