import React from 'react';
import {database} from "firebase";
import {NavLink, withRouter} from 'react-router-dom';
import Menu from '../../components/menu/index.jsx';
import Bucket from '../../../../img/icons/bucket-list-icon.svg';

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
    var posts = database().ref('posts/');
    posts.on('value', (data) => {
      this.setState({ content: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.content[nr] && this.state.content[nr][val];
  }

  render() {

    return (
      <header>
        <div className="logo">
          <NavLink to='/'>
            <h1 dangerouslySetInnerHTML={{__html:this.getValue('logo', 0)}} />
          </NavLink>
          <h2>{this.getValue('logo', 1)}</h2>
        </div>
        <nav>
          <ul className="nav-large">
            <Menu
              title={this.getValue('menuTitle', 0)}
              url={this.getValue('menuLink', 0)}
            />
            <Menu
              title={this.getValue('menuTitle', 1)}
              url={this.getValue('menuLink', 1)}
            />
            <Menu
              title={this.getValue('menuTitle', 2)}
              url={this.getValue('menuLink', 2)}
            />
            <Menu
              title={this.getValue('menuTitle', 3)}
              url={this.getValue('menuLink', 3)}
            />
          </ul>
          <ul className="nav-small">
            <Menu
              title={this.getValue('menuTitle', 4)}
              url={this.getValue('menuLink', 4)}
            />
            <Menu
              title={this.getValue('menuTitle', 5)}
              url={this.getValue('menuLink', 5)}
            />
            <Menu
              title={this.getValue('menuTitle', 6)}
              url={this.getValue('menuLink', 6)}
            />
            <Menu
              title={<Bucket/>}
              url='/bucket-list'
            />
          </ul>
        </nav>
      </header>
    );
  }
};
