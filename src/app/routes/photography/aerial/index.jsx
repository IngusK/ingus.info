import React from 'react';
import PortfolioImage from '../../../components/portfolio_image/index.jsx';
import {Link} from 'react-router-dom';
import {database} from "firebase";

import style from '../styles.scss';

export default class PhotographyAerial extends React.PureComponent {

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
        <h2>Aerial collection</h2>
        <p>Selection of my aerial photo collections. All of these photos were taken by me personally using different tools.<br/>In most cases I've used a drone but there are cases where a shot was taken from a plane, helicopter, hight building etc. </p>
        <PortfolioImage
          img={"../../img/portfolio/aerial/riga.jpg"}
          alt={"Aerial image of Riga old town"}
          descr={"Panoramic view of the Riga old town in Latvia"}
        />
        <PortfolioImage
          img={"../img/portfolio/aerial/la_sunset.jpg"}
          alt={"Sunset in Los Angeles"}
          descr={"Beautiful early morning sunset view over Venice beach in Los Angeles"}
        />
        <PortfolioImage
          img={"../../img/portfolio/aerial/hollywood.jpg"}
          alt={"Hollywood district"}
          descr={"Gorgeous view of the Hollydwood sign district in Los Angeles"}
        />
        <PortfolioImage
          img={"../img/portfolio/aerial/death_valley.jpg"}
          alt={"Death valley desert"}
          descr={"Lonely road that goes through an endless Death Valley desert"}
        />
        <PortfolioImage
          img={"../../img/portfolio/aerial/horse.jpg"}
          alt={"Horseshoe bend"}
          descr={"Amazing view of the horseshoe bend canyon in Arizona near the Grand Canyon"}
        />
      </div>
    );
  }
};
