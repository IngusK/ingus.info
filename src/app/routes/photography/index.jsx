import React from 'react';
import Image from '../../components/image_empty/index.jsx';
import {NavLink} from 'react-router-dom';
import {database} from "firebase";

import style from './styles.scss';

export default class Photography extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    photographyPageContent: [],
  }

  componentDidMount() {
    var photographyPage = database().ref('photography/');
    photographyPage.on('value', (data) => {
      this.setState({ photographyPageContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.photographyPageContent[nr] && this.state.photographyPageContent[nr][val];
  }

  render() {
    return (
      <div className="photo-content">
        <h2>{this.getValue('portfolio', 0)}</h2>
        <p dangerouslySetInnerHTML={{__html:this.getValue('portfolio', 1)}} />
        <ul>
          <NavLink to='/photography/aerial' className="aerial">
            <Image
              img={this.getValue('link', 2)}
              alt={this.getValue('portfolio', 2)}
            />
          </NavLink>
          <NavLink to='/photography/people' className="people">
            <Image
              img={this.getValue('link', 3)}
              alt={this.getValue('portfolio', 3)}
            />
          </NavLink>
          <NavLink to='/photography/city' className="citylife">
            <Image
              img={this.getValue('link', 4)}
              alt={this.getValue('portfolio', 4)}
            />
          </NavLink>
          <NavLink to='/photography/travel' className="travel">
            <Image
              img={this.getValue('link', 5)}
              alt={this.getValue('portfolio', 5)}
            />
          </NavLink>
          <NavLink to='/photography/nature' className="nature">
            <Image
              img={this.getValue('link', 6)}
              alt={this.getValue('portfolio', 6)}
            />
          </NavLink>
        </ul>
      </div>
    );
  }
};
