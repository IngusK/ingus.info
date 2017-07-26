import React from 'react';
import {Link} from 'react-router-dom';
import {database} from "firebase";

import styles from './styles/styles-header.scss';

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
      <header>
        <div className="logo">
          <Link to='/'><h1>Ingus<span>.info</span></h1></Link>
          <h2>Travel. Photography. Coding</h2>
        </div>
        <nav>
          <ul className="nav-large">
            <li><Link to='/travel'>Travel</Link></li>
            <li><Link to='/story-blog'>Story Blog</Link></li>
            <li><Link to='/photography'>Photography</Link></li>
          </ul>
          <ul className="nav-small">
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/cto'>CTO</Link></li>
            <li><Link to='/cv'>CV</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
};
