import React from 'react';
import {Link} from 'react-router-dom';
import {database} from "firebase";

import style from './styles.scss';

export default class About extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    aboutPageContent: [],
  }

  componentDidMount() {
    var aboutPage = database().ref('about/');
    aboutPage.on('value', (data) => {
      this.setState({ aboutPageContent: data.val() });
    });
  };

  getValue(val) {
    return this.state.aboutPageContent[0] && this.state.aboutPageContent[0][val];
  }

  render() {
    return (
      <div className="wrapper">
        <h1>{this.getValue('Title')}</h1>
        <h1>{this.getValue('Sub')}</h1>
      </div>
    );
  }
};
