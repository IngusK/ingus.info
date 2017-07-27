import React from 'react';
import {Link} from 'react-router-dom';
import {database} from "firebase";
import Facebook from '../../../../img/icons/facebook-icon.svg';
import Instagram from '../../../../img/icons/instagram-icon.svg';
import Linkedin from '../../../../img/icons/linkedin-icon.svg';
import Github from '../../../../img/icons/github-icon.svg';

import styles from './styles/styles-footer.scss';

export default class Footer extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    content: [],
  }

  componentDidMount() {
    var posts = database().ref('master/');
    posts.on('value', (data) => {
      this.setState({ content: data.val() });
    });
  };

  getValue(val) {
    return this.state.posts[0] && this.state.posts[0][val];
  }

  render() {
    return (
      <footer>
        <ul>
          <li><a href="https://www.facebook.com/ingus.kruklitis" target="_blank"><Facebook /></a></li>
          <li><a href="https://www.instagram.com/ingus/" target="_blank"><Instagram /></a></li>
          <li><a href="https://www.linkedin.com/in/ingusk/" target="_blank"><Linkedin /></a></li>
          <li><a href="https://github.com/IngusK" target="_blank"><Github /></a></li>
        </ul>
        <p>www.ingus.info © All rights reserved.</p>
      </footer>
    );
  }
};
