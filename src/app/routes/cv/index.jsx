import React from 'react';
import {Link} from 'react-router-dom';
import {database} from "firebase";

import style from './styles.scss';

export default class CV extends React.PureComponent {

  constructor(...args) {
    super(...args);
    this.getValue = this.getValue.bind(this);
  }

  state = {
    aboutPageContent: [],
  }

  componentDidMount() {
    var aboutPage = database().ref('cv/');
    aboutPage.on('value', (data) => {
      this.setState({ aboutPageContent: data.val() });
    });
  };

  getValue(val, nr) {
    return this.state.aboutPageContent[nr] && this.state.aboutPageContent[nr][val];
  }

  render() {
    return (
      <div className="cv-content">
        <div className="main-info">
          <img src="../../../../img/Ingus_kruklitis.jpg" alt="Ingus Kruklitis CV background" />
          <div className="description">
            <h2>Ingus Kruklitis</h2>
            <h3>CTO / Front-End developer / Web designer / Travel Photographer</h3>
            <p>I am a designer & front/end developer with experience in high-profile web projects as well as design, typography, SEO, e-commerce and advertising. I am determined and highly organized person, with a strong work ethic and proven ability to manage projects with strict budgets and timescales. My hobbies focus on creativity and inspiration. In my spare time I try to travel a lot and keep myself fit, which is why I spend a lot of my time in a gym, playing tennis, snowboarding during winter season and wake-boarding in the summer.</p>
          </div>
        </div>
        <div className="cv_info">
          <div>
            <h3>Coding</h3>
            <p>HTML5, CSS3, Java Script, Angular, JQuery, JSON, LESS, Google Analytics, Crossbrowsers, Responsive Web, Bootstrap, Foundation, Episerver, Font Awesome, ModX, SEO, GitHub, Mobile apps.</p>
            <ul>
              <li>HTML, CSS3</li>
              <li>Javascript</li>
              <li>React</li>
            </ul>
          </div>
          <div>
            <h3>Travel</h3>
            <p>HTML5, CSS3, Java Script, Angular, JQuery, JSON, LESS, Google Analytics, Crossbrowsers, Responsive Web, Bootstrap, Foundation, Episerver, Font Awesome, ModX, SEO, GitHub, Mobile apps.</p>
          </div>
          <div>
            <h3>Work Experience</h3>
            <p>HTML5, CSS3, Java Script, Angular, JQuery, JSON, LESS, Google Analytics, Crossbrowsers, Responsive Web, Bootstrap, Foundation, Episerver, Font Awesome, ModX, SEO, GitHub, Mobile apps.</p>
          </div>
          <div>
            <h3>Certificates</h3>
            <ul>
              <li>HTML, CSS3</li>
              <li>Javascript</li>
              <li>React</li>
            </ul>
          </div>
          <div>
            <h3>Photo stocks</h3>
            <p>HTML5, CSS3, Java Script, Angular, JQuery, JSON, LESS, Google Analytics, Crossbrowsers, Responsive Web, Bootstrap, Foundation, Episerver, Font Awesome, ModX, SEO, GitHub, Mobile apps.</p>
          </div>
          <div>
            <h3>CTO</h3>
            <p>HTML5, CSS3, Java Script, Angular, JQuery, JSON, LESS, Google Analytics, Crossbrowsers, Responsive Web, Bootstrap, Foundation, Episerver, Font Awesome, ModX, SEO, GitHub, Mobile apps.</p>
          </div>
        </div>
      </div>
    );
  }
};
