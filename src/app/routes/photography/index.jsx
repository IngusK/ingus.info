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
        <h2>My portfolio</h2>
        <p>Choose a photo category you want to explore.<br/>All photos were taken during some of my trips in the recent years</p>
        <ul>
          <NavLink to='/photography/aerial' className="aerial">
            <Image
              img={"../img/portfolio/aerial/riga.jpg"}
              alt={"Aerial"}
            />
          </NavLink>
          <NavLink to='/photography/people' className="people">
            <Image
              img={"../img/portfolio/people/people.jpg"}
              alt={"People"}
            />
          </NavLink>
          <NavLink to='/photography/city' className="citylife">
            <Image
              img={"../img/portfolio/citylife/city.jpg"}
              alt={"City life"}
            />
          </NavLink>
          <NavLink to='/photography/travel' className="travel">
            <Image
              img={"../img/portfolio/travel/travel.jpg"}
              alt={"Travel"}
            />
          </NavLink>
          <NavLink to='/photography/nature' className="nature">
            <Image
              img={"../img/portfolio/nature/nature.jpg"}
              alt={"Nature"}
            />
          </NavLink>
        </ul>
      </div>
    );
  }
};
