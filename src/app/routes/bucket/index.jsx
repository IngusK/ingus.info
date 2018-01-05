import React from 'react';
import {Link} from 'react-router-dom';
import {NavLink, withRouter} from 'react-router-dom';
import {database} from "firebase";

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
          <li>
            <NavLink to='/photography/aerial'>
              Lie under the stars
            </NavLink>
          </li>
          <li className="done">
            <NavLink to='/photography/aerial'>
              Turn off your cell phone for a week
            </NavLink>
          </li>
          <li>
            <NavLink to='/photography/aerial'>
              Swim with the dolphins
            </NavLink>
          </li>
          <li>
            <NavLink to='/photography/aerial'>
              Diving/Snorkeling in a tropical place
            </NavLink>
          </li>
          <li>
            <NavLink to='/photography/aerial'>
              Drink Tekila in Mexico
            </NavLink>
          </li>
        </ol>

      </div>
    );
  }
};
