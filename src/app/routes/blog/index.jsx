import React from 'react';
import {Link} from 'react-router-dom';
import {database} from "firebase";

import style from './styles.scss';

export default class Blog extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    blogPageContent: [],
  }

  componentDidMount() {
    var blogPage = database().ref('blog/');
    blogPage.on('value', (data) => {
      this.setState({ blogPageContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.blogPageContent[nr] && this.state.blogPageContent[nr][val];
  }

  render() {
    return (
      <div className="blog-content">
        Blog content
      </div>
    );
  }
};
