import React from 'react';
import {Link} from 'react-router-dom';
import {database} from "firebase";

import style from '../styles.scss';

export default class BogPost extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    blogPostPageContent: [],
  }

  componentDidMount() {
    var blogPage = database().ref('blog/');
    blogPage.on('value', (data) => {
      this.setState({ blogPostPageContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.blogPostPageContent[nr] && this.state.blogPostPageContent[nr][val];
  }

  render() {
    return (
      <div className="blog-content">
        <h2>Post 2</h2>
        <p>Selection of my aerial photo collections. All of these photos were taken by me personally using different tools.<br/>In most cases I've used a drone but there are cases where a shot was taken from a plane, helicopter, hight building etc. </p>
      </div>
    );
  }
};
