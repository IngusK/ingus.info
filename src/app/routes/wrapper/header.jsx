import React from 'react';
import {database} from "firebase";
import {Link, withRouter} from 'react-router-dom';
import Menu from '../../components/menu/index.jsx';

import styles from './styles/styles-header.scss';

export default class Header extends React.Component {

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
            <Menu
              title={'Travel'}
              url={'/travel'}
            />
            <Menu
              title={'Story Blog'}
              url={'/story-blog'}
            />
            <Menu
              title={'Photography'}
              url={'/photography'}
            />
          </ul>
          <ul className="nav-small">
            <Menu
              title={'About'}
              url={'/about'}
            />
            <Menu
              title={'CTO'}
              url={'/cto'}
            />
            <Menu
              title={'CV'}
              url={'/cv'}
            />
          </ul>
        </nav>
      </header>
    );
  }
};
