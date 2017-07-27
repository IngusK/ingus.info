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
      <div className="about-content">
        <div className="title">
          <h2>About me</h2>
        </div>
        <div className="description">
          <h2>Who am I?</h2>
          <p>Hi! I'm Ingus and I come from Latvia. I'm an experienced designer and front - end developer in Riga as well as a professional traveller and photographer. I get joy from crafting great user experiences, communicating with the world, visiting different people and places but most importantly creating great unique stuff. This is why I try to explore interesting opportunities and always ready to embark on a new journey be it an interesting project of how to improve traffic in the city or trip round the world in search of the 8th World Wonder..</p>
          <h2>Technical stuff</h2>
          <p>Photoshop, Illustrator, Flash, HTML5, CSS3, Java Script, JQuery, LESS, UI, SEO, Analytics, Premiere Pro, Twitter Bootstrap 3 RC1, Foundation4, Episerver, Crossbrowsers, GitHub, FinalCut, Balsamiq, Responsiveness, Visual Studio, ModX, ..why don't you see the rest in my CV!</p>
          <h2>Travel experience</h2>
          <p>So far I've visited 42 countries world wide and have been on 4 continents. Cities and places I've visited so far: Visiting Montserrat, Exploring Barcelona, Christmas spirit in Andorra, Christmas in London, WTM Conference in London, Vacation in Paris - Part 2, Vacation in Paris - Part 1, Exploring Lisbon, Surfing in Portugal, 3 Days in Amstedam, Universal Studios in Orlando,Life in Orlando - Part 2,Life in Orlando - Part 1,Catching alligators in Orlando,John F. Kennedy Space</p>
        </div>

        {/* <h2>{this.getValue('Title')}</h2> */}
      </div>
    );
  }
};
